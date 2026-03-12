/* ============= Motherish SHARED JAVASCRIPT ============= */

// ===== DATA =====
const bloodData = [
  { type: 'A+', units: 24, status: 'available' }, { type: 'A-', units: 8, status: 'low' },
  { type: 'B+', units: 31, status: 'available' }, { type: 'B-', units: 3, status: 'critical' },
  { type: 'O+', units: 42, status: 'available' }, { type: 'O-', units: 6, status: 'low' },
  { type: 'AB+', units: 18, status: 'available' }, { type: 'AB-', units: 2, status: 'critical' }
];

const doctors = [
  { name: 'Dr. Rajesh Kumar', spec: 'Cardiology', dept: 'Cardiology', hosp: 'Apollo Hospitals', exp: 18, deg: 'MD, DM Cardiology', fees: 1200, rating: 4.8, color: '#1a73e8' },
  { name: 'Dr. Priya Sharma', spec: 'Neurology', dept: 'Neurology', hosp: 'Fortis Hospital', exp: 14, deg: 'MD, DM Neurology', fees: 1500, rating: 4.9, color: '#9c27b0' },
  { name: 'Dr. Anil Mehta', spec: 'Orthopedics', dept: 'Orthopedics', hosp: 'AIIMS Delhi', exp: 22, deg: 'MS Orthopaedics', fees: 800, rating: 4.7, color: '#00a651' },
  { name: 'Dr. Sunita Reddy', spec: 'Gynecology', dept: 'OBG', hosp: 'Manipal Hospital', exp: 16, deg: 'MD, DGO', fees: 1000, rating: 4.8, color: '#e91e63' },
  { name: 'Dr. Vikram Singh', spec: 'Pediatrics', dept: 'Pediatrics', hosp: 'Max Healthcare', exp: 12, deg: 'MD Pediatrics', fees: 700, rating: 4.6, color: '#ff9800' },
  { name: 'Dr. Meera Patel', spec: 'ENT', dept: 'ENT', hosp: 'Columbia Asia', exp: 10, deg: 'MS ENT', fees: 600, rating: 4.5, color: '#00bcd4' },
  { name: 'Dr. Arjun Nair', spec: 'Pulmonology', dept: 'Pulmonology', hosp: 'Narayana Health', exp: 15, deg: 'MD, DM Pulm.', fees: 900, rating: 4.7, color: '#607d8b' },
  { name: 'Dr. Kavitha Rao', spec: 'Oncology', dept: 'Oncology', hosp: 'HCG Cancer Centre', exp: 19, deg: 'MD, DM Oncology', fees: 2000, rating: 4.9, color: '#f44336' },
  { name: 'Dr. Suresh Babu', spec: 'Urology', dept: 'Urology', hosp: 'Aster CMI', exp: 13, deg: 'MS, MCh Urology', fees: 1100, rating: 4.6, color: '#3f51b5' },
  { name: 'Dr. Deepa Krishnan', spec: 'Gastroenterology', dept: 'Gastro', hosp: 'BGS Gleneagles', exp: 11, deg: 'MD, DM Gastro', fees: 850, rating: 4.5, color: '#8bc34a' },
  { name: 'Dr. Ramesh Gupta', spec: 'Dental', dept: 'Dentistry', hosp: 'Clove Dental', exp: 9, deg: 'BDS, MDS', fees: 400, rating: 4.4, color: '#009688' },
  { name: 'Dr. Anjali Das', spec: 'Radiology', dept: 'Radiology', hosp: 'Medanta', exp: 14, deg: 'MD Radiology', fees: 600, rating: 4.6, color: '#795548' },
  { name: 'Dr. Sanjay Verma', spec: 'Ophthalmology', dept: 'Eye Care', hosp: 'Sankara Eye', exp: 17, deg: 'MS Ophthalmology', fees: 750, rating: 4.7, color: '#2196f3' },
  { name: 'Dr. Lakshmi Iyer', spec: 'Nephrology', dept: 'Nephrology', hosp: 'KMC Hospital', exp: 16, deg: 'MD, DM Nephro', fees: 1000, rating: 4.7, color: '#673ab7' },
  { name: 'Dr. Prakash Bhat', spec: 'Neurosurgery', dept: 'Neurosurgery', hosp: 'NIMHANS', exp: 24, deg: 'MCh Neurosurgery', fees: 2500, rating: 5.0, color: '#1a73e8' },
  { name: 'Dr. Rekha Pillai', spec: 'IVF & Fertility', dept: 'Reproductive Med', hosp: 'Nova IVI Fertility', exp: 13, deg: 'MD, DRM', fees: 1800, rating: 4.8, color: '#e91e63' },
  { name: 'Dr. Mohan Kumar', spec: 'Ayurveda', dept: 'Ayurveda', hosp: 'SDM Ayurveda', exp: 20, deg: 'BAMS, MD Ayurveda', fees: 350, rating: 4.5, color: '#4caf50' },
  { name: 'Dr. Fatima Khan', spec: 'General Medicine', dept: 'Internal Med', hosp: 'Victoria Hospital', exp: 8, deg: 'MBBS, MD', fees: 300, rating: 4.3, color: '#ff5722' },
  { name: 'Dr. Ravi Shankar', spec: 'General Surgery', dept: 'Surgery', hosp: 'St Johns Medical', exp: 21, deg: 'MS General Surgery', fees: 800, rating: 4.6, color: '#607d8b' },
  { name: 'Dr. Pooja Nambiar', spec: 'Dermatology', dept: 'Dermatology', hosp: 'KIMS Hospital', exp: 10, deg: 'MD Dermatology', fees: 650, rating: 4.5, color: '#ff9800' }
];

