# 📋 PRODUCTION DEPLOYMENT CHECKLIST

## Contact Form Status: ✅ CONFIGURED (SETUP REQUIRED)

Follow the Email.js Quick Start guide first, then verify here:

## Pre-Launch Verification

### Contact Form (MUST FIX)
- [ ] Email.js account created
- [ ] Public Key added to `js/script.js`
- [ ] Gmail service authorized in Email.js
- [ ] Email template created (`template_sabari_contact`)
- [ ] Form tested locally (submitted successfully)
- [ ] Email received in inbox
- [ ] Tested spam folder scenarios

### Files & Assets  
- [ ] Resume PDF exists: `assets/docs/Resume.pdf`
- [ ] Profile image exists: `assets/images/profile.jpeg`
- [ ] All tech stack images in `assets/images/tech/`
- [ ] All links are absolute or relative (no dead links)
- [ ] No 404 errors in DevTools Console

### HTML/CSS Quality
- [ ] No console errors (Press F12)
- [ ] No console warnings
- [ ] Responsive on mobile (test on phone/iPad)
- [ ] All animations smooth (60fps)
- [ ] Proper meta viewport tag present

### Links & Navigation
- [ ] All nav links scroll to correct sections
- [ ] Social links open in new tab
- [ ] Email link works (mailto:)
- [ ] Resume download works
- [ ] No broken internal links

### SEO & Metadata
- [ ] Page title optimized: "Sabari Mani — Portfolio"
- [ ] Meta description added (optional)
- [ ] All images have alt text
- [ ] Correct charset UTF-8
- [ ] Open Graph tags (optional but recommended)

### Performance
- [ ] Page loads in <3 seconds
- [ ] Images optimized (not huge file sizes)
- [ ] No unused CSS/JS
- [ ] Minified CSS/JS (optional for performance)

---

## 🚀 DEPLOYMENT PLATFORMS (Choose ONE)

### ✅ VERCEL (Recommended)
**Best for: Speed + Free Tier**

```bash
npm install -g vercel
vercel --prod
```
- [ ] Vercel account created
- [ ] Deployed successfully
- [ ] Custom domain configured (optional)
- [ ] Form working on live URL

### ✅ NETLIFY  
**Best for: Ease of Use**

```
Drag and drop portfolio folder to:
https://app.netlify.com/drop
```
- [ ] Netlify account created
- [ ] Files uploaded successfully
- [ ] Live URL works
- [ ] Contact form submissions working

### ✅ GITHUB PAGES
**Best for: Git Integration**
- [ ] GitHub repo created and pushed
- [ ] GitHub Pages enabled
- [ ] Custom domain set (if wanted)
- [ ] Note: Contact form won't work without backend

---

## ✅ POST-DEPLOYMENT CHECKLIST

After deploying to production:

- [ ] Visit live URL in browser
- [ ] Test contact form submission
- [ ] Verify email received within 1 minute
- [ ] Check on mobile device
- [ ] All images load properly
- [ ] No CORS errors in console
- [ ] Social links work
- [ ] Resume downloads correctly
- [ ] Google Analytics set up (optional)
- [ ] Domain DNS properly configured

---

## 🔧 COMMON ISSUES & FIXES

### Form Not Submitting
```
❌ Problem: "Cannot find emailjs"
✅ Fix: Check Email.js script tag in HTML
```

### Emails Not Received
```
❌ Problem: Messages disappear in spam
✅ Fix: Mark as "Not Spam" in email provider
```

### Images Not Loading
```
❌ Problem: Broken image icons
✅ Fix: Verify assets/ folder uploaded
       Check relative paths in HTML
```

### Styling Broken
```
❌ Problem: Page looks unstyled
✅ Fix: Ensure css/style.css uploaded
       Check CSS path in <link> tag
```

### Form Error Messages
```
✅ Solution: Open DevTools (F12)
           Check Console tab for errors
           Fix issue in script.js if needed
```

---

## 📊 DAILY MONITORING

After launch, check:

- [ ] Any failed form submissions
- [ ] Contact notifications received
- [ ] Monitor Email.js dashboard for errors
- [ ] Check uptime/performance metrics
- [ ] Update portfolio with new projects
- [ ] Monitor emails for responses

---

## 🎯 FINAL SIGN-OFF

Before going live:

1. **Test Checklist**: All items above checked ✅
2. **Email.js Setup**: Verified working 📧
3. **Deployment**: Chosen platform ready 🚀
4. **Domain**: Ready or configured (if using custom) 🌐
5. **Contact Form**: Tested end-to-end 📋

**Status**: 🟢 READY FOR PRODUCTION

**Deployed Date**: ________________
**Live URL**: ________________
**Contact Form Status**: ✅ Fully Functional

---

**Questions?** Check DEPLOYMENT_GUIDE.md for detailed help
