// api/ask-mamun.js
// এই ফাইলটা প্রজেক্টের রুটে `api/` ফোল্ডারে রাখতে হবে (src/ এর বাইরে)।
// Vercel deploy করলে এটা automatically serverless function হিসেবে কাজ করবে:
// URL হবে: https://your-domain.vercel.app/api/ask-mamun

export default async function handler(req, res) {
  // শুধু POST request গ্রহণ করবো
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { message, history = [] } = req.body || {};

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  // Vercel Environment Variables থেকে API key নেওয়া হচ্ছে
  // এটা কখনো ব্রাউজারে exposed হবে না, কারণ এই কোড সার্ভারে চলে
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured on server" });
  }

  // AI যেন Mamun-এর পোর্টফোলিও সম্পর্কে সঠিকভাবে উত্তর দেয়,
  // তাই একটা system prompt দিয়ে context দেওয়া হচ্ছে।
  // এখানে আপনার real তথ্য বসিয়ে customize করে নিন।
  const systemPrompt = `তুমি "MamunAI" — Mamun-এর পোর্টফোলিও ওয়েবসাইটের একটা সহায়ক AI অ্যাসিস্ট্যান্ট।
তুমি Mamun-এর হয়ে ভিজিটরদের প্রশ্নের উত্তর দাও।

Mamun সম্পর্কে তথ্য:
- একজন Frontend Web Developer, React, Tailwind CSS, Framer Motion নিয়ে কাজ করেন
- পোর্টফোলিওতে Projects, Skills, Experience, Blog সেকশন আছে
- MERN স্ট্যাক শিখছেন, Programming Hero-তে কোর্স করেছেন

নিয়ম:
- সংক্ষিপ্ত, বন্ধুত্বপূর্ণ এবং সহায়ক উত্তর দাও
- বাংলা বা ইংরেজি — ভিজিটর যে ভাষায় প্রশ্ন করবে সেই ভাষায় উত্তর দাও
- Mamun-এর কাজ, দক্ষতা, প্রজেক্ট সম্পর্কে প্রশ্নের উত্তর দাও
- অপ্রাসঙ্গিক বা ক্ষতিকর প্রশ্নে ভদ্রভাবে না বলে দাও`;

  try {
    // পুরনো কথোপকথনের history + নতুন মেসেজ একসাথে পাঠানো হচ্ছে
    const messages = [
      ...history.map((h) => ({ role: h.role, content: h.content })),
      { role: "user", content: message },
    ];

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 500,
        system: systemPrompt,
        messages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Anthropic API error:", errText);
      return res.status(response.status).json({ error: "AI service error" });
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "দুঃখিত, উত্তর তৈরি করতে সমস্যা হয়েছে।";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}