const hospitals = [
  { name: 'Apollo Hospitals', loc: 'Bannerghatta Rd, Bangalore', rating: 4.8, beds: 180, icu: 42, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless', 'Ambulance', 'NICU'], insurance: 'Star Health, HDFC Ergo, Bajaj' },
  { name: 'Fortis Hospital', loc: 'Cunningham Rd, Delhi', rating: 4.7, beds: 250, icu: 58, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless', 'Ambulance'], insurance: 'HDFC Ergo, United India, Reliance' },
  { name: 'AIIMS New Delhi', loc: 'Ansari Nagar, New Delhi', rating: 4.9, beds: 400, icu: 80, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Trauma Centre', 'Research'], insurance: 'CGHS, ESIC, PM-JAY' },
  { name: 'Narayana Health', loc: 'Hosur Rd, Bangalore', rating: 4.7, beds: 320, icu: 65, facilities: ['ICU', 'Blood Bank', 'Cath Lab', 'Emergency', 'Cashless'], insurance: 'Star Health, New India, Bajaj' },
  { name: 'Manipal Hospital', loc: 'HAL Airport Rd, Manipal', rating: 4.6, beds: 200, icu: 48, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless', 'Ambulance'], insurance: 'Star Health, HDFC Ergo' },
  { name: 'Max Super Speciality', loc: 'Saket, Mumbai', rating: 4.7, beds: 280, icu: 62, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless', 'NICU'], insurance: 'Bajaj, HDFC Ergo, Star Health' },
  { name: 'Aster CMI Hospital', loc: 'Hebbal, Bangalore', rating: 4.5, beds: 160, icu: 36, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless'], insurance: 'Aditya Birla, Star Health' },
  { name: 'Medanta Hospital', loc: 'Sector 38, Gurugram', rating: 4.8, beds: 350, icu: 72, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless', 'Research'], insurance: 'All major insurers' },
  { name: 'HCG Cancer Centre', loc: 'Kalyan Nagar, Bangalore', rating: 4.9, beds: 150, icu: 30, facilities: ['ICU', 'Chemo', 'Radiation', 'Cashless', 'Ambulance'], insurance: 'Star Health, HDFC Ergo' },
  { name: 'St Johns Medical', loc: 'Koramangala, Bangalore', rating: 4.6, beds: 220, icu: 50, facilities: ['ICU', 'Blood Bank', 'Emergency', 'Cashless', 'Ambulance'], insurance: 'United India, Star Health, New India' }
];

const ambulances = [
  { name: 'Apollo 24/7 Ambulance', info: 'Advanced Life Support · KA-01-AB-1234', status: 'available' },
  { name: 'Fortis Emergency Unit', info: 'Basic Life Support · KA-03-CD-5678', status: 'busy' },
  { name: 'Narayana Quick Response', info: 'Advanced Life Support · KA-05-EF-9012', status: 'available' },
  { name: 'Aster Emergency Care', info: 'Patient Transport · KA-02-GH-3456', status: 'available' },
  { name: 'Max Ambulance Service', info: 'Neonatal Transport · KA-04-IJ-7890', status: 'busy' }
];

const chatResponses = {
  'book appointment': 'To book an appointment:\n1. Go to the "Book Appointment" page\n2. Select your doctor\n3. Choose date & time\n4. Get your OPD queue number & QR code!\n\nWant me to take you there? 📅',
  'blood availability': 'Current blood availability:\n🟢 A+: 24 units\n🟢 O+: 42 units\n🟡 A-: 8 units (Low)\n🔴 B-: 3 units (Critical)\n\nFor emergency blood requests, call 9343335183 🩸',
  'find doctors': 'We have 20+ verified doctors across all specializations:\n👨‍⚕️ Cardiology, Neurology, Orthopedics\n👩‍⚕️ Gynecology, Pediatrics, ENT\n🔬 Oncology, Nephrology, and more!\n\nUse filters on the Categories page 🔍',
  'insurance help': 'We support major insurance providers:\n✅ Star Health Insurance\n✅ HDFC Ergo\n✅ Bajaj Allianz\n✅ New India Assurance\n✅ United India Insurance\n\nCashless treatment at 500+ hospitals! 🛡️',
  'emergency': '🚨 EMERGENCY CONTACTS:\n📞 108 — Free Government Ambulance\n📞 9343335183 — Motherish Helpline\n🏥 Apollo: 080-22941111\n🏥 Fortis: 011-42776222\n\nDo you need an ambulance right now? 🚑'
};

let myMedicines = [];

// ===== DARK MODE =====
function initDarkMode() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    if (document.body.classList.contains('dark-mode')) toggle.classList.remove('off');
    else toggle.classList.add('off');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  const toggle = document.getElementById('darkModeToggle');
  if (toggle) {
    if (isDark) toggle.classList.remove('off');
    else toggle.classList.add('off');
  }
  showNotif(isDark ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
}

// ===== AUTH =====
function initAuth() {
  const user = JSON.parse(localStorage.getItem('mediUser') || 'null');
  const loginBtn = document.getElementById('authBtn');
  if (loginBtn && user) {
    loginBtn.textContent = `👤 ${user.name}`;
    loginBtn.onclick = () => showNotif(`Logged in as ${user.name}`);
  }
}

async function doLogin() {
  const mobile = document.getElementById('loginEmail')?.value;
  const pass = document.getElementById('loginPassword')?.value;
  if (!mobile || !pass) { showNotif('⚠️ Please enter mobile number and password.'); return; }

  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobile: mobile, password: pass })
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('mediUser', JSON.stringify(data.user));
      document.getElementById('loginModal').style.display = 'none';
      showNotif('✅ Login successful! Welcome back.');
      initAuth();
      if (typeof initMedicines === 'function') initMedicines(); // Reload medicines if on that page
    } else {
      showNotif(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    console.error(err);
    showNotif('❌ Failed to connect to server.');
  }
}

async function doSignup() {
  const name = document.getElementById('signupName')?.value;
  const mobile = document.getElementById('signupMobile')?.value;
  const pass = document.getElementById('signupPassword')?.value;
  const confirm = document.getElementById('signupConfirm')?.value;

  if (!name || !mobile || !pass) { showNotif('⚠️ Please fill all required fields.'); return; }
  if (pass !== confirm) { showNotif('⚠️ Passwords do not match!'); return; }

  try {
    const res = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, mobile, password: pass })
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('mediUser', JSON.stringify(data.user));
      document.getElementById('loginModal').style.display = 'none';
      showNotif('✅ Account created! Welcome to Motherish.');
      initAuth();
      if (typeof initMedicines === 'function') initMedicines();
    } else {
      showNotif(`❌ Error: ${data.error}`);
    }
  } catch (err) {
    console.error(err);
    showNotif('❌ Failed to connect to server.');
  }
}

function doLogout() {
  localStorage.removeItem('mediUser');
  showNotif('✅ Logged out successfully.');
  setTimeout(() => window.location.href = 'home.html', 1000);
}

function switchAuthTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
  document.getElementById('loginTabBtn').classList.toggle('active', tab === 'login');
  document.getElementById('signupTabBtn').classList.toggle('active', tab === 'signup');
}

// ===== NAV =====
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'home.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.remove('active');
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'home.html') || (page === 'index.html' && href === 'home.html')) {
      a.classList.add('active');
    }
  });
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== SEARCH =====
function initSearch() {
  const input = document.querySelector('.search-bar input');
  if (!input) return;
  let resultsDiv = document.querySelector('.search-results');
  if (!resultsDiv) {
    resultsDiv = document.createElement('div');
    resultsDiv.className = 'search-results';
    document.querySelector('.search-bar').appendChild(resultsDiv);
  }

  input.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    if (q.length < 2) { resultsDiv.classList.remove('active'); return; }

    let results = [];
    doctors.forEach(d => {
      if (d.name.toLowerCase().includes(q) || d.spec.toLowerCase().includes(q) || d.hosp.toLowerCase().includes(q)) {
        results.push({ text: `👨‍⚕️ ${d.name} — ${d.spec} at ${d.hosp}`, link: 'categories.html' });
      }
    });
    hospitals.forEach(h => {
      if (h.name.toLowerCase().includes(q) || h.loc.toLowerCase().includes(q)) {
        results.push({ text: `🏥 ${h.name} — ${h.loc}`, link: 'categories.html' });
      }
    });

    if (results.length === 0) {
      resultsDiv.innerHTML = '<div style="padding:12px;color:var(--text-light);font-size:0.85rem">No results found</div>';
    } else {
      resultsDiv.innerHTML = results.slice(0, 6).map(r => `<a href="${r.link}">${r.text}</a>`).join('');
    }
    resultsDiv.classList.add('active');
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.search-bar')) resultsDiv.classList.remove('active');
  });
}

