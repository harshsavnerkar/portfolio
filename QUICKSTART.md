# 🚀 Quick Start Guide

## Running Your Portfolio Locally

### Step 1: Install Dependencies

If you haven't already installed dependencies:

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: View Your Website

Open your browser and navigate to:
**http://localhost:3000**

---

## 🎨 Customization Guide

### 1. Update Personal Information

Open `src/utils/constants.ts` and modify:

```typescript
export const personalInfo = {
  name: "Harsh Savnerkar", // Your name
  title: "Student / Developer", // Your title
  bio: "Your bio here...", // Your biography
  email: "your@email.com", // Your email
  location: "Your Location", // Your location
};
```

### 2. Update Skills

In `src/utils/constants.ts`:

```typescript
export const skills: Record<string, Skill[]> = {
  Frontend: [
    { name: "HTML/CSS", level: 85 }, // Adjust percentage
    { name: "JavaScript", level: 80 },
    // Add or remove skills
  ],
  // ... more categories
};
```

### 3. Update Projects

In `src/utils/constants.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Description here...",
    image: "URL to image",
    techStack: ["React", "Node.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-project",
  },
  // Add more projects
];
```

### 4. Update Experience

In `src/utils/constants.ts`:

```typescript
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Your Degree/Role",
    organization: "University/Company",
    date: "2022 - Present",
    description: "Description...",
    type: "education" | "work",
  },
];
```

### 5. Update Social Links

In `src/utils/constants.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: "linkedin",
  },
  // Add more social links
];
```

---

## 🎨 Changing Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  neon: {
    blue: '#00f3ff',    // Change to your preferred accent color
    purple: '#bc13fe',  // Change to your preferred accent color
  },
}
```

---

## 📦 Building for Production

### Build Command

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts and your site will be live!

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

---

## 🔧 Troubleshooting

### Port 3000 Already in Use

If port 3000 is busy, Next.js will automatically use port 3001

### Module Not Found Errors

Run `npm install` again to ensure all dependencies are installed

### TypeScript Errors

Make sure all files have proper TypeScript types defined

### Three.js Not Loading

Ensure you have WebGL enabled in your browser

---

## 📱 Testing Responsiveness

Test your portfolio on different screen sizes:

- Mobile: 320px - 640px
- Tablet: 640px - 1024px
- Desktop: 1024px+

Use browser DevTools to simulate different devices.

---

## ✨ Features You Can Customize

1. **Typing Speed** - Edit delay values in `Hero.tsx`
2. **Animation Duration** - Modify transition values in components
3. **3D Shapes** - Add/remove shapes in `InteractiveShapes.tsx`
4. **Scroll Speed** - Adjust CSS `scroll-behavior` in `globals.css`
5. **Form Validation** - Customize in `Contact.tsx`

---

## 🎯 Tips for Best Performance

1. Optimize images before adding them
2. Keep animations smooth (60fps)
3. Minimize bundle size
4. Use production build for deployment
5. Enable gzip compression on hosting

---

## 📝 Need Help?

- Check the main README.md for detailed documentation
- Review Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

---

Happy coding! 🚀
