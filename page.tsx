"use client";

import { useEffect, useState } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Your AI Resume Analyzer 🚀",
    "Smart Career Builder 💼",
    "AI Powered Resume Insights 🤖",
  ];

  const [searchSkill, setSearchSkill] = useState("");
  const [skillData, setSkillData] = useState<any>(null);

  // 🔥 TEXT ANIMATION
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 🚀 Upload Resume
  const uploadResume = async () => {
    if (!file) return alert("Upload resume");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  // 🔍 Skill Analyzer
  const analyzeSkill = async () => {
    if (!searchSkill) return;

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ role: searchSkill }),
    });

    const data = await res.json();
    setSkillData(data);
  };

  // ================= LANDING =================
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">

        <h1 className="text-5xl font-bold mb-8 transition-all duration-500">
          {texts[textIndex]}
        </h1>

        <div className="glass p-10 text-center">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />

          <button
            onClick={async () => {
              await uploadResume();
              setIsLoggedIn(true);
            }}
            className="mt-4 bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-2 rounded"
          >
            Analyze Resume
          </button>
        </div>
      </div>
    );
  }

  // ================= MAIN APP =================
  return (
    <div className="flex min-h-screen text-white">

      {/* Sidebar */}
      <div className="w-64 glass p-5">
        <h2 className="text-xl font-bold mb-6">AI Dashboard</h2>

        <ul className="space-y-3">
          <li
            onClick={() => setActiveTab("dashboard")}
            className="cursor-pointer hover:bg-white/10 p-2 rounded"
          >
            Dashboard
          </li>

          <li
            onClick={() => setActiveTab("skills")}
            className="cursor-pointer hover:bg-white/10 p-2 rounded"
          >
            Build Skills
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* ================= DASHBOARD ================= */}
        {activeTab === "dashboard" && result && (
          <div>

            {/* Greeting */}
            <h1 className="text-2xl mb-4 animate-pulse">
              👋 {result.name}, here’s your AI Analysis
            </h1>

            {/* Summary */}
            <div className="glass p-6 mb-4">
              <h2 className="mb-2 font-semibold">Resume Summary</h2>
              <p>{result.summary}</p>
            </div>

            {/* ATS SCORE */}
            <div className="glass p-6 mb-4">
              <h2 className="mb-3 font-semibold">ATS Score</h2>

              <ResponsiveContainer width="100%" height={200}>
                <RadialBarChart
                  innerRadius="70%"
                  outerRadius="100%"
                  data={[{ value: result.analysis.score }]}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar dataKey="value" fill="#7C3AED" />
                </RadialBarChart>
              </ResponsiveContainer>

              <p className="text-center text-2xl">
                {result.analysis.score}%
              </p>
            </div>

            {/* Skills */}
            <div className="glass p-6 mb-4">
              <h2 className="mb-2 font-semibold">Skills</h2>
              {result.analysis.skills.map((s: string, i: number) => (
                <span key={i} className="mr-2 bg-white/10 px-2 py-1 rounded">
                  {s}
                </span>
              ))}
            </div>

            {/* Improvements */}
            <div className="glass p-6 mb-4">
              <h2 className="mb-2 font-semibold">AI Improvements</h2>

              {result.analysis.suggestions.map((s: string, i: number) => (
                <div key={i} className="mb-3">
                  <p className="text-red-400">❌ {s}</p>
                  <p className="text-sm opacity-70">
                    ✔️ Example: Add metrics like "Improved performance by 40%"
                  </p>
                </div>
              ))}
            </div>

            {/* Job Recommendations */}
            <div className="glass p-6 mb-4">
              <h2 className="mb-2 font-semibold">Job Recommendations</h2>

              {result.recommended_jobs.map((job: string, i: number) => (
                <p key={i}>
                  💼 {job} — Bangalore / Hyderabad (Match: 85%)
                </p>
              ))}
            </div>

            {/* Interview Questions */}
            <div className="glass p-6">
              <h2 className="mb-2 font-semibold">Interview Questions</h2>
              <ul className="list-disc ml-5">
                <li>Explain your projects in detail</li>
                <li>Why did you choose this tech stack?</li>
                <li>What challenges did you face?</li>
              </ul>
            </div>

          </div>
        )}

        {/* ================= SKILL BUILDER ================= */}
        {activeTab === "skills" && (
          <div>

            <h1 className="text-2xl mb-4">Skill Builder 🚀</h1>

            {/* Search */}
            <input
              type="text"
              placeholder="Search any skill (React, Python...)"
              value={searchSkill}
              onChange={(e) => setSearchSkill(e.target.value)}
              className="w-full p-3 bg-white/10 mb-4 rounded"
            />

            <button
              onClick={analyzeSkill}
              className="bg-purple-500 px-4 py-2 rounded"
            >
              Analyze
            </button>

            {/* Default Skills Grid */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                "React","Python","AI","Cloud","DevOps","Java",
                "C++","Node","MongoDB","SQL","Docker","Kubernetes"
              ].map((skill, i) => (
                <div key={i} className="glass p-4 text-center">
                  {skill}
                </div>
              ))}
            </div>

            {/* Result */}
            {skillData && (
              <div className="glass p-6 mt-6">
                <h2 className="text-xl mb-2">{skillData.role}</h2>

                <h3 className="font-semibold">Roadmap</h3>
                <ul className="list-disc ml-5">
                  {skillData.roadmap.map((r: string, i: number) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}