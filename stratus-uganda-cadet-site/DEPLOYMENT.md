# Stratus Uganda Cadet Website Deployment

## 1. Upload to GitHub
Create a GitHub repo and upload this folder.

## 2. Deploy on Vercel
Go to Vercel > Add New Project > import GitHub repo > Deploy.

## 3. Connect domain
In Vercel > Project > Settings > Domains, add your domain, for example:
- stratusaviationgroup.com
- apply.stratusaviationgroup.com

Then update DNS at your domain registrar using Vercel's instructions.

## 4. Supabase application database
Create a Supabase project, run `supabase-schema.sql` in SQL Editor.
Add these Vercel environment variables:
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_PASSWORD
- NEXT_PUBLIC_WHATSAPP_NUMBER, e.g. 2567xxxxxxxx

## 5. WhatsApp automatic contact
Basic version: after applicant submits, WhatsApp opens with a pre-filled message to your number.
Advanced version: add WhatsApp Cloud API variables:
- META_WHATSAPP_TOKEN
- META_PHONE_NUMBER_ID
- ADMIN_WHATSAPP_TO

## 6. Admin panel
Visit `/admin` and enter ADMIN_PASSWORD.
