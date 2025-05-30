# Quiz Website

## Overview
This is a full-stack Quiz Website where users can register, log in, take quizzes, and view their scores. The app dynamically fetches quiz questions from the backend and calculates the user’s score at the end of each quiz. Users can also view their past quiz attempts in a dashboard.

---

## Features
- User Authentication (Register/Login) with JWT
- Browse available quizzes
- Take quizzes with multiple-choice questions
- Real-time quiz progress and scoring
- View detailed results after quiz completion
- User dashboard to see past quiz attempts and scores
- Responsive design for desktop and mobile

---

## Technology Stack
- Frontend: React, React Router, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT
- Deployment: Vercel (Frontend), Render/Railway (Backend)

---

## Workflow

### 1. User Registration & Login
- Users create accounts or log in to access quizzes.
- Authentication tokens (JWT) are issued on successful login and stored in localStorage.
- Authenticated routes are protected to restrict unauthorized access.

### 2. Browsing Quizzes
- After login, users see a list of available quizzes fetched from the backend API.
- Quizzes are displayed with their title and brief description.

### 3. Taking a Quiz
- User selects a quiz to start.
- Questions are fetched one by one from the backend.
- The user selects answers for each question.
- User can navigate through questions and submit when done.

### 4. Scoring & Results
- On submission, the frontend calculates the score by comparing user answers with correct options.
- The result page displays the user’s score along with the correct answers for review.
- The result data is saved in the backend tied to the user account.

### 5. User Dashboard
- Users can view their quiz history with scores and timestamps.
- The dashboard fetches past quiz results from the backend.

---

## Future Enhancements
- Admin panel to create and manage quizzes
- Timer for quizzes with automatic submission
- Leaderboard for top scorers
- Categories and difficulty levels for quizzes
- Social sharing of results

---
