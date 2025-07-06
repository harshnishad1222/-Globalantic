# Crafted Web Frontend

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Deployment Instructions for Render

### Prerequisites
- Node.js 18+ 
- npm 8+

### Deploy to Render

1. **Connect Repository**: Connect your GitHub repository to Render
2. **Service Type**: Select "Web Service"
3. **Build Command**: `npm install && npm run build`
4. **Start Command**: `npm run start`
5. **Environment**: Node
6. **Plan**: Free (or your preferred plan)

### Environment Variables
Set these in Render dashboard:
- `NODE_ENV=production`
- `VITE_API_URL=https://your-api-url.com`

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Features
- ✅ React 18 with TypeScript
- ✅ Vite for fast development
- ✅ Tailwind CSS for styling
- ✅ Radix UI components
- ✅ React Router for navigation
- ✅ Formspree contact form
- ✅ Custom robot cursor
- ✅ Responsive design
- ✅ Production optimized

### Build Output
- Build files are generated in `dist/` directory
- Optimized for production deployment
- Code splitting and minification enabled