// ===== NOTIFICATIONS =====
function showNotif(msg) {
  const el = document.getElementById('notif');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

// ===== COUNTERS =====
function animateCounter(el, target, suffix = '') {
  if (!el) return;
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current.toLocaleString() + suffix;
    if (current >= target) clearInterval(timer);
  }, 30);
}

// ===== INIT GRIDS =====
function initBloodBank() {
  const grid = document.getElementById('bloodGrid');
  if (!grid) return;
  grid.innerHTML = '';
  bloodData.forEach(b => {
    const cls = b.status === 'available' ? 'blood-available' : b.status === 'low' ? 'blood-low' : 'blood-critical';
    const statusTxt = b.status === 'available' ? '✅ Available' : b.status === 'low' ? '⚠️ Low Stock' : '🔴 Critical';
    grid.innerHTML += `<div class="blood-card ${cls}"><div class="blood-type">${b.type}</div><div class="blood-units">${b.units} units</div><div class="blood-status">${statusTxt}</div></div>`;
  });
}

function initAmbulances() {
  const list = document.getElementById('ambulanceList');
  if (!list) return;
  list.innerHTML = '';
  ambulances.forEach(a => {
    list.innerHTML += `<li class="ambulance-item"><div><div class="amb-name">🚑 ${a.name}</div><div class="amb-info">${a.info}</div></div><span class="${a.status === 'available' ? 'amb-available' : 'amb-busy'}">${a.status === 'available' ? '✅ Available' : '🔴 On Duty'}</span></li>`;
  });
}

function initDoctors() {
  const grid = document.getElementById('doctorsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  doctors.forEach(d => {
    const initials = d.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    grid.innerHTML += `<div class="doctor-card" data-spec="${d.spec}" data-fees="${d.fees}">
      <div class="doc-header">
        <div class="doc-avatar" style="background:${d.color}">${initials}<div class="live-dot"></div></div>
        <div><div class="doc-name">${d.name}</div><div class="doc-spec">${d.spec}</div><div class="doc-hospital">🏥 ${d.hosp}</div></div>
      </div>
      <div class="doc-details"><div class="doc-detail-item">Experience: <span>${d.exp} yrs</span></div><div class="doc-detail-item">Degree: <span>${d.deg}</span></div></div>
      <div class="doc-fees">₹${d.fees} <span style="font-size:0.75rem;font-weight:400;color:var(--text-light)">per consultation</span></div>
      <div class="stars">${'★'.repeat(Math.floor(d.rating))}${'☆'.repeat(5 - Math.floor(d.rating))} <span style="font-size:0.78rem;color:var(--text-light);font-weight:400">${d.rating}</span></div>
      <div class="doc-actions"><button class="btn-book" onclick="bookDoc('${d.name}')">📅 Book Now</button><button class="btn-chat" onclick="chatDoc('${d.name}')">💬 Chat</button></div>
    </div>`;
  });
}

function initHospitals() {
  const grid = document.getElementById('hospitalsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  hospitals.forEach(h => {
    const facs = h.facilities.map(f => `<span class="facility-tag">${f}</span>`).join('');
    grid.innerHTML += `<div class="hospital-card">
      <div class="hosp-top"><div><div class="hosp-name">🏥 ${h.name}</div><div class="hosp-location">📍 ${h.loc}</div></div><div class="hosp-rating">⭐ ${h.rating}</div></div>
      <div class="bed-info"><div class="bed-stat"><div class="bed-num green">${h.beds}</div><div class="bed-lbl">Available Beds</div></div><div class="bed-stat"><div class="bed-num blue">${h.icu}</div><div class="bed-lbl">ICU Beds</div></div></div>
      <div class="facilities">${facs}</div>
      <div class="insurance-row">🛡️ Insurance: ${h.insurance}</div>
      <div class="hosp-actions"><button class="btn btn-primary" style="flex:1" onclick="showNotif('Opening ${h.name} profile...')">View Details</button><button class="btn btn-secondary" style="flex:1" onclick="showNotif('Calling ${h.name}...')">📞 Call</button></div>
    </div>`;
  });
}

// ===== ACTIONS =====
function filterDoctors() {
  const spec = document.getElementById('specFilter')?.value || '';
  const fees = document.getElementById('feesFilter')?.value || '';
  document.querySelectorAll('.doctor-card').forEach(card => {
    const specMatch = !spec || card.dataset.spec === spec;
    const feesMatch = !fees || parseInt(card.dataset.fees) <= parseInt(fees);
    card.style.display = specMatch && feesMatch ? 'block' : 'none';
  });
}

function resetFilters() {
  const sf = document.getElementById('specFilter');
  const ff = document.getElementById('feesFilter');
  if (sf) sf.value = '';
  if (ff) ff.value = '';
  document.querySelectorAll('.doctor-card').forEach(c => c.style.display = 'block');
}

function bookDoc(name) {
  window.location.href = `appointment.html?doctor=${encodeURIComponent(name)}`;
}

function chatDoc(name) {
  const chatWindow = document.getElementById('chatWindow');
  if (chatWindow) {
    chatWindow.classList.add('open');
    addBotMsg(`👋 Starting chat with ${name}. Please describe your symptoms or questions.`);
  }
}

function selectSlot(el) {
  document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
}

function bookAppointment() {
  const doc = document.getElementById('apptDoctor')?.value;
  const date = document.getElementById('apptDate')?.value;
  const slot = document.querySelector('.time-slot.selected');
  if (!date) { showNotif('⚠️ Please select a date.'); return; }
  if (!slot) { showNotif('⚠️ Please select a time slot.'); return; }
  const queueNum = Math.floor(Math.random() * 30) + 40;
  const qn = document.getElementById('queueNum');
  if (qn) qn.textContent = queueNum;
  showNotif(`✅ Appointment confirmed! Queue #${queueNum} with ${doc?.split('—')[0]?.trim() || 'Doctor'}`);
}

