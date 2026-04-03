# Netlify Forms Troubleshooting Guide

## Problem: Forms Not Submitting to Netlify

If your contact form or newsletter form isn't working, follow these steps:

## ✅ Solution Applied

I've added hidden form declarations to `index.html`. This ensures Netlify detects your forms during the build process, even though the actual forms are in `/pages/connect.html`.

## 🔍 Diagnostic Steps

### 1. Verify Forms are Detected

After deploying to Netlify:

1. Go to https://app.netlify.com
2. Select your site
3. Click **Forms** in the left sidebar
4. You should see two forms listed:
   - `contact`
   - `newsletter`

**If forms don't appear:**
- Wait 5-10 minutes after deployment (Netlify needs to scan your HTML)
- Trigger a new deploy: Netlify dashboard → Deploys → Trigger deploy → Deploy site

### 2. Check Deploy Logs

1. Netlify dashboard → Deploys
2. Click on the latest deploy
3. Look for form detection messages like:
   ```
   Forms detected:
   - contact
   - newsletter
   ```

**If you don't see this:**
- The hidden forms in `index.html` might not be formatted correctly
- Re-deploy the site

### 3. Test Form Submission

1. Go to your live site: `https://your-site.netlify.app/pages/connect.html`
2. Fill out the contact form
3. Click "Send Message"
4. You should be redirected to: `/pages/connect.html?success=true#booking-form`
5. A success message should appear

**If submission fails:**
- Check browser console (F12) for JavaScript errors
- Try disabling browser extensions
- Test in incognito mode

### 4. Check for Submissions

After testing:

1. Netlify dashboard → Forms → contact
2. Click "Recent submissions"
3. You should see your test submission

**If no submissions appear but redirect worked:**
- Check spam folder in Netlify (Forms → Spam)
- Verify form name matches exactly: `name="contact"`

## 🐛 Common Issues & Fixes

### Issue 1: "Form not found"
**Cause:** Netlify hasn't detected the form during build

**Fix:**
- Make sure you've deployed AFTER adding the hidden forms to `index.html`
- Check that `index.html` is at the root of your site
- Verify the hidden forms have `netlify` attribute (not `data-netlify="true"`)

### Issue 2: Submissions go to spam
**Cause:** Honeypot field was triggered or suspicious behavior detected

**Fix:**
- Check Netlify Forms → Spam folder
- Mark legitimate submissions as "Not spam"
- Enable reCAPTCHA: Site settings → Forms → Enable reCAPTCHA

### Issue 3: Form redirects but no data saved
**Cause:** Form field names don't match between hidden form and actual form

**Fix:**
- Verify field names match EXACTLY:
  - `name="name"` ✓
  - `name="email"` ✓
  - `name="subject"` ✓
  - `name="message"` ✓
  - `name="bot-field"` ✓

### Issue 4: Forms work locally but not in production
**Cause:** Netlify Forms only work on Netlify hosting, not localhost

**Fix:**
- Test locally using `netlify dev`:
  ```bash
  npm install -g netlify-cli
  netlify dev
  ```
- Or deploy to Netlify and test on live site

## 📋 Pre-Deploy Checklist

Before deploying, verify:

- [ ] Hidden forms in `index.html` (lines 319-337)
- [ ] Actual forms in `/pages/connect.html` have:
  - [ ] `name="contact"` or `name="newsletter"`
  - [ ] `method="POST"`
  - [ ] `data-netlify="true"`
  - [ ] Hidden input: `<input type="hidden" name="form-name" value="contact">`
  - [ ] All form fields have `name` attributes
- [ ] Committed and pushed all changes
- [ ] Deployed to Netlify

## 🧪 Test Submission

After deploying, test with these values:

**Contact Form:**
- Name: `Test Submission`
- Email: `test@example.com`
- Subject: `General Question`
- Message: `This is a test submission to verify Netlify Forms are working.`

Then check Netlify dashboard → Forms → contact → Recent submissions

## 📧 Email Notifications (Optional)

To get email alerts when someone submits:

1. Netlify dashboard → Forms
2. Click **Add notification**
3. Choose **Email notification**
4. Enter your email
5. Select which form(s) to get notified about
6. Save

You'll receive an email for every submission!

## 🆘 Still Not Working?

1. **Check Netlify Status:** https://www.netlifystatus.com
2. **Netlify Support Docs:** https://docs.netlify.com/forms/setup/
3. **Community Forum:** https://answers.netlify.com
4. **Check this repo's Issues:** Look for form-related issues

## 📊 Form Limits

**Free Tier:** 100 submissions/month
**Pro Tier:** 1,000 submissions/month

If you hit the limit, submissions will be blocked. Upgrade or wait until next month.
