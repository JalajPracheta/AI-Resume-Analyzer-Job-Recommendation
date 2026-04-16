import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { role } = await req.json();

  const lower = role.toLowerCase();

  if (lower.includes("python")) {
    return NextResponse.json({
      role: "Python Developer",
      skills: ["Python", "Django", "Flask", "SQL"],
      roadmap: [
        "Learn Python basics",
        "Build backend projects",
        "Learn APIs",
        "Deploy apps",
      ],
      resources: [
        "YouTube: CodeWithHarry",
        "Docs: Python official docs",
        "Practice: LeetCode",
      ],
      questions: [
        "What is Python?",
        "Explain OOP",
        "Difference list vs tuple",
      ],
      chart: [
        { name: "Python", value: 90 },
        { name: "Backend", value: 80 },
        { name: "DB", value: 70 },
      ],
    });
  }

  // default
  return NextResponse.json({
    role,
    skills: ["Programming", "DSA", "Projects"],
    roadmap: [
      "Learn basics",
      "Build projects",
      "Practice DSA",
    ],
    resources: [
      "YouTube",
      "Docs",
      "LeetCode",
    ],
    questions: [
      "Explain project",
      "What is API?",
    ],
    chart: [
      { name: "Skills", value: 80 },
      { name: "DSA", value: 70 },
    ],
  });
}