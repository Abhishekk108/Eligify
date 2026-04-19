# SaarthiYantra: AI-Powered Welfare Scheme Discovery Engine

> Helping persons with disabilities in India discover and apply for government welfare schemes they are entitled to.

---

## 📌 Problem Statement

Millions of persons with disabilities (PwD) in India are unaware of or unable to access government welfare schemes they are legally entitled to. The application process is complex, multilingual, and documentation-heavy — creating a barrier that disproportionately affects the most vulnerable.

SaarthiYantra solves this problem using AI-powered eligibility matching and multilingual NLP:

- Accepts user profile and disability information
- Matches users to eligible government schemes
- Explains schemes in plain language across multiple languages
- Generates downloadable document checklists
- Tracks application status

---

## 🛠 Tech Stack

Frontend: React (Vite) with React Router
AI Explanations: Groq SDK
Document Generation: jsPDF
Offline Support: Service Worker

Backend: Node.js with Express.js
State Management: React Context API
Storage: localStorage

Deployment: Frontend (localhost:5173), Backend (localhost:3001)

---

## 🏗 System Architecture

The system follows this processing pipeline:

```
User Profile Input
→ Eligibility Matching Engine
→ Scheme Filtering & Ranking
→ AI Explanation Generation (Groq)
→ Multilingual Output
→ Document Checklist Builder
→ Application Tracker Display
```

Each user profile is matched against a curated database of 20 real government schemes.
Each scheme is scored for eligibility and relevance before display.

---

## 📥 Input Specification

The user provides profile information including:

- Disability Type & Severity (String)
- Age (Integer)
- Monthly Income (Float)
- State (String)

Invalid or incomplete profiles prompt guided re-entry.

---

## 🧠 Eligibility Matching Engine

SaarthiYantra matches users across three scheme categories:

### 1️⃣ Central Government Schemes

Schemes administered by the Ministry of Social Justice & Empowerment.

- Match on disability type and certificate validity
- Check income thresholds defined per scheme
- Verify age bracket eligibility
- Rule-based filter with multi-criteria scoring

### 2️⃣ State-Level Schemes

Schemes specific to the user's registered state.

- Filter by state of residence
- Cross-check domicile requirements
- Apply state-specific income and category rules
- Cascading filter with fallback to central schemes

Match output: Scheme name + department + benefit amount + eligibility flags

### 3️⃣ AI-Powered Explanations (Groq)

Plain-language summaries generated per scheme for the matched user.

- Personalized to user's disability and language preference
- Avoids bureaucratic jargon
- Output in English, Hindi, or Marathi
- Groq API call with user context + scheme metadata

---

## 🚫 False Match Control

Schemes are NOT recommended if:

- User's disability category does not match scheme scope
- Income exceeds scheme ceiling
- State residency requirement is unmet
- Scheme is expired or inactive

This ensures relevant, actionable scheme lists with minimal noise.

---

## ⚖️ Relevance Score Methodology (0–100)

Each matched scheme receives a score based on fit:

| Criteria | Score |
|----------|-------|
| Disability type exact match | +40 |
| Income bracket match | +20 |
| State-level scheme (local priority) | +15 |
| Age bracket match | +10 |
| Employment status match | +10 |
| Documentation availability | +5 |

Score is capped at 100. Schemes are sorted by relevance score descending.
The scoring model is rule-based and fully explainable.

---

## 📊 Outputs

### 1️⃣ Personalized Scheme Dashboard

- All matched schemes displayed as cards
- Relevance score prominently displayed
- Eligibility criteria clearly listed
- AI-generated plain-language explanation per scheme
- Expand card to see benefit amount, application process, and required documents

### 2️⃣ Document Checklist (PDF Download)

Generated per scheme, includes:

- Scheme Name & Department
- Required Documents List
- Application Submission Portal / Address
- Contact Information

### 3️⃣ Application Status Tracker

- Track application status for any scheme (applied, pending, received)
- Stored via localStorage
- Viewable in the Track Applications page

---

## ⏱ Performance

| Operation | Complexity |
|-----------|------------|
| Profile Matching | O(S) where S = number of schemes |
| AI Explanation (Groq) | ~1–3 seconds per scheme |
| PDF Generation | O(D) where D = document items |
| Offline Cache (Service Worker) | Instant on repeat visits |

- Profile to results display ≤ 10 seconds
- Optimized for low-bandwidth and mobile-first usage
- Precision Target: ≥80% relevant scheme matches
- Recall Target: ≥70% of applicable schemes surfaced

---

## ⚙️ Installation & Setup

**Prerequisite:** Node.js 18+

### Backend

```bash
cd server
npm install
cp .env.example .env
# Add your GROQ_API_KEY to .env
node index.js
```

Backend runs on `http://localhost:3001`

### Frontend

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## 📖 Usage

1. Enter your disability type, age, income, and state
2. Click **Find My Schemes**
3. Browse matched schemes with relevance scores
4. Click **Explain in My Language** for a Groq-powered chat
5. Download document checklist as PDF
6. Track application status for schemes

No login required.

---

## 🗂 Project Structure

```
/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service layers
│   ├── data/              # Static data
│   ├── context/           # React Context (AppContext)
│   └── utils/             # Helper functions
├── server/
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Express middleware
│   └── data/              # schemes.json
└── public/                # Static assets
```

---

## ⚠️ Known Limitations

- Scheme database requires periodic manual updates as government schemes change
- Groq API latency (~1–3 seconds) may affect explanation generation speed
- Offline mode does not support AI explanations (requires connectivity)
- No persistent database — saved schemes exist only in the user's browser

---

## 🔮 Future Scope

- Voice accessibility mode for visually impaired users (Web Speech API)
- Persistent database for real application tracking
- More regional language support beyond English, Hindi, Marathi
- Push notifications for new scheme additions
- Integration with DigiLocker for document verification


---

## 🎯 Goal

SaarthiYantra transforms complex government scheme data into an accessible, multilingual welfare discovery system so that no person with a disability is left behind due to lack of awareness or access.