function calcBMI() {
  const h = parseFloat(document.getElementById('bmiHeight')?.value) / 100;
  const w = parseFloat(document.getElementById('bmiWeight')?.value);
  if (!h || !w) { showNotif('⚠️ Please enter height and weight.'); return; }
  const bmi = (w / (h * h)).toFixed(1);
  const el = document.getElementById('bmiResult');
  if (!el) return;
  let cat, bg;
  if (bmi < 18.5) { cat = 'Underweight 🔵'; bg = '#e3f2fd'; }
  else if (bmi < 25) { cat = 'Normal Weight ✅'; bg = '#e8f5e9'; }
  else if (bmi < 30) { cat = 'Overweight ⚠️'; bg = '#fff8e1'; }
  else { cat = 'Obese 🔴'; bg = '#ffebee'; }
  el.style.display = 'block';
  el.style.background = bg;
  el.textContent = `BMI: ${bmi} — ${cat}`;
}

function switchTab(btn, id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
  const el = document.getElementById(id);
  if (el) el.style.display = 'block';
}

function toggleFaq(el) { el.classList.toggle('open'); }

// ===== DR. Myra CHATBOT =====

const Myra_IMG = 'icons/dr-Myra.png?v=2';

// Chat state machine for multi-step flows
let chatState = null;

function toggleChat() {
  document.getElementById('chatWindow')?.classList.toggle('open');
}

// Add a Dr. Myra bot message with avatar + optional option buttons
function addBotMsg(text, options = null, isEmergency = false) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;

  const row = document.createElement('div');
  row.className = 'chat-msg-row';

  const img = document.createElement('img');
  img.src = Myra_IMG;
  img.className = 'bot-icon-mini';
  img.alt = 'Dr. Myra';

  const bubble = document.createElement('div');
  bubble.className = 'chat-msg bot' + (isEmergency ? ' emergency-msg' : '');
  bubble.textContent = text;

  if (options && options.length > 0) {
    const optDiv = document.createElement('div');
    optDiv.className = 'Myra-options';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'Myra-option-btn' + (isEmergency ? ' emergency-opt' : '');
      btn.textContent = opt.label;
      btn.onclick = () => {
        addUserMsg(opt.label);
        if (opt.action) opt.action();
        else if (opt.text) setTimeout(() => addBotMsg(opt.text), 500);
      };
      optDiv.appendChild(btn);
    });
    bubble.appendChild(optDiv);
  }

  row.appendChild(img);
  row.appendChild(bubble);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

function addUserMsg(text) {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return;
  const row = document.createElement('div');
  row.className = 'chat-msg-row user-row';
  const bubble = document.createElement('div');
  bubble.className = 'chat-msg user';
  bubble.textContent = text;
  row.appendChild(bubble);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
}

// Show animated typing indicator
function showTyping() {
  const msgs = document.getElementById('chatMessages');
  if (!msgs) return null;
  const row = document.createElement('div');
  row.className = 'chat-msg-row';
  row.id = 'typingRow';

  const img = document.createElement('img');
  img.src = Myra_IMG;
  img.className = 'bot-icon-mini';
  img.alt = 'Dr. Myra';

  const dots = document.createElement('div');
  dots.className = 'chat-msg bot typing-dots';
  dots.innerHTML = '<span></span><span></span><span></span>';

  row.appendChild(img);
  row.appendChild(dots);
  msgs.appendChild(row);
  msgs.scrollTop = msgs.scrollHeight;
  return row;
}

function removeTyping() {
  document.getElementById('typingRow')?.remove();
}

// ===== SYMPTOM CHECKER FLOWS =====
const symptomFollowUp = {
  'fever': {
    q: "How long have you had the fever? 🌡️",
    opts: [
      { label: "Less than 1 day", text: "For a fever below 1 day, rest, stay hydrated, and take paracetamol if needed. Monitor your temperature closely. \n\nWould you like to book a doctor?" },
      { label: "1–3 days", text: "A fever lasting 1–3 days needs medical attention. Stay hydrated and avoid self-medicating with antibiotics.\n\nShall I book a General Physician for you? 🏥" },
      { label: "More than 3 days", text: "⚠️ A fever lasting more than 3 days is serious and requires immediate medical evaluation. Please consult a doctor NOW.\n\nI'll help you book an urgent appointment." }
    ]
  },
  'headache': {
    q: "What kind of headache are you experiencing? 🤕",
    opts: [
      { label: "Mild/Tension headache", text: "Tension headaches are common and can be caused by stress, dehydration, or poor posture.\n\n✅ Tips: Rest, drink water, light stretching.\n\nWould you like to check symptoms further?" },
      { label: "Severe/Throbbing", text: "Severe throbbing headaches could indicate migraines or high blood pressure. Please see a doctor soon.\n\nShall I book a neurologist? 🧠" },
      { label: "Headache with fever", text: "⚠️ Headache combined with fever can indicate infection. Please consult a doctor urgently.\n\nI'll help you book an appointment immediately." }
    ]
  },
  'cough': {
    q: "How long have you had the cough? 🫁",
    opts: [
      { label: "Less than 1 week", text: "A short-term cough is usually caused by a cold or irritants. Stay hydrated, try warm liquids, and rest.\n\nWould you like to connect with a doctor?" },
      { label: "1–3 weeks", text: "A cough lasting 1–3 weeks could be due to allergies or infection. A doctor visit is recommended.\n\nShall I book a General Physician? 🏥" },
      { label: "More than 3 weeks", text: "⚠️ A cough lasting more than 3 weeks (chronic cough) needs urgent evaluation for TB, asthma, or other conditions. Please see a doctor now." }
    ]
  },
  'cold': {
    q: "What are your main symptoms? 🤧",
    opts: [
      { label: "Runny nose only", text: "A runny nose alone is likely a common cold. Rest well, stay warm, and drink plenty of fluids. 😊" },
      { label: "Sore throat + cold", text: "Cold with sore throat may indicate a throat infection. Warm salt gargles help. If it worsens, see a doctor within 2 days." },
      { label: "Cold + high fever", text: "⚠️ Cold with high fever may indicate flu or a secondary infection. Please consult a doctor today." }
    ]
  }
};

