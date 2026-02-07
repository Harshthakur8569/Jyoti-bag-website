# 📝 STEP-BY-STEP EDITING GUIDE

## 🎯 Most Common Edits (95% of what you need)

### EDIT #1: Contact Information
**File:** `frontend/src/data/mockData.js`
**Line:** 3-11

```javascript
export const contactInfo = {
  phone: "+91 YOUR_PHONE_NUMBER",
  whatsapp: "+91 YOUR_WHATSAPP",
  email: "your-email@company.com",
  address: "Your Full Business Address, City - Pincode, State, India",
  businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
  gstNumber: "YOUR_GST_NUMBER",
  udyamNumber: "YOUR_UDYAM_NUMBER",
  yearsInBusiness: "20+"
};
```

### EDIT #2: Product Details
**File:** `frontend/src/data/mockData.js`
**Line:** 13-100

**To change a product:**
```javascript
{
  id: 1,
  name: "YOUR PRODUCT NAME",
  category: "PVC Bags",  // Categories: PVC Bags, Non-Woven Bags, Home Textiles, Industrial Bags
  material: "YOUR MATERIAL",
  sizeOptions: ["Size 1", "Size 2", "Size 3", "Custom"],
  image: "/images/products/your-image.jpg",  // ← Put image in public/images/products/
  description: "YOUR PRODUCT DESCRIPTION"
}
```

**To add a new product:**
Copy any existing product block and change the `id` to next number (10, 11, etc.)

**To remove a product:**
Delete the entire product block (from `{` to `},`)

### EDIT #3: Change Logo
**Files to edit:** 
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Footer.jsx`

**Steps:**
1. Place your logo image in `frontend/public/images/logo.png`
2. In **Navbar.jsx** find line 44-49 and replace with:
```javascript
<img src="/images/logo.png" alt="JBM Logo" className="h-10" />
```
3. Do the same in **Footer.jsx** around line 20-27

### EDIT #4: Homepage Hero Text
**File:** `frontend/src/pages/Home.jsx`
**Line:** 23-29

```javascript
<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
  Your Headline Here{' '}
  <span className="text-red-600">Highlighted Text</span> More Text
</h1>

<p className="text-xl text-gray-600 leading-relaxed">
  Your subtext description here...
</p>
```

### EDIT #5: About Us Story
**File:** `frontend/src/pages/About.jsx`
**Line:** 85-100

Find the paragraphs starting with "Founded over" and replace with your story.

---

## 🖼️ Adding Your Images

### Product Images:
1. **Create folder:** `frontend/public/images/products/`
2. **Place images:** `pvc-bag.jpg`, `mattress-cover.jpg`, etc.
3. **Reference in mockData.js:**
```javascript
image: "/images/products/pvc-bag.jpg"
```

### Hero/Background Images:
- Can use current Unsplash URLs
- Or replace with your own in `frontend/public/images/`
- Update in respective page files (Home.jsx, About.jsx)

---

## 🎨 Changing Colors

### Quick Color Change:
Use Find & Replace in your code editor:

**Find:** `red-600` → **Replace with:** `blue-600` (or any Tailwind color)
**Find:** `red-700` → **Replace with:** `blue-700`
**Find:** `red-50` → **Replace with:** `blue-50`

### Available Colors:
- `blue-` (Professional blue)
- `green-` (Eco-friendly green)
- `purple-` (Premium purple)
- `orange-` (Energetic orange)
- `indigo-` (Corporate indigo)

---

## 📱 WhatsApp Integration

WhatsApp buttons work automatically using the number in `mockData.js`:

```javascript
whatsapp: "+919876543210"  // ← Format: +91XXXXXXXXXX (no spaces)
```

**Where it's used:**
- Floating WhatsApp button (all pages)
- Product enquiry buttons
- Customize form submission
- Contact page

---

## 🔧 Advanced Customizations

### Add New Page:
1. Create file: `frontend/src/pages/YourPage.jsx`
2. Copy structure from `About.jsx`
3. Add route in `frontend/src/App.js`:
```javascript
<Route path="/your-page" element={<YourPage />} />
```
4. Add link in Navbar.jsx

### Modify Footer:
**File:** `frontend/src/components/Footer.jsx`
- Add/remove links (line 60-90)
- Change social links (if you add them later)

### Add More Bag Types in Customize Form:
**File:** `frontend/src/data/mockData.js`
**Line:** Find `customizationOptions`

```javascript
bagTypes: [
  "Your New Bag Type",
  "Another Type",
  // ... add more
]
```

---

## ✅ Pre-Deployment Checklist

Run through this before deploying:

```
□ Updated phone number
□ Updated WhatsApp number (with +91)
□ Updated email address
□ Updated business address
□ Updated GST number
□ Updated Udyam number
□ Changed logo (if needed)
□ Updated all product names
□ Updated all product images
□ Updated product descriptions
□ Changed About Us story
□ Tested WhatsApp button locally
□ Checked all pages load correctly
```

---

## 🚀 Testing Locally

```bash
cd frontend
yarn install      # First time only
yarn start        # Start server
```

Open: http://localhost:3000

**Test:**
- Click all navigation links
- Try product filters
- Fill customize form
- Click WhatsApp buttons (should open WhatsApp)
- Test on mobile view (resize browser)

---

## 📤 Deploy to Vercel (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub/Google
3. Click "Add New Project"
4. Click "Import Git Repository" or drag `frontend` folder
5. Click "Deploy"
6. Done! You get a URL like: `your-site.vercel.app`

**To update later:**
- Make changes locally
- Push to GitHub
- Vercel auto-deploys!

OR re-drag the folder to Vercel

---

## 💡 Tips

✅ **Always backup** `mockData.js` before major edits
✅ **Edit one thing at a time** and test
✅ **Use proper image formats:** JPG for photos, PNG for logos
✅ **Compress images** before adding (use tinypng.com)
✅ **Test WhatsApp numbers** - must be in +91XXXXXXXXXX format
✅ **Keep descriptions short** - users scan, don't read
✅ **Test on mobile** - 60% of users are on phones

---

## 🆘 Troubleshooting

**Problem:** Changes not showing
- **Fix:** Hard refresh (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)

**Problem:** WhatsApp button not working
- **Fix:** Check phone number format in mockData.js (no spaces, include +91)

**Problem:** Images not loading
- **Fix:** Check image path - use `/images/filename.jpg` not `images/filename.jpg`

**Problem:** Site won't start
- **Fix:** Run `yarn install` again in frontend folder

---

## 📞 Quick Reference

**Main content file:** `frontend/src/data/mockData.js`
**Logo files:** `Navbar.jsx` and `Footer.jsx`
**Page content:** `frontend/src/pages/` folder
**Images location:** `frontend/public/images/`

**That's all you need to know! Happy editing! 🎉**
