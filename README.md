# Jyoti Bag Manufacturer Website

**Jyoti Bag Manufacturer** is a modern, responsive e-commerce website built using **React.js**, **Tailwind CSS**, and **React Router**. It showcases products, allows customers to explore product categories, and provides easy communication via **WhatsApp** and **IndiaMART** links.

The website is designed for small businesses to present their products professionally online, with a focus on **customized bag solutions**.

---

## 🔹 Features

- Fully **responsive design** for desktop, tablet, and mobile.
- **Product catalog** with categories and detailed product information.
- **Customize Your Bag** page for personalized orders.
- **Contact section** with WhatsApp click-to-chat and email integration.
- **Quick access links**: IndiaMART profile link included.
- Modern UI using **Tailwind CSS** with smooth hover effects.
- **Persistent Navbar & Footer** across all pages.
- **SEO-friendly structure** and clean codebase.

---

## 🛠 Technology Stack

| Layer           | Technology                           |
| --------------- | ------------------------------------ |
| Frontend        | React.js, Tailwind CSS, React Router |
| State & UI      | React Hooks, Context API (if needed) |
| Styling         | Tailwind CSS, CSS Modules            |
| Deployment      | Vercel (or any static hosting)       |
| Version Control | Git & GitHub                         |

## 📁 Project Structure

```
jbm-website-export/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/   # Reusable components (Navbar, Footer, WhatsApp button)
│   │   ├── pages/        # All page components (Home, Products, etc.)
│   │   ├── data/         # mockData.js - EDIT THIS for content changes
│   │   ├── App.js        # Main app with routing
│   │   └── index.css     # Styling with Tailwind
│   ├── public/           # Static assets (put your images here)
│   ├── package.json      # Dependencies
│   └── .env              # Environment variables
├── backend/              # FastAPI backend (for future use)
└── README.md            # This file
```

## 🚀 HOW TO RUN LOCALLY (For Testing)

### Prerequisites

- Node.js 16+ installed
- Yarn package manager

### Steps:

```bash
# 1. Navigate to frontend
cd frontend

# 2. Install dependencies
yarn install

# 3. Start development server
yarn start

# 4. Open browser to http://localhost:3000
```

## 📝 COMMON EDITS CHECKLIST

Before deploying, make sure you've edited:

- [ ] Contact phone number in `mockData.js`
- [ ] Contact email in `mockData.js`
- [ ] Business address in `mockData.js`
- [ ] GST number in `mockData.js`
- [ ] Udyam number in `mockData.js`
- [ ] WhatsApp number in `mockData.js`
- [ ] Company logo (if needed)
- [ ] Product images
- [ ] Product names and descriptions
- [ ] Years in business

---

### Common Issues:

**Q: Page doesn't update after editing?**

- A: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

**Q: WhatsApp button not working?**

- A: Check `mockData.js` - make sure phone number is in format: `+919876543210` (no spaces)

**Q: Images not showing?**

- A: Check image path. Use `/images/filename.jpg` for public folder images

**Q: Want to add more pages?**

- A: Create new file in `frontend/src/pages/`, then add route in `App.js`

---

## 📞 BACKEND (Future Enhancement)

The `backend/` folder contains FastAPI code for:

- Storing enquiries in database
- Contact form submissions
- Product management

This is optional and can be set up later when you need database functionality.

-- Author ---

Harsh Thakur ( SOFTWARE DEVELOPER )
