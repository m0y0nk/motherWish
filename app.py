from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import sqlite3
import os
from dotenv import load_dotenv
load_dotenv()
import database
import google.generativeai as genai

# Configure Gemini
genai.configure(api_key=os.environ.get("GEMINI_API_KEY", ""))
model_name = "gemini-2.0-flash"
model = genai.GenerativeModel(model_name)

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests if they were on different ports

# Initialize DB on startup
if not os.path.exists(database.DB_FILE):
    database.init_db()

@app.route('/')
def serve_index():
    return render_template('home.html')

@app.route('/service-worker.js')
def serve_sw():
    return send_from_directory('.', 'service-worker.js')

# --- API Endpoints ---

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')
    
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400
        
    try:
        # System prompt to keep it relevant to MotherWish
        prompt = f"You are Dr. Myra, a friendly, caring, and professional AI medical assistant for MotherWish India. Keep responses helpful, concise, and caring. Use emojis occasionally. If the user asks for serious medical advice, remind them to consult a human doctor. User message: {user_message}"
        response = model.generate_content(prompt)
        return jsonify({'response': response.text})
    except Exception as e:
        print(f"Gemini Error: {e}")
        return jsonify({'error': str(e)}), 500

# Serve other HTML files directly without .html extension in URL if needed
@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join('templates', path)):
        return render_template(path)
    elif os.path.exists(os.path.join('templates', path + '.html')):
        return render_template(path + '.html')
    return "Not Found", 404

# --- API Endpoints ---

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    name = data.get('name')
    mobile = data.get('mobile')
    password = data.get('password') # In production, hash this!

    if not name or not mobile or not password:
        return jsonify({'error': 'Missing required fields'}), 400

    conn = database.get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (name, mobile, password) VALUES (?, ?, ?)", 
                       (name, mobile, password))
        conn.commit()
        user_id = cursor.lastrowid
        return jsonify({'message': 'User created', 'user': {'id': user_id, 'name': name, 'mobile': mobile}}), 201
    except sqlite3.IntegrityError:
        return jsonify({'error': 'Mobile number already registered'}), 409
    finally:
        conn.close()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    mobile = data.get('mobile')
    password = data.get('password')

    conn = database.get_db_connection()
    cursor = conn.cursor()
    # In production, compare hashed passwords!
    cursor.execute("SELECT id, name, mobile FROM users WHERE mobile = ? AND password = ?", (mobile, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        # Return user details to substitute session for this demo
        return jsonify({'message': 'Login successful', 'user': dict(user)}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401


@app.route('/api/medicines', methods=['GET'])
def get_medicines():
    # Expect user_id passed via query params for this demo (instead of headers/session)
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'error': 'Unauthorized - missing user_id'}), 401

    conn = database.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM medicines WHERE user_id = ? ORDER BY CASE WHEN status = 'Active' THEN 1 ELSE 2 END", (user_id,))
    medicines = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify(medicines)


@app.route('/api/medicines', methods=['POST'])
def add_medicine():
    data = request.json
    user_id = data.get('user_id')
    name = data.get('name')
    duration = data.get('duration')
    dosage = data.get('dosage')
    schedule = data.get('schedule')  # e.g., "Morning,Night"
    
    if not all([user_id, name, duration, dosage, schedule]):
        return jsonify({'error': 'Missing required fields'}), 400
        
    conn = database.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO medicines (user_id, name, duration, dosage, schedule) 
        VALUES (?, ?, ?, ?, ?)
    """, (user_id, name, duration, dosage, schedule))
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'message': 'Medicine added', 'id': new_id}), 201


@app.route('/api/medicines/<int:id>/status', methods=['PUT'])
def update_medicine_status(id):
    data = request.json
    status = data.get('status')
    
    if status not in ['Active', 'Completed']:
        return jsonify({'error': 'Invalid status'}), 400
        
    conn = database.get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE medicines SET status = ? WHERE id = ?", (status, id))
    conn.commit()
    rows_affected = cursor.rowcount
    conn.close()
    
    if rows_affected == 0:
        return jsonify({'error': 'Medicine not found'}), 404
        
    return jsonify({'message': 'Status updated'})

    return jsonify({'message': 'Status updated'})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
