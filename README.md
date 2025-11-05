# 🌍 Wanderlust | Airbnb Clone (EJS + Node.js)

Wanderlust is an Airbnb-style web application where users can create and share property listings (hotels / stay places).  
Users can sign up, sign in, add listings, upload images, give reviews, manage listings, and explore locations using Mapbox maps.  
Project is built using **EJS templates**, **Node.js**, **Express.js**, **MongoDB Atlas**, **Cloudinary**, and **Passport.js**.

## 🚀 Live Deployment

[![Live on Render](https://img.shields.io/badge/Render-Live-green?style=for-the-badge)](https://wanderlust-rk9p.onrender.com)


## 🧩 Tech Stack

| Layer / Category      | Technology Used         | Purpose                         |
| --------------------- | ----------------------- | ------------------------------- |
| **Frontend**          | EJS, CSS                | Template rendering + UI         |
| **Backend Runtime**   | Node.js                 | Server side JavaScript engine   |
| **Backend Framework** | Express.js              | Routing, middleware, REST logic |
| **Database**          | MongoDB Atlas (Cloud)   | Store listings, users, reviews  |
| **Authentication**    | Passport Local Strategy | Login, Signup, Sessions         |
| **File Storage**      | Cloudinary              | Store & manage listing images   |
| **Maps / Geo**        | Mapbox API              | Map rendering + geo search      |



## ⭐ Features

- User Authentication (Login / Register)
- Create / Edit / Delete Listings
- Image Upload using Cloudinary
- Review and Rating System
- Mapbox Maps Integration for location view
- Secure sessions, flash messages, form validations
- Full CRUD functionality
- Uses MongoDB Atlas (cloud based)


## 📁 Folder Structure (basic overview)

wanderlust/
│-- public/
│-- views/ # EJS templates
│-- models/
│-- routes/
│-- controllers/
│-- utils/
│-- app.js
│-- package.json
│-- .env






---

## ⚙️ Installation & Setup


# clone repo
git clone https://github.com/<your-username>/wanderlust.git
cd wanderlust

# install dependencies
npm install

# add .env file with all required variables

# run application
npm start


Application will run on:
http://localhost:8080

---


## 📦 Deployment

This project is deployed on Render
Production URL: https://wanderlust-rk9p.onrender.com


### 📌 Notes

Booking feature not included yet (future scope)

This is a learning + production style full stack project