const doctorSpecialties = [
  { label: "🩺 General Physician", action: () => { setTimeout(() => { addBotMsg("Great! A General Physician will assess your overall health. Redirecting to booking..."); setTimeout(() => window.location.href = 'appointment.html', 1200); }, 500); } },
  { label: "❤️ Cardiologist", action: () => { setTimeout(() => { addBotMsg("Booking a Cardiologist for you..."); setTimeout(() => window.location.href = 'appointment.html', 1200); }, 500); } },
  { label: "🦷 Dentist", action: () => { setTimeout(() => { addBotMsg("Booking a Dentist for you..."); setTimeout(() => window.location.href = 'appointment.html', 1200); }, 500); } },
  { label: "🧴 Dermatologist", action: () => { setTimeout(() => { addBotMsg("Booking a Dermatologist for you..."); setTimeout(() => window.location.href = 'appointment.html', 1200); }, 500); } },
  { label: "🧠 Neurologist", action: () => { setTimeout(() => { addBotMsg("Booking a Neurologist for you..."); setTimeout(() => window.location.href = 'appointment.html', 1200); }, 500); } }
];

function handleSymptomCheck() {
  addBotMsg("I can help you check your symptoms! Please describe your main symptom:", [
    { label: "🌡️ Fever", action: () => { setTimeout(() => startSymptomFlow('fever'), 500); } },
    { label: "🤕 Headache", action: () => { setTimeout(() => startSymptomFlow('headache'), 500); } },
    { label: "🫁 Cough", action: () => { setTimeout(() => startSymptomFlow('cough'), 500); } },
    { label: "🤧 Cold/Flu", action: () => { setTimeout(() => startSymptomFlow('cold'), 500); } },
    { label: "💬 Other symptoms", text: "Please describe your symptoms in the text box below. I'll give you personalized advice! 💙" }
  ]);
}

function startSymptomFlow(symptom) {
  const flow = symptomFollowUp[symptom];
  if (!flow) return;
  chatState = 'symptom_' + symptom;
  const mappedOpts = flow.opts.map(o => ({
    label: o.label,
    action: () => {
      setTimeout(() => {
        addBotMsg(o.text, [{
          label: "📅 Book Doctor",
          action: () => {
            addBotMsg("What type of doctor would you like to see?", doctorSpecialties);
          }
        }, {
          label: "🏠 Home Remedies",
          text: "Rest well, drink plenty of water, eat light, and monitor your symptoms. If you worsen, please see a doctor. 💙"
        }]);
        chatState = null;
      }, 500);
    }
  }));
  addBotMsg(flow.q, mappedOpts);
}

function handleDoctorBooking() {
  addBotMsg("I can help you book a doctor appointment! 🏥 Which specialist do you need?", doctorSpecialties);
}

function handleHospitalFinder() {
  const hospList = hospitals.slice(0, 4).map(h => `🏥 ${h.name} — ${h.loc} (⭐ ${h.rating})`).join('\n');
  addBotMsg("Here are top hospitals near you:\n\n" + hospList + "\n\nWould you like to book an appointment?", [
    { label: "📅 Book Appointment", action: () => { setTimeout(() => window.location.href = 'appointment.html', 800); } },
    { label: "📞 Call Emergency", action: () => { window.location.href = 'tel:108'; } }
  ]);
}

function handleMedicineDelivery() {
  addBotMsg("I can help you with medicines! 💊 What would you like to do?", [
    { label: "📤 Upload Prescription", action: () => { setTimeout(() => { addBotMsg("Please visit the Medicines page to upload your prescription securely. 📋"); setTimeout(() => window.location.href = 'medicines.html', 1200); }, 500); } },
    { label: "🔍 Search Medicine", action: () => { setTimeout(() => window.location.href = 'medicines.html', 800); } },
    { label: "🛒 Order Medicine", text: "To order medicines, please go to the Medicines section. Our partner pharmacies deliver within 2–4 hours! ⚡" }
  ]);
}

// Emergency mode
function showEmergencyOverlay() {
  let overlay = document.getElementById('emergencyOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'emergency-overlay';
    overlay.id = 'emergencyOverlay';
    overlay.innerHTML = `
      <div style="font-size:3rem">🚨</div>
      <h2>EMERGENCY DETECTED</h2>
      <p style="color:rgba(255,255,255,0.9);text-align:center;max-width:300px;font-size:0.95rem">Dr. Myra is activating emergency protocols. Please stay calm.</p>
      <a href="tel:108" class="emergency-btn">📞 Call Ambulance 108 (FREE)</a>
      <button class="emergency-btn" onclick="handleHospitalFinder();document.getElementById('emergencyOverlay').remove();document.getElementById('chatWindow').classList.add('open')">🏥 Find Emergency Hospital</button>
      <button class="emergency-btn" onclick="showNotif('🆘 SOS Alert sent to your emergency contacts!')">🆘 Send SOS Alert</button>
      <button class="emergency-close" onclick="document.getElementById('emergencyOverlay').remove()">✕ Close Emergency Mode</button>
    `;
    document.body.appendChild(overlay);
  }
}

const EMERGENCY_KEYWORDS = ['emergency', 'accident', 'heart attack', 'stroke', 'unconscious', 'bleeding', 'ambulance', 'sos', 'critical', 'dying', 'help me', 'help!'];

// Quick reply buttons handler
function quickChat(q) {
  addUserMsg(q);
  const key = q.toLowerCase().trim();
  setTimeout(() => {
    if (key.includes('symptom') || key.includes('check')) {
      handleSymptomCheck();
    } else if (key.includes('book') || key.includes('doctor')) {
      handleDoctorBooking();
    } else if (key.includes('hospital') || key.includes('find')) {
      handleHospitalFinder();
    } else if (key.includes('medicine') || key.includes('order')) {
      handleMedicineDelivery();
    } else if (key.includes('emergency')) {
      addBotMsg("🚨 EMERGENCY MODE ACTIVATED! Connecting you to emergency services immediately...", null, true);
      setTimeout(showEmergencyOverlay, 600);
    } else {
      const response = chatResponses[key] || `I'll help you with "${q}". Please call 9343335183 for immediate assistance.`;
      addBotMsg(response);
    }
  }, 500);
}

// ===== VOICE CHAT =====
let recognition = null;
let isRecording = false;

function startVoiceInput() {
  const voiceBtn = document.getElementById('voiceBtn');
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    showNotif('⚠️ Voice chat not supported in this browser. Use Chrome or Edge.');
    return;
  }

  if (isRecording && recognition) {
    recognition.stop();
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    isRecording = true;
    if (voiceBtn) voiceBtn.classList.add('recording');
    showNotif('🎤 Listening... Speak now');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const chatIn = document.getElementById('chatIn');
    if (chatIn) chatIn.value = transcript;
    sendChat(true); // send and speak response
  };

  recognition.onend = () => {
    isRecording = false;
    if (voiceBtn) voiceBtn.classList.remove('recording');
  };

  recognition.onerror = (e) => {
    isRecording = false;
    if (voiceBtn) voiceBtn.classList.remove('recording');
    if (e.error !== 'no-speech') showNotif('⚠️ Voice error: ' + e.error);
  };

  recognition.start();
}

