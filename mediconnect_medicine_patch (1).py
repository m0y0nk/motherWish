#!/usr/bin/env python3
"""
Motherish — Medicine Management System Patch Script
=======================================================
Golden Path: This script serves as a REFERENCE/DOCUMENTATION only.
The agent (Claude) injects CSS/HTML/JS directly via the Edit tool into
/tmp/Motherish.html using three targeted Edit calls.
Do NOT try to run this script as the primary workflow — use the Edit tool.

Reference: miniapp_id CmpYCbM-AR

Injection Points in Motherish.html
--------------------------------------
1. CSS  → insert before closing </style> tag
2. HTML → insert before <!-- FOOTER --> comment
3. JS   → insert before closing </script> tag

Edit anchors:
  CSS:  old_string ends with ".hosp2 { top: 55%; left: 55%; }\\n</style>"
  HTML: old_string = "<!-- FOOTER -->\\n<footer>"
  JS:   old_string ends with "observer.observe(...);\\n</script>"
  Nav:  old_string = '<a href="#help">Help</a>\\n  </div>'
"""

# ============================================================
# MEDICINE DATA STRUCTURES (reference for agent generation)
# ============================================================

RX_MEDS = [
    {
        "name": "Metformin 500mg", "type": "Tablet", "color": "#1a73e8", "icon": "💊",
        "dosage": "1 tablet (500mg)", "freq": "Twice daily", "duration": "3 months (ongoing)",
        "timing": ["After Food", "Morning", "Night"],
        "prescribedBy": "Dr. Fatima Khan", "dept": "General Medicine",
        "reason": "Type 2 Diabetes control",
        "sideEffects": "Nausea, diarrhoea, stomach upset (usually mild)",
        "storage": "Below 30°C, away from moisture", "alcohol": "No restriction"
    },
    {
        "name": "Amlodipine 5mg", "type": "Tablet", "color": "#e91e63", "icon": "💊",
        "dosage": "1 tablet (5mg)", "freq": "Once daily", "duration": "Ongoing",
        "timing": ["After Food", "Morning"],
        "prescribedBy": "Dr. Priya Sharma", "dept": "Neurology",
        "reason": "Blood pressure & angina control",
        "sideEffects": "Swelling in feet, dizziness, headache, flushing",
        "storage": "Below 25°C, dry place", "alcohol": "Avoid – increases dizziness risk"
    },
    {
        "name": "Atorvastatin 10mg", "type": "Tablet", "color": "#00a651", "icon": "💊",
        "dosage": "1 tablet (10mg)", "freq": "Once daily", "duration": "Ongoing",
        "timing": ["After Food", "Night"],
        "prescribedBy": "Dr. Rajesh Kumar", "dept": "Cardiology",
        "reason": "Cholesterol reduction, heart protection",
        "sideEffects": "Muscle pain, liver enzyme rise (rare), headache",
        "storage": "Below 30°C, keep dry", "alcohol": "Limit – liver stress risk"
    },
    {
        "name": "Pantoprazole 40mg", "type": "Tablet", "color": "#ff9800", "icon": "💊",
        "dosage": "1 tablet (40mg)", "freq": "Once daily", "duration": "14 days",
        "timing": ["Before Food", "Morning"],
        "prescribedBy": "Dr. Deepa Krishnan", "dept": "Gastroenterology",
        "reason": "Acid reflux & gastric ulcer prevention",
        "sideEffects": "Headache, diarrhoea (mild, usually temporary)",
        "storage": "Below 30°C", "alcohol": "Avoid – worsens acidity"
    },
    {
        "name": "Azithromycin 500mg", "type": "Tablet", "color": "#9c27b0", "icon": "💊",
        "dosage": "1 tablet (500mg)", "freq": "Once daily", "duration": "5 days",
        "timing": ["Empty Stomach"],
        "prescribedBy": "Dr. Vikram Singh", "dept": "Pediatrics",
        "reason": "Bacterial infection treatment",
        "sideEffects": "Nausea, stomach pain, loose stools",
        "storage": "Below 25°C", "alcohol": "Avoid – increases side effects"
    },
    {
        "name": "Salbutamol Inhaler", "type": "Inhaler", "color": "#00bcd4", "icon": "🫁",
        "dosage": "2 puffs as needed", "freq": "When required (max 4 times/day)", "duration": "Ongoing",
        "timing": ["Before activity or on symptoms"],
        "prescribedBy": "Dr. Arjun Nair", "dept": "Pulmonology",
        "reason": "Bronchospasm & asthma relief",
        "sideEffects": "Tremors, palpitations, throat irritation",
        "storage": "Below 30°C, protect from sunlight", "alcohol": "No specific restriction"
    },
]

