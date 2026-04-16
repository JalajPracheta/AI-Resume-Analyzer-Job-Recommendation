# 🚀 AI Resume Analyzer & Career Dashboard

## 🔥 Overview

An AI-powered Resume Analyzer that helps users:

* Upload and analyze resumes 📄
* Get ATS score 📊
* Receive AI-powered suggestions 🧠
* Discover job recommendations 💼
* Build skills with roadmap & analytics 🚀

This project simulates a **real AI career assistant** similar to ChatGPT, LinkedIn insights, and resume tools.

---

## 📸 Screenshots

### 🏠 Landing Page

![Landing](./frontend/public/screenshots/landing.png)

### 📊 Dashboard (AI Analysis)

![Dashboard](./frontend/public/screenshots/dashboard.png)

### 🧠 Skill Builder

![Skill Builder](./frontend/public/screenshots/skills.png)

---

## 🎯 Key Features

### 📄 Resume Analysis

* Extracts name, skills, and summary
* AI-generated resume summary
* ATS score visualization (semi-circle chart)
* Improvement suggestions with explanations

---

### 📊 Dashboard

* Personalized greeting (based on resume)
* Resume summary & insights
* Skills visualization
* AI improvement suggestions
* Job recommendations

---

### 🧠 Skill Builder (AI Mode)

* Search any skill (React, Python, etc.)
* AI-generated roadmap
* Industry-relevant technologies
* Interview preparation guidance
* Multiple charts (bar, pie, etc.)

---

## 🛠️ Tech Stack

### Frontend

* Next.js (React framework)
* Tailwind CSS (UI styling)
* Recharts (charts & analytics)

### Backend

* FastAPI (Python)
* pdfplumber (resume parsing)

---

## ⚙️ Installation & Setup

---

### 🔹 1. Clone Repository

```bash
git clone https://github.com/JalajPracheta/AI-Resume-Analyzer-Job-Recommendation.git
cd AI-Resume-Analyzer-Job-Recommendation
```

---

### 🔹 2. Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install fastapi uvicorn pdfplumber
python -m uvicorn main:app --reload
```

👉 Backend will run at:

```
http://127.0.0.1:8000
```

---

### 🔹 3. Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend will run at:

```
http://localhost:3000
```

---

## 🌐 How to Use

1. Open `http://localhost:3000`
2. Upload your resume (PDF)
3. Click **Analyze Resume**
4. View:

   * AI Summary
   * ATS Score
   * Skills
   * Suggestions
   * Job Recommendations
5. Go to **Skill Builder**
6. Search any skill → get AI roadmap

---

## 💡 Why This Project is Useful

✅ Helps students improve resumes
✅ Provides AI-based career guidance
✅ Suggests in-demand skills
✅ Simulates real interview preparation
✅ Bridges gap between learning & job readiness

---

## 🚀 Future Enhancements

* OpenAI integration (real AI responses)
* Live job API (LinkedIn / Indeed)
* User authentication system
* Resume download/report generation
* Advanced NLP-based resume parsing

---

## 👨‍💻 Author

**Jalaj Gautam**

---

## ⭐ Support

If you like this project:

👉 Star this repo ⭐
👉 Share with others 🚀

---

## 🧠 Project Level

✔ Full Stack Project
✔ AI-based Application
✔ Resume/Placement Ready
✔ Portfolio-Level
<img width="1915" height="908" alt="Screenshot 2026-04-16 192755" src="https://github.com/user-attachments/assets/91ee2d32-2820-48dd-b609-a7f25f6589bc" />