function speakResponse(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/[🌡️🤕🫁🤧💊🏥📅❤️🧠🦷🧴💙🚨⚠️👋🩺]/gu, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-IN';
  utterance.rate = 0.95;
  utterance.pitch = 1.05;

  // Prefer a female voice
  const voices = window.speechSynthesis.getVoices();
  const femaleVoice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female'))
    || voices.find(v => v.lang.startsWith('en') && (v.name.includes('Zira') || v.name.includes('Samantha') || v.name.includes('Google UK English Female')))
    || voices.find(v => v.lang.startsWith('en'));
  if (femaleVoice) utterance.voice = femaleVoice;

  window.speechSynthesis.speak(utterance);
}

// Main send function (speakReply = true means voice response)
async function sendChat(speakReply = false) {
  const input = document.getElementById('chatIn');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  addUserMsg(text);
  input.value = '';

  const lower = text.toLowerCase();

  // Check emergency keywords first
  if (EMERGENCY_KEYWORDS.some(k => lower.includes(k))) {
    const emsg = "🚨 EMERGENCY DETECTED! I'm activating emergency protocols right away. Please stay calm. Ambulance call (108) is available for FREE.";
    addBotMsg(emsg, null, true);
    if (speakReply) speakResponse("Emergency detected. Calling ambulance now. Please stay calm.");
    setTimeout(showEmergencyOverlay, 700);
    return;
  }

  // Check for known flow triggers
  if (lower.includes('symptom') || lower.includes('fever') || lower.includes('headache') || lower.includes('cough') || lower.includes('cold') || lower.includes('pain') || lower.includes('sick') || lower.includes('ill')) {
    if (symptomFollowUp[Object.keys(symptomFollowUp).find(k => lower.includes(k))]) {
      const matched = Object.keys(symptomFollowUp).find(k => lower.includes(k));
      startSymptomFlow(matched);
    } else {
      handleSymptomCheck();
    }
    return;
  }

  if (lower.includes('book') || lower.includes('doctor') || lower.includes('appointment') || lower.includes('see a doctor')) {
    handleDoctorBooking();
    return;
  }

  if (lower.includes('hospital') || lower.includes('clinic') || lower.includes('find hospital')) {
    handleHospitalFinder();
    return;
  }

  if (lower.includes('medicine') || lower.includes('prescription') || lower.includes('drug') || lower.includes('pharmacy')) {
    handleMedicineDelivery();
    return;
  }

  if (lower.includes('insurance') || lower.includes('claim')) {
    addBotMsg("We support all major insurance providers! ✅\n\nStar Health, HDFC Ergo, Bajaj Allianz, New India Assurance, United India.\n\nCashless treatment at 500+ partner hospitals! 🛡️", [
      { label: "📋 View Insurance Plans", action: () => { setTimeout(() => window.location.href = 'insurance.html', 800); } }
    ]);
    return;
  }

  if (lower.includes('blood') || lower.includes('blood bank')) {
    addBotMsg("🩸 Current Blood Bank Status:\n\n🟢 A+: 24 units\n🟢 O+: 42 units\n🟡 A-: 8 units (Low)\n🔴 B-: 3 units (Critical)\n\nFor emergency blood requests, call 9343335183", [
      { label: "📞 Request Blood", action: () => showNotif('📞 Blood Bank Helpline: 9343335183') }
    ]);
    return;
  }

  // Show typing indicator, then call Gemini backend
  const typingRow = showTyping();

  try {
    const res = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    removeTyping();

    if (res.ok) {
      const data = await res.json();
      addBotMsg(data.response);
      if (speakReply) speakResponse(data.response);
    } else {
      const fallback = "I'm here to help! For immediate medical queries, please call our helpline at 9343335183. 💙";
      addBotMsg(fallback);
      if (speakReply) speakResponse(fallback);
    }
  } catch (err) {
    console.error(err);
    if (typingRow) removeTyping();
    // Intelligent fallback responses
    let fallback = "I'd love to help you! Could you tell me more about what you need? 😊\n\nI can help with:\n• Symptom checking\n• Booking doctors\n• Finding hospitals\n• Medicine delivery\n• Emergency help";
    addBotMsg(fallback, [
      { label: "🩺 Check Symptoms", action: handleSymptomCheck },
      { label: "📅 Book Doctor", action: handleDoctorBooking }
    ]);
    if (speakReply) speakResponse("I'm here to help. Please tell me your symptoms or what medical service you need.");
  }
}

// ===== SETTINGS =====


function initToggles() {
  document.querySelectorAll('.toggle').forEach(t => {
    if (t.id === 'darkModeToggle') return; // handled separately
    t.addEventListener('click', function () {
      this.classList.toggle('off');
      const label = this.closest('.settings-item')?.querySelector('span')?.textContent || 'Setting';
      const isOn = !this.classList.contains('off');
      showNotif(`${label}: ${isOn ? 'Enabled ✅' : 'Disabled ❌'}`);
    });
  });
}

function changePassword() {
  const current = document.getElementById('currentPass')?.value;
  const newPass = document.getElementById('newPass')?.value;
  const confirmPass = document.getElementById('confirmNewPass')?.value;
  if (!current || !newPass || !confirmPass) { showNotif('⚠️ Please fill all password fields.'); return; }
  if (newPass.length < 6) { showNotif('⚠️ Password must be at least 6 characters.'); return; }
  if (newPass !== confirmPass) { showNotif('⚠️ New passwords do not match!'); return; }
  showNotif('✅ Password changed successfully!');
  document.getElementById('currentPass').value = '';
  document.getElementById('newPass').value = '';
  document.getElementById('confirmNewPass').value = '';
}

function saveProfile() {
  const name = document.getElementById('profileName')?.value;
  const email = document.getElementById('profileEmail')?.value;
  const phone = document.getElementById('profilePhone')?.value;
  const city = document.getElementById('profileCity')?.value;
  if (!name || !email) { showNotif('⚠️ Name and email are required.'); return; }
  const user = { name, email, phone, city };
  localStorage.setItem('mediUser', JSON.stringify(user));
  showNotif('✅ Profile updated successfully!');
  initAuth();
}

function loadProfile() {
  const user = JSON.parse(localStorage.getItem('mediUser') || 'null');
  if (user) {
    const pn = document.getElementById('profileName'); if (pn) pn.value = user.name || '';
    const pe = document.getElementById('profileEmail'); if (pe) pe.value = user.email || '';
    const pp = document.getElementById('profilePhone'); if (pp) pp.value = user.phone || user.mobile || '';
    const pc = document.getElementById('profileCity'); if (pc) pc.value = user.city || '';
  }
}

