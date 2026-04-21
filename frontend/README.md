# Adhrit Technologies Frontend

Modern Next.js frontend for Adhrit Technologies website.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:3000
```

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (#87CEEB)
- **Secondary**: Teal (#0D9488)
- **Background**: White
- **Text**: Deep Blue (#1E3A8A)

### Typography
- **Font**: Inter, Poppins
- **Sizes**: Responsive (mobile-first)
- **Weight**: 300-700

### Components
- Buttons (primary, secondary)
- Cards with hover effects
- Form inputs with validation
- Navigation bar (responsive)
- Section dividers

## 📂 Folder Structure

```
frontend/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Solutions.tsx
│       ├── Technology.tsx
│       ├── Industries.tsx
│       └── Contact.tsx
├── lib/                   # Utilities
├── public/                # Static files
├── tailwind.config.js     # Tailwind config
├── tsconfig.json          # TypeScript config
└── next.config.js         # Next.js config
```

## 🎯 Sections

### Hero
- Large headline with gradient text
- Description
- CTA buttons
- Company stats

### About
- Mission, vision, commitment
- Why choose Adhrit
- 10+ years experience

### Services
- 6 service cards
- Icon + description
- Hover animations

### Solutions
- 5 solution cards
- Metrics display
- Real-world results

### Technology
- Partner logos/cards
- Technology stack
- Integration capabilities

### Industries
- 4 industry cards
- Target sectors
- Use cases

### Contact
- Contact form
- Input validation
- Success/error messages
- Contact information

## 🔧 Configuration

### Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### Tailwind CSS
Configured in `tailwind.config.js`:
- Custom colors
- Font families
- Animation keyframes

### Next.js Config
`next.config.js` includes:
- Image optimization
- Environment variables
- Security headers

## 🎨 Styling

### Tailwind CSS Classes

**Custom Components**:
```css
.btn-primary        /* Primary button */
.btn-secondary      /* Secondary button */
.card               /* Card component */
.section-padding    /* Section spacing */
.section-title      /* Section heading */
.gradient-divider   /* Gradient line */
```

### Animations

**Framer Motion**:
- Fade in: `initial={{ opacity: 0 }}`
- Slide up: `initial={{ y: 20 }}`
- Scale: `whileHover={{ scale: 1.05 }}`

## 🔗 API Integration

### Contact Form

```javascript
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

await axios.post(`${apiUrl}/contact`, {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+91 9876543210',
  company: 'XYZ Corp',
  message: 'Message content'
});
```

### Fetching Services

```javascript
const response = await axios.get(`${apiUrl}/services`);
const services = response.data;
```

## 📱 Responsive Design

- **Mobile**: <640px
- **Tablet**: 640px - 1024px
- **Desktop**: >1024px

All components use Tailwind's responsive prefixes:
```jsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive text
</div>
```

## ⚡ Performance

- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Vercel CDN
- **CSS**: Tailwind CSS with PurgeCSS
- **JavaScript**: Minified in production
- **Static Generation**: Homepage generated at build time

## 🔐 Security

- XSS Protection (React)
- CSRF Prevention
- Input Validation (React Hook Form)
- Secure headers (Vercel)
- Environment variable secrets

## 🧪 Testing (Optional)

```bash
# Setup Jest
npm install --save-dev jest @testing-library/react

# Run tests
npm test
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "next": "^14.0.0",
  "tailwindcss": "^3.3.5",
  "framer-motion": "^10.16.4",
  "lucide-react": "^0.263.1",
  "react-hook-form": "^7.48.0",
  "axios": "^1.6.0"
}
```

## 🚀 Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### Environment Variables on Vercel

1. Go to Project Settings
2. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend API URL

## 🛠️ Development Tips

### Hot Reload
Changes are auto-loaded during development.

### Debugging
```javascript
// Next.js specific
console.log(process.env.NEXT_PUBLIC_API_URL);

// React DevTools
// Install React Developer Tools extension
```

### Page Route
- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/my-post`

## 📚 Components Guide

### Navbar
```jsx
<Navbar />
```
- Fixed header
- Responsive menu
- Scroll detection

### Hero
```jsx
<Hero />
```
- Full-screen section
- Animated background
- CTA buttons

### Contact Form
```jsx
<Contact />
```
- Form validation
- Error handling
- API integration

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill port 3000
lsof -ti :3000 | xargs kill -9
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Check Node version
node --version  # Should be 18+

# Rebuild
npm run build
```

### Styling Issues
```bash
# Rebuild Tailwind
npm run build
npm run dev
```

## 📈 SEO

- Meta tags in `app/layout.tsx`
- Open Graph tags
- Robots.txt (create if needed)
- Sitemap (create if needed)

## 🔄 Future Enhancements

- [ ] Blog section
- [ ] Case studies
- [ ] Team members page
- [ ] Search functionality
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Newsletter signup
- [ ] User authentication
- [ ] Admin dashboard

## 📞 Support

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

**Version**: 1.0.0  
**Node**: 18+  
**Status**: Production Ready
