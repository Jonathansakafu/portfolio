export const projects = [
  {
    name: "TradeMind AI",
    tagline: "AI-powered forex & crypto trading journal",
    description:
      "A full trading companion: AI-generated intraday signals fused from live market data, price-action momentum, and the trader's own uploaded books and chart screenshots (RAG over a vector database). Includes a Chrome extension for auto-trading on Pocket Option and native Android/iOS apps.",
    tech: ["React", "Express", "MongoDB", "Groq", "Gemini Vision", "Capacitor"],
    github: "https://github.com/jonathansakafu/TradeMind-AI",
    live: "https://trade-mind-ai-seven.vercel.app",
    accent: "#34d399",
  },
  {
    name: "MalmegaVille Sentinel",
    tagline: "Personal endpoint security platform",
    description:
      "Watches a Windows PC for security events — logins, USB activity, suspicious process behavior, startup persistence — and alerts by email, push, and SMS, even fully offline via a device's own cellular modem. If the machine is ever lost or stolen, it silently captures a webcam photo, location, and files from any inserted USB drive.",
    tech: ["Node.js", "TypeScript", "MongoDB", "C# / .NET 8", "React"],
    github: "https://github.com/jonathansakafu/MalmegaVille-Sentinel",
    live: "https://app-production-fd2d.up.railway.app",
    accent: "#60a5fa",
  },
  {
    name: "Sanitation Services & Tracking System",
    tagline: "Multi-operator service dispatch platform",
    description:
      "A regulated marketplace for on-demand septic/pit-latrine services: residents submit requests, licensed operators claim and dispatch them to their own drivers, and a regulatory authority oversees licensing and service quality across the network — with live location, photo verification, and payment tracking.",
    tech: ["JavaScript", "HTML", "REST API"],
    github: "https://github.com/jonathansakafu/sanitation-tracking-system",
    live: null,
    accent: "#f472b6",
  },
  {
    name: "Academic Management System",
    tagline: "Full-featured school management system",
    description:
      "Role-based dashboards for Admin, Teacher, Student, and Parent covering attendance, assignments, exam results, fees, and timetables, with a bilingual English/Swahili interface and an FAQ chatbot.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com/jonathansakafu/Academic-Management-System",
    live: null,
    accent: "#a78bfa",
  },
];

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Backend", items: ["Node.js", "Express", "Prisma", "REST APIs"] },
  { category: "Data", items: ["MongoDB", "PostgreSQL", "Vector search / RAG"] },
  { category: "AI", items: ["Groq", "Gemini", "LLM tool-calling", "Embeddings"] },
  { category: "Mobile & Native", items: ["Capacitor", "C# / .NET", "Android"] },
  { category: "DevOps", items: ["Vercel", "Render", "GitHub Actions", "Docker"] },
];

export const contact = {
  email: "jonathansakafu@gmail.com",
  whatsapp: "+255674462833",
  github: "https://github.com/jonathansakafu",
  linkedin: "https://www.linkedin.com/in/jonathan-sakafu-42108635a",
};
