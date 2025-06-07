# 🌟 Tour & Travel Booking Website 🌟

A Collaborative Project using the MERN Stack

---

## 📜 Description

Welcome to the Tour & Travel Booking Website — a fully functional web application created by a team of 5 passionate developers. This project simplifies the process of exploring, booking, and managing travel packages across the world. It offers a seamless and user-friendly experience for both travelers and travel agencies.

Throughout this project, we used the powerful MERN stack — MongoDB, Express.js, React.js, and Node.js — to develop a dynamic, scalable, and secure web application.

---

## 📝 Table of Contents

- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Team Members](#team-members)
- [Project Setup (How to Run Locally)](#project-setup-how-to-run-locally)
- [Folder & File Structure](#folder--file-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## ⚙️ Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT (JSON Web Tokens)
- **Cloud Services:** (Optional) Cloudinary / Firebase for image uploads
- **Tools:** GitHub, Postman, VS Code, Render/Vercel (for deployment)

---

## ✨ Key Features

- Browse and book travel packages
- User authentication (Register/Login)
- Admin panel to manage packages and bookings
- Responsive and mobile-friendly UI
- Reviews and ratings for travel packages
- Booking history for users
- Real-time booking confirmation
- Image upload for packages

---

## 👥 Team Members

A huge thanks to our amazing team who contributed their skills to bring this project to life:

- [CHANUKA RANDITHA](https://github.com/Chanuka999)
- [BUDDHIMA DISHANTHA](https://github.com/Buddhima999)
- [MADHAWA KAVINDU](https://github.com/Madhawakavindu)
- [INDUWARA LAKSHAN](https://github.com/induwara20014)
- [ISURU SAMPATH](https://github.com/IsuruSampathRanasinghe)

Want to see all the contributors? Check out the full list on the [Contributors page](https://github.com/Chanuka999/Tours_and_Travels_Booking_Webiste/graphs/contributors).

---

## 🚀 Project Setup (How to Run Locally)

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository

```bash
git clone https://github.com/Chanuka999/Tours_and_Travels_Booking_Webiste.git
cd Tours_and_Travels_Booking_Webiste
```

### 2. Setup Backend

```bash
cd backend
npm install
# Create a .env file with your MongoDB URI and JWT_SECRET_KEY
npm start
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

### 4. Access the App

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

---

## 📁 Folder & File Structure

### Root

- `README.md` (this file)
- `backend/`
- `frontend/`

### Backend (`backend/`)

- `index.js` (Entry point)
- `package.json`
- `.env` (not committed)
- **controllers/**
  - `authController.js`
  - `bookingController.js`
  - `reviewController.js`
  - `tourController.js`
  - `userController.js`
- **models/**
  - `Booking.js`
  - `Review.js`
  - `Tour.js`
  - `User.js`
- **routes/**
  - `auth.js`
  - `bookings.js`
  - `reviews.js`
  - `tour.js`
  - `users.js`
- **utils/**
  - `verifyToken.js`

### Frontend (`frontend/`)

- `package.json`
- `README.md`
- **public/**
  - `favicon.ico`
  - `index.html`
  - `logo192.png`
  - `logo512.png`
  - `manifest.json`
  - `robots.txt`
  - **tour-images/**
    - `tour-img01.jpg` ... `tour-img09.jpg`
- **src/**
  - `App.css`, `App.js`, `App.test.js`, `index.css`, `index.js`, `logo.svg`, `reportWebVitals.js`, `setupTests.js`
  - **assest/**
    - **data/**
      - `tours.js`, `tours.json`
    - **images/**
      - `ava-1.jpg`, `ava-2.jpg`, `ava-3.jpg`, `avatar.jpg`, `customization.png`, `experience.png`, `gallery-01.jpg`, ...
  - **Component/**
    - **Booking/**
    - **Featured-tours/**
    - **Footer/**
    - **Header/**
    - **image-gallery/**
    - **Layout/**
    - **Testimonial/**
  - **context/**
    - `AuthContext.js`
  - **hooks/**
    - `useFetch.js`
  - **Pages/**
    - `Home.jsx`, `Login.jsx`, `Register.jsx`, `SearchResultList.jsx`, `ThankYou.jsx`, `Tour.jsx`, `TourDetails.jsx`
  - **router/**
    - `Routers.js`
  - **services/**
    - `Service-card.css`, `ServiceCard.jsx`, `ServiceList.jsx`
  - **Shared/**
    - `common-section.css`, `CommonSection.jsx`, `Newsletter.css`, `Newsletter.jsx`, `Search-bar.css`, `Searchbar.jsx`, `Subtitle.jsx`, `Tour-card.css`, `TourCard.jsx`
  - **styles/**
    - `home.css`, `login.css`, `thank-you.css`, `tour-details.css`, `tour.css`
  - **utils/**
    - `avgRating.js`, `config.js`

---

## 📦 package.json Index

### Backend (`backend/package.json`)

- All dependencies for backend (Express, Mongoose, JWT, dotenv, etc.)

### Frontend (`frontend/package.json`)

- All dependencies for frontend (React, axios, react-router-dom, etc.)

---

## 🔮 Future Enhancements

- Payment gateway integration
- Admin analytics dashboard
- Multi-language support
- Advanced search and filtering
- Social login (Google, Facebook)
- Push notifications

---

## 📝 License

This project is licensed under the MIT License.

---

> For any questions or contributions, please open an issue or pull request on the [GitHub repository](https://github.com/Chanuka999/Tours_and_Travels_Booking_Webiste).
