# JYOTI BAG MANUFACTURER - Website Code

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

---

## 🎯 QUICK EDIT GUIDE

### 1️⃣ Edit Contact Information, Products & All Content
**File: `frontend/src/data/mockData.js`**

This ONE file contains ALL editable content:

```javascript
// Change your contact details
export const contactInfo = {
  phone: "+91 98765 43210",        // ← YOUR PHONE
  whatsapp: "+91 98765 43210",     // ← YOUR WHATSAPP
  email: "info@jyotibagmanufacturer.com",  // ← YOUR EMAIL
  address: "Your business address here",    // ← YOUR ADDRESS
  gstNumber: "YOUR_GST_NUMBER",             // ← YOUR GST
  udyamNumber: "YOUR_UDYAM_NUMBER",         // ← YOUR UDYAM
  yearsInBusiness: "15+"                    // ← YEARS
};

// Edit/Add/Remove products
export const products = [
  {
    id: 1,
    name: "Product Name",
    category: "PVC Bags",
    material: "PVC Plastic",
    sizeOptions: ["Small", "Medium", "Large"],
    image: "YOUR_IMAGE_URL_OR_PATH",
    description: "Product description"
  },
  // Add more products here...
];
```

### 2️⃣ Add Your Logo
**Option A: Using image file**
1. Put your logo in `frontend/public/images/logo.png`
2. Edit `frontend/src/components/Navbar.jsx` (line ~44):
   ```javascript
   <img src="/images/logo.png" alt="JBM Logo" className="h-12" />
   ```
3. Also edit `frontend/src/components/Footer.jsx` (line ~20)

**Option B: Keep text logo**
- Already done! Just shows "JBM" text

### 3️⃣ Change Product Images
**Option 1: Use your own images**
1. Place images in `frontend/public/images/products/`
2. In `mockData.js`, set: `image: "/images/products/your-product.jpg"`

**Option 2: Use online images**
- Use image URLs from Unsplash, Pexels, or your server
- In `mockData.js`, set: `image: "https://your-image-url.com/image.jpg"`

### 4️⃣ Change Colors (Optional)
**File: `frontend/src/App.css` and search/replace in all files**
- Find: `red-600` → Replace with your color (e.g., `blue-600`)
- Find: `red-700` → Replace with darker shade
- Find: `red-50` → Replace with lighter shade

Common Tailwind colors: `blue-`, `green-`, `purple-`, `indigo-`, `pink-`, `orange-`

---

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

---

## 📤 HOW TO DEPLOY

### Option 1: Deploy to Vercel (Recommended - Free)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "Import Project"
4. Upload the `frontend` folder
5. Deploy! You'll get a live URL

### Option 2: Deploy to Netlify (Also Free)
1. Go to https://netlify.com
2. Drag and drop the `frontend` folder
3. Your site is live!

### Option 3: Traditional Web Hosting
1. Build production version:
   ```bash
   cd frontend
   yarn build
   ```
2. Upload the `build/` folder to your hosting (cPanel, etc.)

---

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

## 🎨 FILE-BY-FILE EDITING GUIDE

### Must Edit Files:
1. **`frontend/src/data/mockData.js`** ← Most important! All content here

### Optional Edit Files:
2. **`frontend/src/components/Navbar.jsx`** ← Logo change
3. **`frontend/src/components/Footer.jsx`** ← Logo change
4. **`frontend/src/pages/Home.jsx`** ← Homepage text customization
5. **`frontend/src/pages/About.jsx`** ← About page story
6. **`frontend/.env`** ← Backend URL (for future backend)

### Don't Edit (Unless you know React):
- `frontend/src/App.js`
- `frontend/package.json`
- `frontend/tailwind.config.js`

---

## 🆘 NEED HELP?

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

---

## ✅ QUICK START SUMMARY

1. Edit `frontend/src/data/mockData.js` with your details
2. Replace logo in `Navbar.jsx` and `Footer.jsx` (optional)
3. Add product images to `frontend/public/images/`
4. Test locally: `cd frontend && yarn install && yarn start`
5. Deploy to Vercel/Netlify

**That's it! Your website is ready to go live! 🚀**

---

*Built with React, TailwindCSS, and Shadcn UI*
*Professional business website for JYOTI BAG MANUFACTURER*