HOW_TO_USE_GUIDES = [
    {
        "icon": "💊", "name": "Tablet / Capsule", "sub": "Most common medicine form",
        "steps": [
            "Wash your hands thoroughly before handling tablets.",
            "Place the tablet on your tongue and take a large sip of water.",
            "Swallow the tablet whole — do NOT crush or chew unless instructed.",
            "Drink at least half a glass of water after swallowing.",
            "Remain upright for at least 30 minutes after taking the tablet.",
            "If the tablet is coated (film-coated), never split it."
        ],
        "warning": "Never crush sustained-release (SR/XL/ER) tablets."
    },
    {
        "icon": "🧴", "name": "Syrup / Liquid", "sub": "Shake well before every use",
        "steps": [
            "Shake the bottle gently for 10-15 seconds before opening.",
            "Use the measuring cup or spoon provided — never a household spoon.",
            "Measure the exact dose at eye level for accuracy.",
            "Take the syrup directly or mix with a small amount of water if instructed.",
            "Rinse the measuring cup after each use.",
            "Store the bottle upright, closed tightly, away from heat and sunlight."
        ],
        "warning": "Do not use household teaspoons — they are not accurate."
    },
    {
        "icon": "💉", "name": "Injection", "sub": "Hospital or trained-person administered",
        "steps": [
            "Injections must be administered by a trained nurse or doctor.",
            "Verify the medicine name, dose, expiry date, and patient name.",
            "Clean the injection site with an alcohol swab and let it dry for 30 seconds.",
            "Use a new, sterile needle every time — never reuse.",
            "Dispose of used needles immediately in a sharps container.",
            "Monitor the patient for 30 minutes after injection for allergic reactions."
        ],
        "warning": "Never self-administer injections unless specifically trained."
    },
    {
        "icon": "🫁", "name": "Inhaler", "sub": "For asthma & breathing conditions",
        "steps": [
            "Remove the cap and shake the inhaler vigorously 5-6 times.",
            "Breathe out fully through your mouth, away from the inhaler.",
            "Place the mouthpiece between your lips and form a tight seal.",
            "Press the canister once while breathing in slowly over 3-5 seconds.",
            "Hold your breath for 10 seconds to let medicine reach your lungs.",
            "Wait 1 minute between puffs if a second dose is needed.",
            "Rinse your mouth with water after using a corticosteroid inhaler."
        ],
        "warning": "Never exhale into the inhaler device. Rinse mouth after steroid inhalers."
    },
    {
        "icon": "👁️", "name": "Eye Drops", "sub": "Step-by-step application guide",
        "steps": [
            "Wash your hands thoroughly with soap and water before touching eyes.",
            "Tilt your head back and pull down your lower eyelid to form a pocket.",
            "Hold the dropper above the eye — do not let it touch the eye.",
            "Squeeze exactly 1 drop into the lower eyelid pocket.",
            "Close your eye gently and press the inner corner with your finger for 2 minutes.",
            "Do not blink rapidly or squeeze your eye shut after instilling drops.",
            "Wait at least 5 minutes before instilling a second eye drop."
        ],
        "warning": "Never share eye drops. Dropper tips must never touch the eye surface."
    },
    {
        "icon": "🩸", "name": "Insulin", "sub": "Proper storage + injection guide",
        "steps": [
            "Store unopened insulin in the refrigerator (2°C–8°C) — never freeze.",
            "Once opened, keep at room temperature (below 30°C) for up to 28 days.",
            "Wash hands. Gently roll the insulin vial (do not shake) to mix.",
            "Clean the injection site with an alcohol swab.",
            "Pinch the skin, insert the pen needle at 90°, and inject slowly.",
            "Hold the pen in place for 10 seconds after injection before removing.",
            "Rotate injection sites each time to prevent lipodystrophy.",
            "Dispose of needles in a sharps container immediately after use."
        ],
        "warning": "Never mix insulin types unless prescribed. Rotate injection sites every time."
    }
]

