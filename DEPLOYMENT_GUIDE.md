# 🚀 Portfolio Deployment Guide

## ✅ Contact Form - SETUP REQUIRED

Your contact form is now configured with **Email.js** for production. Follow these steps:

### Step 1: Email.js Setup (5 minutes)
1. Go to → https://www.emailjs.com/
2. **Sign up (Free)** - Use your Google account or email
3. Once logged in, get your **Public Key** from Dashboard
4. In `js/script.js`, replace `'7YRqFFFcAX_a0c0vD'` with your own Public Key

### Step 2: Create Email.js Service
1. Go to **Email Services** section
2. Click **Add Service** → Choose **Gmail** (or your email provider)
3. Follow the authorization steps
4. Note your **Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **Template Name**: `Contact Portfolio` 
4. **Template ID**: For this guide, use `template_sabari_contact`
5. **Receiver Email**: `{{to_email}}`
6. Use this template content:

```
Subject: New Portfolio Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Project: {{project_name}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

7. Click **Save** and test it

### Step 4: Update Configuration (if needed)
In `js/script.js`, update these variables if different:
```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

---

## 🌐 Deployment Options

### Option 1: **Vercel** (Recommended - FREE)
**Best for: Fast, zero-config deployment**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from portfolio folder
vercel --prod
```
✅ Automatic HTTPS, CDN, free tier generous

### Option 2: **Netlify** (FREE)
**Best for: Simple drag-and-drop**

1. Go to https://netlify.com
2. Drag & drop your portfolio folder
3. Deploy instantly
4. Custom domain optional

### Option 3: **GitHub Pages** (FREE)
**Best for: Version control + hosting**

```bash
# Create repo, push code, enable GitHub Pages
# But: No server-side features (contact form won't work on free tier)
```

### Option 4: **Traditional Hosting** (Paid)
Godaddy, Hostinger, Bluehost - Use FTP/SFTP to upload files

---

## ✅ Pre-Deployment Checklist

- [ ] Email.js Public Key added to `script.js`
- [ ] Email.js Service created (Gmail/other)
- [ ] Email Template created with correct ID
- [ ] Test contact form submission locally
- [ ] All image paths working (`assets/images/`, `assets/docs/`)
- [ ] Resume PDF exists at `assets/docs/Resume.pdf`
- [ ] All social links updated (Twitter, LinkedIn handles correct)
- [ ] Meta tags SEO-optimized
- [ ] Mobile responsive (test on phone)
- [ ] No console errors (open DevTools)
- [ ] Email delivery working (check spam folder)

---

## 🧪 Testing Before Deploy

1. **Test Form Locally**
   - Open `index.html` in browser
   - Fill contact form
   - Should receive email in 5 seconds
   - Check spam folder if not received

2. **Test All Links**
   - Verify all nav links scroll correctly
   - Check all external links open in new tabs
   - Download Resume PDF works

3. **Test on Mobile**
   - Open on phone/tablet
   - Check responsive design
   - Touch interactions smooth

---

## 📧 Monitoring After Deploy

1. **Check Spam Folder** - First emails might go there
   - Mark as "Not Spam" to train algorithm

2. **Email Rate Limits** 
   - Email.js free tier: 200 emails/day
   - Most portfolios won't exceed this

3. **Form Errors**
   - Open DevTools (F12) → Console
   - Check for any errors on form submit
   - Contact Form working indicator at bottom right

---

## 🔒 Security Notes

✅ **What's Safe:**
- Public Key is meant to be public (limited access)
- Email validation required
- Rate limiting in Email.js

⚠️ **What to Guard:**
- Don't commit Private Keys to GitHub
- Keep Gmail password in Email.js secure
- Monitor failed submission attempts

---

## 📱 After Deployment

1. **Add to Social Media**
   - Update LinkedIn with portfolio URL
   - Share on Twitter
   - Pin to GitHub bio

2. **SEO Optimization**
   - Add Google Analytics
   - Submit to Google Search Console
   - Add meta description tags

3. **Custom Domain** (Optional)
   - Buy domain (Namecheap, GoDaddy)
   - Point to your hosting provider

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| Emails not received | Check spam folder, verify service ID |
| Form shows error | Check browser console (F12) |
| Styling broken | Check CSS path in HTML |
| Images missing | Verify `assets/` folder uploaded |
| CORS error | Use Vercel/Netlify (fixes automatically) |

---

## 📞 Support Links

- **Email.js Docs**: https://www.emailjs.com/docs/
- **Vercel Deploy**: https://vercel.com/docs
- **Netlify Deploy**: https://docs.netlify.com/

---

**Last Updated**: April 4, 2026
**Portfolio Ready**: ✅ Production Deployment Ready
