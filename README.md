# Mike Veit - Portfolio Website

A modern, responsive portfolio website showcasing my software engineering projects and experience. Built with React, TypeScript, and Chakra UI with an Apple-inspired dark theme.

🌐 **Live Site**: [Your deployed URL here]

## ✨ Features

- **Modern Design**: Clean, Apple-inspired dark theme with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Contact Form**: Real email delivery using EmailJS
- **Project Showcase**: Featured projects with logos, tech stacks, and live links
- **Professional Experience**: Detailed work history and technical skills
- **Fast Loading**: Built with Vite for optimal performance
- **Accessible**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Framework**: Chakra UI v3
- **Routing**: React Router v6
- **Styling**: CSS-in-JS with Chakra UI
- **Icons**: React Icons (Font Awesome, etc.)
- **Email Service**: EmailJS
- **Deployment**: [Vercel/Netlify/etc.]

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mikeveit1/mike-portfolio.git
   cd mike-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your EmailJS credentials to `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:5173](http://localhost:5173)

## 📧 Contact Form Setup

The contact form uses EmailJS for email delivery. To set it up:

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.tsx     # Navigation component
│   └── ProjectCard.tsx # Project showcase cards
├── pages/             # Main page components
│   ├── Home.tsx       # Landing page with intro
│   ├── Projects.tsx   # Featured projects
│   ├── Experience.tsx # Work history & skills
│   └── Contact.tsx    # Contact form & info
├── theme/             # Chakra UI theme configuration
│   └── index.ts       # Custom theme setup
└── main.tsx           # App entry point
```

You might also want to create a `.env.example` file:

```env:.env.example
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

This README gives potential employers/collaborators everything they need to understand your project and run it locally!

## 🎨 Design System

- **Color Palette**: Apple-inspired blacks, grays, and accent blues
- **Typography**: System fonts with careful spacing and hierarchy
- **Components**: Consistent rounded corners, subtle shadows, hover effects
- **Layout**: Mobile-first responsive design with clean spacing
- **Animations**: Smooth fade-ins and micro-interactions

## 📱 Featured Projects

- **ClipAI**: AI-powered video editing platform
- **MacroTrack**: iOS nutrition tracking app
- **CaptureNoire**: Inclusive photo editing app

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

**Environment Variables**: Don't forget to add your EmailJS variables to your hosting platform!

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome! Feel free to:
- Open an issue for bugs or suggestions
- Submit a PR for improvements
- Use this as inspiration for your own portfolio

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 📞 Contact

- **Email**: [mikeveit1@gmail.com](mailto:mikeveit1@gmail.com)
- **Phone**: 732-425-9446
- **GitHub**: [@mikeveit1](https://github.com/mikeveit1)

---

Built with ❤️ by Mike Veit