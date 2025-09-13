# Huemn Interactive - Scroll Animation Gallery

This project is a **frontend assignment** developed for **Huemn Interactive Pvt Ltd**.  
It showcases smooth animations, interactive UI, and responsive design using **React, Vite, SCSS, and GSAP (GreenSock Animation Platform)**.  

The project demonstrates a **gallery of images** with scroll-based animations, hover effects, and a responsive navigation header.

---

## 🚀 Features

- **Responsive Navbar**
  - Fixed header with company branding (`HUEMN`)
  - Navigation links (`Features`, `Blog`, `Search`)
  - Fully responsive layout for desktop and mobile

- **Animated Gallery**
  - Images appear with **scroll animations**
  - **Scroll Down** → Images slide in from **right to left**
  - **Scroll Up** → Images slide in from **left to right**
  - Images disappear when completely scrolled past
  - **Hover effect**: Smooth scaling animation on images

- **Infinite Loop Animation**
  - Gallery images continuously move in a loop for a dynamic visual effect

- **Responsive Layout**
  - Adjusts seamlessly for different screen sizes (desktop, tablet, mobile)
  - Prevents horizontal scroll issues (`overflow-x: hidden`)

---

## 🛠️ Tech Stack

- **React** (Frontend library)
- **Vite** (Fast development build tool)
- **SCSS** (Modular styling with variables & nesting)
- **GSAP** (GreenSock Animation Platform for smooth animations)
- **JavaScript (ES6+)**

---

## 📂 Project Structure

huemn-scroll-animation/
│
│
├── src/
│ ├── components/
│ │ ├── Header.jsx # Navbar/Header section
│ │ ├── Gallery.jsx # Animated gallery component
│ │ └── AnimatedFeatures.jsx
│ ├── styles/
│ │ ├── header.scss # Header styles
│ │ ├── gallery.scss # Gallery styles
│ │ └── AnimatedFeatures.css # AnimatedFeatures styles
│ ├── App.jsx # Main React component
│ └── main.jsx # React entry point
│
├──index.html
├── package.json
├──vite-config.mjs # Vite configuration
└── README.md # Documentation