PHARMA_DATA = [
    {"name": "Metformin 500mg",    "brand": "Glycomet",  "price": 38,  "oldPrice": 52,  "stores": ["Apollo Pharmacy", "MedPlus"],    "avail": [True,  True]},
    {"name": "Amlodipine 5mg",     "brand": "Amlodac",   "price": 22,  "oldPrice": 34,  "stores": ["Apollo Pharmacy", "Netmeds"],    "avail": [True,  False]},
    {"name": "Atorvastatin 10mg",  "brand": "Atorva",    "price": 48,  "oldPrice": 68,  "stores": ["MedPlus", "PharmEasy"],          "avail": [True,  True]},
    {"name": "Pantoprazole 40mg",  "brand": "Pan-D",     "price": 18,  "oldPrice": 28,  "stores": ["Apollo Pharmacy", "1mg"],        "avail": [True,  True]},
    {"name": "Azithromycin 500mg", "brand": "Azee",      "price": 65,  "oldPrice": 90,  "stores": ["MedPlus", "Netmeds"],            "avail": [False, True]},
    {"name": "Salbutamol Inhaler", "brand": "Asthalin",  "price": 110, "oldPrice": 148, "stores": ["Apollo Pharmacy", "PharmEasy"],  "avail": [True,  True]},
]

LANG_DATA = [
    {"code": "en", "label": "🇬🇧 English",    "lang_code": "en-IN"},
    {"code": "hi", "label": "🇮🇳 हिंदी",      "lang_code": "hi-IN"},
    {"code": "kn", "label": "🇮🇳 ಕನ್ನಡ",     "lang_code": "kn-IN"},
    {"code": "ta", "label": "🇮🇳 தமிழ்",      "lang_code": "ta-IN"},
    {"code": "te", "label": "🇮🇳 తెలుగు",     "lang_code": "te-IN"},
    {"code": "ml", "label": "🇮🇳 മലയാളം",    "lang_code": "ml-IN"},
]

AI_RESPONSES = {
    "why is metformin prescribed":  "Metformin manages Type 2 Diabetes by reducing liver glucose production and improving insulin sensitivity.",
    "what if i miss a dose":        "Take it as soon as you remember unless it is nearly time for your next dose. Never double the dose.",
    "how does amlodipine work":     "Amlodipine is a calcium channel blocker that relaxes blood vessels, reducing blood pressure and angina.",
    "side effects of atorvastatin": "Muscle pain, weakness, elevated liver enzymes, headache, nausea. Report unexplained muscle pain to your doctor.",
    "when should i call my doctor": "Call if: symptoms worsen, you experience concerning side effects, swelling/rash/breathing difficulty, or inconsistent blood sugar."
}

SAFETY_DATA = [
    {"icon": "⚠️", "title": "Side Effects to Watch",      "cls": ""},
    {"icon": "🔄", "title": "Drug Interaction Warnings",  "cls": "warn"},
    {"icon": "🌡️", "title": "Storage Instructions",       "cls": "info"},
    {"icon": "🍺", "title": "Alcohol Warnings",           "cls": "warn"},
    {"icon": "🧊", "title": "Special Storage (Fridge)",   "cls": "green"},
    {"icon": "🚨", "title": "Emergency Symptoms",         "cls": ""},
]