// ===== LIVE UPDATES =====
function startLiveUpdates() {
  setInterval(() => {
    const el = document.getElementById('queueNum');
    if (el) { const current = parseInt(el.textContent); if (Math.random() > 0.7 && current > 1) el.textContent = current - 1; }
  }, 8000);

  setInterval(() => {
    const cards = document.querySelectorAll('.blood-card');
    if (cards.length > 0) {
      const idx = Math.floor(Math.random() * bloodData.length);
      const delta = Math.random() > 0.5 ? 1 : -1;
      bloodData[idx].units = Math.max(1, bloodData[idx].units + delta);
      const unitsEl = cards[idx]?.querySelector('.blood-units');
      if (unitsEl) unitsEl.textContent = bloodData[idx].units + ' units';
    }
  }, 5000);
}

// ===== MASTER INIT =====
document.addEventListener('DOMContentLoaded', function () {
  initDarkMode();
  setActiveNav();
  initSearch();
  initAuth();

  // Init page-specific features
  if (document.getElementById('bloodGrid')) initBloodBank();
  if (document.getElementById('ambulanceList')) initAmbulances();
  if (document.getElementById('doctorsGrid')) initDoctors();
  if (document.getElementById('hospitalsGrid')) initHospitals();
  if (document.getElementById('medListContainer')) initMedicines();

  // Dr. Myra greeting on load
  setTimeout(() => {
    addBotMsg("Hello! I'm Dr. Myra, your AI health assistant from Motherish. 👩‍⚕️\nI'm here to help you with symptoms, doctors, medicines, and emergencies. How can I help you today?", [
      { label: "🩺 Check Symptoms", action: handleSymptomCheck },
      { label: "📅 Book Doctor", action: handleDoctorBooking },
      { label: "🏥 Find Hospital", action: handleHospitalFinder },
      { label: "💊 Order Medicine", action: handleMedicineDelivery },
      { label: "🚨 Emergency Help", action: showEmergencyOverlay }
    ]);
  }, 400);


  // Counter animation
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(document.getElementById('countHosp'), 10);
          animateCounter(document.getElementById('countDoc'), 20);
          animateCounter(document.getElementById('countPat'), 50000, '+');
          animateCounter(document.getElementById('countCity'), 8);
          observer.disconnect();
        }
      });
    });
    observer.observe(heroStats);
  }

  // Appointment date min
  const apptDate = document.getElementById('apptDate');
  if (apptDate) apptDate.min = new Date().toISOString().split('T')[0];

  // URL params for appointment
  const params = new URLSearchParams(window.location.search);
  const docParam = params.get('doctor');
  if (docParam) {
    const apptDoc = document.getElementById('apptDoctor');
    if (apptDoc) {
      for (let i = 0; i < apptDoc.options.length; i++) {
        if (apptDoc.options[i].text.includes(docParam)) { apptDoc.selectedIndex = i; break; }
      }
    }
  }

  // Settings toggles
  initToggles();
  loadProfile();

  // Live updates
  startLiveUpdates();

  // Register Service Worker for PWA
  registerServiceWorker();
});

// ===== MEDICINES LOGIC =====
let selectedMedId = null;

function initMedicines() {
  fetchMedicines();
}

async function fetchMedicines() {
  const userStr = localStorage.getItem('mediUser');
  if (!userStr) {
    const container = document.getElementById('medListContainer');
    if (container) container.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text-light)">Please log in to view your medicines.</div>`;
    return;
  }

  const user = JSON.parse(userStr);
  if (!user.id) {
    // If user exists but has no ID, they are from the old mock system. Logout to refresh.
    doLogout();
    return;
  }

  try {
    const res = await fetch(`http://localhost:5000/api/medicines?user_id=${user.id}`);
    if (res.ok) {
      const data = await res.json();
      myMedicines = data.map(m => {
        return {
          id: m.id,
          name: m.name,
          salt: 'Composition info not provided',
          dr: m.doctor_name || 'Dr. Unknown',
          spec: 'General',
          hosp: 'Motherish Associated Hospital',
          start: new Date().toISOString().split('T')[0],
          end: 'Course end',
          duration: `${m.duration} Days`,
          status: m.status ? m.status.toLowerCase() : 'active',
          urgent: false,
          uses: 'Refer to doctor prescription',
          dose: m.dosage,
          food: 'As directed',
          schedule: m.schedule ? m.schedule.split(',') : [],
          times: { Morning: '08:00 AM', Afternoon: '01:00 PM', Evening: '06:00 PM', Night: '09:00 PM' },
          side: 'Consult your doctor for side effects',
          storage: 'Store in a cool, dry place',
          refill: '---',
          taken: {}
        };
      });
      filterMeds('active');
    }
  } catch (err) {
    console.error(err);
    showNotif('❌ Failed to load medicines.');
  }
}

