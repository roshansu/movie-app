import React, { useState } from "react";
const apiurl = import.meta.env.VITE_API_URL;
console.log(apiurl);
import { GoogleGenAI } from "@google/genai";

const MoodMatch = ({ setSearchText, setMood }) => {
  const [query, setQuery] = useState("");
  const [load, setLoad] = useState(false);

  async function handleSearch() {
    try {
      if (!query.trim()) return;
      // onSearch(query);
      setLoad(true);
      const ai = new GoogleGenAI({
        apiKey: apiurl,
      });

      const prompt = `You are a movie recommendation assistant.

Your task is to recommend exactly ONE movie based on the user's current mood.

Rules:
1. Respond with ONLY the movie name.
2. Do NOT include explanations.
3. Do NOT include year, genre, or any extra text.
4. Output must contain only the movie title.

User mood: ${query}`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
      });
      //  setQuery('')

      console.log("calling gemini")
      console.log(response.text);

      setLoad(false);
      setMood(true)
      return setSearchText(response.text);
    } catch (err) {
      console.error("ERROR:", err);
      setLoad(false);
      return alert(err.message);
      // setText(err)
    }
  }

  return (
<div className="w-full bg-white/90 backdrop-blur-md py-3 flex justify-center fixed top-14 border-b border-gray-200 z-40">

  {load && (
    <div className="fixed top-1/2 -translate-y-1/2 bg-gray-900 text-white px-5 py-2 rounded-full shadow-lg text-sm animate-pulse">
      Searching movie...
    </div>
  )}

  <div className="flex items-center gap-3 w-[92%] max-w-2xl">

    {/* Input with clear */}
    <div className="relative flex-1">

      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🎭
      </span>

      <input
        type="text"
        placeholder={load ? "Searching movie..." : "Describe your mood..."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-500 text-sm"
      />

      {query && (
        <button
          onClick={() => {
            setSearchText("");
            setQuery("");
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 text-sm"
        >
          ✕
        </button>
      )}
    </div>

    {/* Match button */}
    <button
      onClick={handleSearch}
      disabled={load}
      className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Match
    </button>

  </div>
</div>
  );
};

export default MoodMatch;
