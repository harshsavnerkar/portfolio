# 🚀 Modern Developer Portfolio - Harsh Savnerkar

A stunning, highly interactive personal portfolio website built with cutting-edge technologies.

![Portfolio Preview](https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200)

## ✨ Features

### Design & UX

- 🎨 **Dark Theme** with neon blue/purple gradient accents
- 💎 **Glassmorphism** UI elements with soft shadows
- 🌟 **Smooth Animations** powered by Framer Motion
- 🎯 **Interactive 3D Elements** using Three.js and React Three Fiber
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- 🖱️ **Custom Cursor** with glow effect
- ⚡ **Micro-interactions** throughout the experience

### Sections

1. **Hero Section** - Full-screen landing with animated typing effect
2. **About Me** - Bio, profile image, and highlight cards
3. **Skills** - Interactive skill cards with progress bars
4. **Projects** - Project showcase with hover effects
5. **Experience** - Timeline layout for education/work
6. **Contact** - Form with validation and social links
7. **Footer** - Minimal footer with back-to-top button

### Technical Features

- ✅ Next.js 14 App Router architecture
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ SEO optimized with metadata
- ✅ Performance optimized
- ✅ Accessibility best practices
- ✅ Smooth scroll navigation
- ✅ Active section highlighting
- ✅ Mobile hamburger menu
- ✅ Form validation

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Elements:** [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Icons:** SVG icons

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── GlassCard.tsx
│   ├── three/              # Three.js 3D components
│   │   ├── FloatingShape.tsx
│   │   └── InteractiveShapes.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── layout/
│       ├── Navbar.tsx
│       └── CursorGlow.tsx
├── hooks/
│   ├── useScrollPosition.ts
│   └── useActiveSection.ts
├── utils/
│   └── constants.ts        # Portfolio data and content
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone or navigate to the project directory**

   ```bash
   cd E-Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Information

Edit `src/utils/constants.ts` to update:

- Name and title
- Bio and description
- Skills and proficiency levels
- Projects
- Experience/Education
- Social media links
- Email address

### Change Color Scheme

Modify `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      neon: {
        blue: '#00f3ff',  // Change to your preferred color
        purple: '#bc13fe', // Change to your preferred color
      },
    },
  },
}
```

### Modify 3D Elements

Edit `src/components/three/InteractiveShapes.tsx` to:

- Add/remove geometric shapes
- Change colors and sizes
- Adjust animation speeds
- Modify interaction behavior

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🎯 Key Features Explained

### Typing Animation

The hero section features a dynamic typing effect that cycles through different roles.

### Scroll Animations

All sections fade in smoothly as you scroll using Framer Motion's `whileInView`.

### 3D Interactive Background

Geometric shapes float and rotate in the hero section, responding to mouse hover.

### Cursor Glow

A custom cursor follows your mouse with a glowing trail effect.

### Smooth Scrolling

Click on nav links to smoothly scroll to sections.

### Form Validation

Contact form validates inputs before submission.

## 🔧 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint               |

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Deploy to Other Platforms

```bash
npm run build
npm start
```

## 📊 Performance

This portfolio is optimized for:

- ⚡ Fast loading times
- 🎯 Lighthouse score 90+
- ♿ Accessibility
- 📱 Mobile-first design
- 🔍 SEO best practices

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Harsh Savnerkar**

- Portfolio: [harshsavnerkar.com](https://harshsavnerkar.com)
- GitHub: [@harshsavnerkar](https://github.com/harshsavnerkar)
- LinkedIn: [Harsh Savnerkar](https://linkedin.com/in/harshsavnerkar)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer](https://www.framer.com/) for motion animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) community

---

Made with ❤️ by Harsh Savnerkar