function filterMeds(status, btn = null) {
  if (btn) {
    document.querySelectorAll('.tab-btn2').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const container = document.getElementById('medListContainer');
  if (!container) return;

  const filtered = myMedicines.filter(m => m.status === status);

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text-light)">No ${status} medicines found.</div>`;
    return;
  }

  container.innerHTML = filtered.map(med => {
    let icon = '💊';
    if (med.dose.includes('Capsule')) icon = '💊';
    if (med.dose.includes('Syrup')) icon = '🥄';

    // Check if urgent
    const urgentClass = med.urgent ? 'urgent' : '';
    const badgeHtml = med.urgent ? `<div class="med-badge red">URGENT</div>` : '';

    // Generate times
    const timeStr = med.schedule.join(' • ');

    return `
      <div class="med-card ${urgentClass}" id="medCard_${med.id}" onclick="showMedDetails(${med.id})">
        ${badgeHtml}
        <div style="display:flex;gap:16px;align-items:center">
          <div style="font-size:2rem">${icon}</div>
          <div style="flex:1">
            <h4>${med.name}</h4>
            <p style="margin-bottom:6px">${med.dose} • ${timeStr}</p>
            <div style="display:flex;gap:4px">
              ${(med.schedule || []).map(t => {
      const isTaken = (med.taken && med.taken[t]) || false;
      const bg = isTaken ? '#e8f5e9' : 'var(--bg)';
      const color = isTaken ? 'var(--secondary)' : 'var(--text-light)';
      const icon = t === 'Morning' ? '🌅' : t === 'Afternoon' ? '☀️' : t === 'Evening' ? '🌇' : '🌙';
      return `<span style="background:${bg};color:${color};padding:2px 6px;border-radius:4px;font-size:0.7rem;font-weight:700">${icon} ${t}</span>`;
    }).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function showMedDetails(id) {
  selectedMedId = id;
  const med = myMedicines.find(m => m.id === id);
  if (!med) return;

  // Update styles
  document.querySelectorAll('.med-card').forEach(c => c.classList.remove('selected'));
  const card = document.getElementById(`medCard_${id}`);
  if (card) card.classList.add('selected');

  // Hide empty state, show details
  document.querySelector('.empty-state').style.display = 'none';
  document.getElementById('detailView').style.display = 'block';

  // Header info
  document.getElementById('detName').textContent = med.name;
  document.getElementById('detSalt').textContent = med.salt;
  document.getElementById('detBadge').style.display = med.urgent ? 'inline-block' : 'none';

  // Grid info
  document.getElementById('detUses').textContent = med.uses;
  document.getElementById('detDosage').textContent = med.dose;
  document.getElementById('detFood').textContent = med.food;
  document.getElementById('detDuration').textContent = `${med.start} to ${med.end}`;

  // Schedule grid
  const schedHtml = med.schedule.map(t => {
    const isTaken = med.taken && med.taken[t];
    const takenClass = isTaken ? 'taken' : 'active';
    const icon = t === 'Morning' ? '🌅' : t === 'Afternoon' ? '☀️' : t === 'Evening' ? '🌇' : '🌙';
    return `<div class="time-badge ${takenClass}">${icon} ${t} - ${med.times[t]}</div>`;
  }).join('');
  document.getElementById('detSchedule').innerHTML = schedHtml;

  // Safety
  document.getElementById('detSide').textContent = med.side;
  document.getElementById('detStorage').textContent = med.storage;

  // Doctor section
  document.getElementById('detDoctor').innerHTML = `
    <div class="doc-mini-avatar">${med.dr.charAt(4)}</div>
    <div style="flex:1">
      <h4 style="font-size:0.95rem;font-weight:700;color:var(--text);margin-bottom:2px">Prescribed by ${med.dr}</h4>
      <div style="font-size:0.8rem;color:var(--text-light)">${med.spec} • ${med.hosp}</div>
    </div>
    <button class="btn btn-outline" style="padding:6px 12px;font-size:0.8rem" onclick="event.stopPropagation();showNotif('Downloading PDF Prescription... 📄')">📄 PDF</button>
  `;
}

async function markMed(action) {
  if (!selectedMedId) return;
  const med = myMedicines.find(m => m.id === selectedMedId);
  if (!med) return;

  if (action === 'taken') {
    showNotif(`✅ Marked ${med.name} as Taken!`);
    for (let t of med.schedule) {
      if (!med.taken[t]) { med.taken[t] = true; break; }
    }
    // Update local UI
    showMedDetails(selectedMedId);
    filterMeds(med.status);
  } else if (action === 'skipped') {
    // For demo, skipped could just alert and not update DB status
    showNotif(`❌ Marked ${med.name} as Skipped.`);
  } else if (action === 'complete') {
    // Actually update status in DB to completed
    try {
      const res = await fetch(`http://localhost:5000/api/medicines/${selectedMedId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Completed' })
      });
      if (res.ok) {
        showNotif(`✅ Marked ${med.name} as course completed.`);
        fetchMedicines(); // reload list
        document.getElementById('detailView').style.display = 'none';
        document.querySelector('.empty-state').style.display = 'block';
      }
    } catch (err) {
      console.error(err);
      showNotif('❌ Failed to update medicine status.');
    }
  }
}

function showAddMedModal() {
  const userStr = localStorage.getItem('mediUser');
  if (!userStr) {
    showNotif('⚠️ Please log in to add medicines.');
    document.getElementById('loginModal').style.display = 'flex';
    return;
  }
  document.getElementById('addMedModal').style.display = 'flex';
}

async function saveNewMedicine() {
  const user = JSON.parse(localStorage.getItem('mediUser'));
  if (!user || !user.id) return;

  const name = document.getElementById('addMedName')?.value;
  const duration = document.getElementById('addMedDuration')?.value;
  const dosage = document.getElementById('addMedDosage')?.value;

  let sched = [];
  if (document.getElementById('addMedMorn')?.checked) sched.push('Morning');
  if (document.getElementById('addMedAft')?.checked) sched.push('Afternoon');
  if (document.getElementById('addMedEve')?.checked) sched.push('Evening');

  if (!name || !duration || sched.length === 0) {
    showNotif('⚠️ Please fill name, duration, and at least one time.');
    return;
  }

  try {
    const res = await fetch('http://localhost:5000/api/medicines', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.id,
        name: name,
        duration: duration,
        dosage: dosage,
        schedule: sched.join(',')
      })
    });

    if (res.ok) {
      document.getElementById('addMedModal').style.display = 'none';
      showNotif('✅ Medicine added successfully!');

      // Clear inputs
      document.getElementById('addMedName').value = '';
      document.getElementById('addMedDuration').value = '';
      document.getElementById('addMedMorn').checked = false;
      document.getElementById('addMedAft').checked = false;
      document.getElementById('addMedEve').checked = false;

      fetchMedicines(); // Reload list
    }
  } catch (err) {
    console.error(err);
    showNotif('❌ Failed to add medicine.');
  }
}

// ===== PWA SERVICE WORKER =====
let deferredPrompt = null;

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('[PWA] Service Worker registered:', reg.scope);
      })
      .catch(err => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
  }

  // Listen for the install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton();
  });

  // Detect when app is installed
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    hideInstallButton();
    showNotif('✅ Motherish app installed successfully!');
  });
}

function showInstallButton() {
  const installBtn = document.getElementById('installAppBtn');
  if (installBtn) {
    installBtn.style.display = 'inline-block';
    installBtn.onclick = installPWA;
  } else {
    // Fallback: Create it if not in HTML
    if (document.getElementById('installBtn')) return;
    const navRight = document.querySelector('.nav-right');
    if (!navRight) return;
    const btn = document.createElement('button');
    btn.id = 'installBtn';
    btn.className = 'btn btn-secondary';
    btn.innerHTML = '⬇️ Install App';
    btn.style.marginLeft = '10px';
    btn.onclick = installPWA;
    navRight.insertBefore(btn, navRight.firstChild);
  }
}

function hideInstallButton() {
  const installBtn = document.getElementById('installAppBtn');
  if (installBtn) installBtn.style.display = 'none';
  const dynamicBtn = document.getElementById('installBtn');
  if (dynamicBtn) dynamicBtn.remove();
}

async function installPWA() {
  if (!deferredPrompt) {
    showNotif('ℹ️ App already installed or install not available.');
    return;
  }
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    showNotif('🎉 Installing Motherish app...');
  }
  deferredPrompt = null;
  hideInstallButton();
}
