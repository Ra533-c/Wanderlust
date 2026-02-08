# 🌍 WanderLust - Travel Destinations Platform

WanderLust ek full-stack web application hai jo users ko sundar locations dhundhne, unhe list karne aur reviews dene ki suvidha deta hai. Yeh project **Airbnb** se inspired hai! 🚀

---

## 🛠 Tech Stack (Humne kya-kya use kiya?)

Project ko banane ke liye yeh modern technologies use ki gayi hain:

*   **Backend:** Node.js & Express.js 💻
*   **Database:** MongoDB Atlas (Cloud Database) ☁️
*   **Frontend Rendering:** EJS (Embedded JavaScript) 📄
*   **Styling:** 
    *   Tailwind CSS v4 (For modern, custom UI) 🎨
    *   Bootstrap 5 (For layout and components) 🏗️
*   **Authentication:** Passport.js (Secure Login/Signup) 🔐
*   **Image Storage:** Cloudinary 🖼️
*   **Maps:** Mapbox SDK 📍

---

## 🌪 Flow of Code (Kaise kaam kar raha hai sab?)

Jab bhi koi user website par aata hai, toh backend mein yeh cycle chalta hai:

1.  **Request:** User browser par `url` hit karta hai.
2.  **App.js (Gatekeeper):** Sabse pehle request `app.js` mein aati hai. Yahan saari configuration aur middlewares (auth, session) check hote hain.
3.  **Routes:** Request ko sahi raste (`/listing`, `/user`, ya `/review`) par bheja jata hai.
4.  **Controllers:** Yahan asli logic hota hai. Controller MongoDB se data mangwata hai.
5.  **View Engine:** Controller data ko EJS file mein bhejta hai.
6.  **Response:** Browser ko ek sundar HTML page dikhayi deta hai.

---

## 📊 Visual Diagram

```text
User Request 🌍
      |
      V
[ Express Server (app.js) ] <---> [ Middlewares (Auth/Session) ]
      |
      V
[ Routers ] -----------------> [ Controllers ]
      |                           |
      V                           V
[ EJS Templates ] <---------- [ MongoDB Atlas ]
      |
      V
[ User Browser (Final HTML) ] ✅
```

---

## 📁 Folder Structure (Kon si file kya karti hai?)

*   📂 **models/**: Database ka structure (Schema) define karta hai.
*   📂 **routes/**: Saare URL raste define karta hai.
*   📂 **controllers/**: Business logic aur database operations.
*   📂 **views/**: Aapka HTML/EJS code jo user ko dikhta hai.
*   📂 **public/**: Static files jaise CSS, Client-side JS aur Images.
*   📄 **app.js**: Project ka main dimag (Entry Point).

---

## 💡 Programming Example (Hinglish Style)

Chalo samajhte hain ki ek **Listing** kaise dikhayi deti hai code mein:

```javascript
// Example: Listing Schema
const listingSchema = new Schema({
  title: String,        // Jagah ka naam (e.g. "Manali Villa")
  description: String,  // Uske baare mein (e.g. "Pahadon ke beech")
  price: Number,        // Paisa (e.g. 5000)
  location: String      // Kahan hai?
});
```

Jab hum use display karte hain Tailwind ke saath:
*   `hover:shadow-2xl`: Mouse le jane par card chamkega! ✨
*   `transition-all`: Animation smooth hogi, jhatke se nahi. 🌊

---

## 🚀 How to Run locally?

1.  Repo ko clone karein.
2.  `npm install` chalayein saare dependencies ke liye.
3.  Apni `.env` file banayein aur usme `ATLAS_URL`, `SECRET`, `CLOUD_NAME` etc. dalein.
4.  `npx nodemon app.js` chalayein.
5.  Browser mein `localhost:8081` kholein.

---

**Made with ❤️ by [Your Name]**
Happy Coding! 👩‍💻👨‍💻
