# 🚀 Global Decision Intelligence Platform (GDIP)

## 📖 Overview
The **GDIP** is a strategic analytics dashboard designed to eliminate decision friction for Product Managers. It validates data quality using a proprietary **Automated Confidence Score (ACS)** algorithm.

This project utilizes the **MERN Stack** (MongoDB, Express, React/Next.js, Node.js) to ensure high performance and type safety via **TypeScript**.

---

## ⚙️ Tech Stack (The Engine)
* **Frontend (The Face):** Next.js 14 (React), TypeScript, Mantine UI, React-Query.
* **Backend (The Brain):** Node.js, Express.js.
* **Database (The Memory):** MongoDB Atlas.
* **Logic:** Weighted ACS Algorithm (Reliability 50% + Consistency 30% + Volume 20%).

---

## 🛠️ Installation & Setup (How to Drive)

### 1. Prerequisites
* Node.js installed.
* MongoDB Connection String (URI).

### 2. Setup the Server (The Brain)
The server handles API requests and logic.
```bash
cd server
npm install
# Create a .env file with: MONGO_URI=your_mongodb_string
npm run dev