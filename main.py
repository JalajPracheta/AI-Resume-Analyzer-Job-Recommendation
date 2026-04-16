from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber

app = FastAPI()

# ✅ CORS (VERY IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ ROOT ROUTE (ADD HERE)
@app.get("/")
def home():
    return {"message": "Backend running 🚀"}


# 🧠 Extract Name
def extract_name(text):
    lines = text.split("\n")
    for line in lines:
        if len(line.split()) <= 4 and line.isupper():
            return line.title()
    return "User"


# 🧠 Extract Skills
def extract_skills(text):
    skills_list = [
        "Python", "JavaScript", "React", "SQL", "Machine Learning",
        "Data Analysis", "HTML", "CSS", "Power BI", "Django",
        "MongoDB", "Node", "AWS"
    ]

    found = []
    for skill in skills_list:
        if skill.lower() in text.lower():
            found.append(skill)

    return found


# 🧠 Generate Summary
def generate_summary(name, skills, text):
    return f"""
{name} is a motivated candidate with strong skills in {", ".join(skills[:5])}.
They have worked on projects involving modern technologies and demonstrate good problem-solving ability.
Their background shows interest in software development, data analysis, and building real-world applications.
"""


# 🚀 UPLOAD API
@app.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    text = ""

    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            if page.extract_text():
                text += page.extract_text()

    name = extract_name(text)
    skills = extract_skills(text)
    summary = generate_summary(name, skills, text)

    return {
        "name": name,
        "summary": summary,
        "analysis": {
            "skills": skills,
            "score": 85,
            "suggestions": [
                "Add measurable achievements",
                "Improve project descriptions",
                "Include certifications section"
            ]
        },
        "recommended_jobs": [
            "Frontend Developer",
            "Backend Developer",
            "Data Analyst"
        ]
    }