# Netlify Forms Setup

Both the contact form and newsletter form are configured to work with Netlify Forms - a built-in, free form handling service.

## ✅ What's Configured

**Two Forms:**
1. **Contact Form** (`/pages/connect.html#booking-form`)
   - Fields: Name, Email, Subject, Message
   - Use: Booking inquiries, press questions, general contact

2. **Newsletter Form** (`/pages/connect.html#newsletter`)
   - Field: Email
   - Use: Newsletter signups

## How It Works

When deployed to Netlify, the forms automatically:
- ✓ Capture form submissions
- ✓ Prevent spam with honeypot fields
- ✓ Store submissions in Netlify dashboard
- ✓ Can trigger email notifications
- ✓ Can integrate with Zapier, webhooks, etc.

## Accessing Form Submissions

**After deploying to Netlify:**

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site: `rootwater-collective`
3. Go to **Forms** in the left sidebar
4. You'll see two forms:
   - `contact`
   - `newsletter`
5. Click on either to view submissions

## Email Notifications

To get email notifications when someone submits a form:

1. In Netlify dashboard → Forms → Form notifications
2. Click "Add notification"
3. Choose "Email notification"
4. Enter your email address
5. Select which form(s) to get notified about

## Spam Prevention

Both forms include:
- **Honeypot fields** - Hidden fields that bots fill out
- **reCAPTCHA** (optional) - Can be enabled in Netlify settings

To enable reCAPTCHA:
1. Netlify dashboard → Site settings → Forms
2. Enable reCAPTCHA
3. Forms will automatically show reCAPTCHA when suspicious activity is detected

## Export Submissions

You can export form data as CSV:
1. Netlify dashboard → Forms
2. Select a form
3. Click "Download CSV"

## Integrations

Netlify Forms can trigger:
- **Zapier** - Auto-add to Google Sheets, Mailchimp, etc.
- **Webhooks** - Send to your own API endpoint
- **Slack** - Get notifications in Slack
- **Email** - Send to multiple addresses

## Testing Locally

When testing locally (`http://localhost:8000`), the forms won't submit to Netlify. To test:

**Option 1:** Deploy to Netlify and test on live site

**Option 2:** Use Netlify Dev
```bash
npm install -g netlify-cli
netlify dev
```
Then visit the local URL provided by Netlify Dev.

## Form Limits (Free Tier)

- **100 submissions/month** on free tier
- **1000 submissions/month** on Pro tier
- Unlimited on Business/Enterprise

If you exceed limits, submissions will be blocked. Upgrade or use a different service.

## Troubleshooting

**Forms not appearing in Netlify dashboard?**
- Make sure you've deployed the site with the updated HTML
- Forms must have `data-netlify="true"` attribute
- Forms must have a unique `name` attribute
- The hidden `form-name` input must match the form name

**Submissions not working?**
- Check Netlify deploy logs for errors
- Make sure form has `method="POST"`
- Verify honeypot field names are unique per form

**Spam issues?**
- Enable reCAPTCHA in Netlify settings
- Review submissions regularly
- Use email filters

## Alternative: Custom Backend

If you prefer not to use Netlify Forms, you can:

1. **Formspree** - https://formspree.io (free tier available)
2. **EmailJS** - https://www.emailjs.com (client-side, no backend)
3. **Custom serverless function** - Write your own handler in `/netlify/functions/`

To switch, update the `action` and `method` attributes in the forms.
