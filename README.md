
# 🚀 ApexGPT

ApexGPT is a full‑stack conversational AI application with a React frontend, an Express + Node.js backend, Groq Llama model integration, and MongoDB for persistent chat storage. This README covers setup, running, and development notes so you can get the project running locally or deploy it.

---

## 🔍 Quick Overview

- **Frontend:** React (single-page app) that communicates with the backend API
- **Backend:** Node.js + Express providing chat endpoints and Groq model proxying
- **AI model:** Groq Llama (Llama‑3.3 or configured model) used via the Groq API
- **Database:** MongoDB with Mongoose schemas for threads and messages
- **Goal:** Provide a robust, developer-friendly codebase for building a conversational AI product

---

## 📦 Features

- Groq Llama model integration for conversational AI responses
- Role-based message schema (user / assistant) for deterministic completions
- Thread and message persistence via MongoDB + Mongoose
- Express API with CORS and dotenv environment configuration
- Clean backend structure (models, routes, utils) intended for easy extension

---

## ⚙️ Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB (local or Atlas) and connection URI
- Groq API key (or other model provider credentials)

---

## 🔧 Environment configuration

Create a `.env` file in the `Backend/` folder (do NOT commit this file). Example values:

```env
PORT=8080
MONGODB_URI=mongodb://localhost:27017/apexgpt
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=llama-3.3-70b-versatile
```

The backend already ignores `.env` via `.gitignore`—keep your keys secret.

---

## 🗂 Project Structure (high level)

```
ApexGPT/
├── Backend/
│   ├── models/        # Mongoose schemas (Thread, Message, etc.)
│   ├── routes/        # Express routes
│   ├── utils/         # Helpers (eg. groq client wrapper)
│   ├── server.js      # Express app entry
│   └── package.json
└── Frontend/
	├── src/           # React app
	└── package.json
```

---

## ▶️ Running Locally

Open two terminals — one for backend and one for frontend.

Backend (from project root):

```powershell
cd Backend
npm install
npm start
```

Frontend (from project root):

```powershell
cd Frontend
npm install
npm start
```

Notes:
- Backend default port is the value of `PORT` in `.env` (commonly `4000`).
- Frontend development server usually runs on `3000` and proxies API calls to the backend.

---

## 📡 API (example)

- `POST /api/chat` — send user message(s) and receive assistant reply
- `GET /api/threads` — list conversation threads
- `GET /api/threads/:id` — get thread messages

Check the `Backend/routes/` folder for exact route names and request/response formats.

---

## 🧩 Database

- Uses MongoDB. If using Atlas, set `MONGODB_URI` to your Atlas connection string.
- Ensure the database is reachable before starting the backend.

---

## ✅ Development Tips

- Keep your `.env` out of source control and never share API keys.
- Add rate-limiting / input validation before calling the model in production.
- Add tests for core API behavior (chat flow, thread creation, DB errors).

---

## 🙌 Contributing

Pull requests are welcome. Suggested workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make changes and run the app locally
4. Open a PR with a clear description of the change

Please include tests for new features when reasonable.

---

## 🧑‍💻 Author

Developed by **[Nikunj Mehta](https://github.com/Nikunj-Mehta)** 🚀

---