CAL_PATTERN = [
    'taken','taken','taken','missed','taken','taken','taken',
    'taken','taken','missed','taken','taken','taken','taken',
    'taken','taken','missed','taken','taken','taken','taken',
    'taken','taken','taken','upcoming','upcoming','upcoming','upcoming'
]  # Feb 2024, today=20, offset=4 (starts Thursday)

REMINDER_DATA = [
    {"time": "8:00 AM",  "med": "Metformin 500mg",    "dose": "1 tablet — after breakfast", "icon": "💊", "status": "taken",    "cls": "green"},
    {"time": "2:00 PM",  "med": "Azithromycin 500mg", "dose": "1 tablet — empty stomach",   "icon": "💊", "status": "missed",   "cls": "red"},
    {"time": "9:00 PM",  "med": "Metformin 500mg",    "dose": "1 tablet — after dinner",    "icon": "💊", "status": "upcoming", "cls": "yellow"},
    {"time": "9:00 PM",  "med": "Amlodipine 5mg",     "dose": "1 tablet — after dinner",    "icon": "💊", "status": "upcoming", "cls": "yellow"},
    {"time": "9:00 PM",  "med": "Atorvastatin 10mg",  "dose": "1 tablet — after dinner",    "icon": "💊", "status": "upcoming", "cls": "yellow"},
]

SCHEDULE_DATA = [
    {"time": "7:00 AM",  "meds": [{"name": "Pantoprazole 40mg", "info": "Before breakfast • 1 tablet", "status": "Taken",   "sc": "badge-green"}]},
    {"time": "8:30 AM",  "meds": [{"name": "Metformin 500mg",   "info": "After breakfast • 1 tablet",  "status": "Taken",   "sc": "badge-green"}]},
    {"time": "1:00 PM",  "meds": [{"name": "Azithromycin 500mg","info": "Empty stomach • 1 tablet",    "status": "Missed",  "sc": "badge-red"}]},
    {"time": "9:00 PM",  "meds": [
        {"name": "Metformin 500mg",   "info": "After dinner • 1 tablet", "status": "Pending", "sc": "badge-yellow"},
        {"name": "Amlodipine 5mg",    "info": "After dinner • 1 tablet", "status": "Pending", "sc": "badge-yellow"},
        {"name": "Atorvastatin 10mg", "info": "After dinner • 1 tablet", "status": "Pending", "sc": "badge-yellow"},
    ]},
]

# ============================================================
# CSS TIMING CHIP CLASSES (reference)
# ============================================================
TIMING_CHIP_CLASSES = {
    "Morning":  "chip-morning",   # background: #fff8e1; color: #f59e0b
    "Night":    "chip-night",     # background: #ede9fe; color: #7c3aed
    "After":    "chip-after",     # background: #e6f9f0; color: var(--secondary)
    "Before":   "chip-before",    # background: #fff0f0; color: var(--accent)
    "Empty":    "chip-empty",     # background: #fce7f3; color: #be185d
    "With":     "chip-with",      # background: #e0f2fe; color: #0369a1
}

# ============================================================
# INJECTION POINT ANCHORS
# ============================================================
CSS_ANCHOR_OLD  = ".hosp2 { top: 55%; left: 55%; }\n</style>"
HTML_ANCHOR_OLD = "<!-- FOOTER -->\n<footer>"
JS_ANCHOR_OLD   = "observer.observe(document.querySelector('.hero-stats'));\n</script>"
NAV_ANCHOR_OLD  = '<a href="#help">Help</a>\n  </div>'

if __name__ == "__main__":
    print("Motherish Medicine Management Patch — reference script.")
    print("Agent uses Edit tool to inject CSS/HTML/JS into /tmp/Motherish.html.")
    print(f"Medicines: {len(RX_MEDS)}, Guides: {len(HOW_TO_USE_GUIDES)}, Langs: {len(LANG_DATA)}")
    print("Run the agentapp logic instead of this script directly.")
