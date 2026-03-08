# 🎬 AI Mood Movie Matcher

https://movie-app-seven-rouge.vercel.app/

An **AI-powered movie discovery web application** that recommends movies based on your **current mood** or **search query**.

Users can type how they feel (e.g., *"I want a mind-bending sci-fi movie"*) and the app uses **Google Gemini AI** to understand the mood and recommend a movie. The app then fetches the movie details from **TMDB API**.

---

# 🚀 Features

### 🎭 Mood Matcher (AI Powered)

Describe your mood and **Google Gemini AI** suggests a movie name based on your feeling.

Example:

> "I feel nostalgic and want an emotional movie"

Gemini processes the prompt and returns a **movie title recommendation**.

---

### 🔍 Movie Search with Debouncing

Users can search movies by title.

To improve performance, **debouncing** is implemented so the API is not called on every keystroke.

Example flow:

User typing:

```
Inter
Inters
Interste
Interstellar
```

Without debouncing → **4 API calls**

With debouncing → **1 API call**

---

### ♾ Infinite Scroll

Movies automatically load when the user reaches the bottom of the page.

Implemented using **Intersection Observer API**.

This allows smooth browsing without pagination buttons.

---

### ⚡ Fast & Responsive UI

Built with **React + Vite + TailwindCSS** for a modern responsive interface.

---

### 🔄 Duplicate Movie Prevention

When loading more movies, the app ensures that previously loaded movies are not added again.

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* TailwindCSS
* Intersection Observer API

## APIs

* TMDB API (Movie data)
* Google Gemini AI (Mood → Movie recommendation)
