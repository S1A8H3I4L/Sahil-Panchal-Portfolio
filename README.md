# Sahil Portfolio

This is my personal portfolio website, built with Next.js 13, TypeScript, Tailwind CSS, and Shadcn UI. It includes a contact form powered by Nodemailer for sending emails.

## 🚀 Features

- Built with **Next.js 13 App Router**
- **TypeScript** for static typing
- **Tailwind CSS** for fast styling
- **Shadcn UI** for reusable, modern components
- **Lucide-react** icons
- Responsive and accessible
- Contact form with **Nodemailer** integration
- Animations and glassmorphism design

- ---

## 📁 Project Structure

/
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── api/
│ │ └── contact/route.ts
│ ├── components/
│ │ └── ui/
│ │ ├── button.tsx
│ │ └── floating-label-input.tsx
│ └── section-wrapper.tsx
├── public/
│ └── favicon.ico
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
└── .env.local

---

## ⚙️ Technologies Used

- **Next.js 13** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**
- **Lucide-react** icons
- **Nodemailer**
- **PostCSS**

---

## 🛠️ Getting Started

Install dependencies
  -> npm install
  -> Configure environment variables
      - Create a .env.local file in the project root:
          SMTP_USER=your_gmail_account@gmail.com
          SMTP_PASS=your_google_app_password
      ⚠️ Make sure you use a Google App Password instead of your regular Gmail password, with 2-Step Verification enabled.
  -> Run the development server
      - npm run dev
  -> Open in your browser
      - http://localhost:3000

---
      
Contact Form
  -> The contact form uses Nodemailer to send emails through your Gmail SMTP configuration.
      - Be sure to:
          enable 2-Step Verification on your Gmail
          generate a secure App Password
          store it in .env.local
          so messages are sent reliably.

---

Contributing
  -> **Contributions are welcome!**
      - Feel free to fork, submit pull requests, or open issues for improvements.

License
  -> This project is licensed under the MIT License.


Built with ❤️ by Sahil Panchal

---

✅ You can copy **all of the above**  
→ save it as `README.md`  
→ push to GitHub  
→ and it will look **perfect** on your repository.

If you want, just share your final GitHub link — I can check it for you as well! 🚀
