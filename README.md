# MamaCare - Nursery School Charity Website

A beautiful charity website for a nursery school built with React and JavaScript, featuring a complete authentication system and multiple pages.

## Features

- 🔐 **Authentication System**: Login and Register pages with protected routes
- 🏠 **Home Page**: Dashboard with quick actions and recent updates
- 🌟 **Landing Page**: Attractive landing page with features and statistics
- ℹ️ **About Page**: Information about the organization, mission, vision, and team
- 📧 **Contact Page**: Contact form and information
- 📋 **Projects Page**: Showcase of ongoing initiatives and projects
- 💬 **Testimonials Page**: Reviews and feedback from partners and beneficiaries
- 🎨 **Beautiful Design**: White, blue, and yellow color scheme with modern UI

## Tech Stack

- React 18.2.0
- React Router DOM 6.20.0
- Vite 5.0.8
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
mamacare/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with navigation
│   │   ├── Layout.css
│   │   └── ProtectedRoute.jsx  # Route protection component
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── pages/
│   │   ├── LandingPage.jsx     # Landing page
│   │   ├── HomePage.jsx         # Home/Dashboard page
│   │   ├── AboutPage.jsx        # About page
│   │   ├── ContactPage.jsx      # Contact page
│   │   ├── ProjectsPage.jsx     # Projects page
│   │   ├── TestimonialsPage.jsx # Testimonials page
│   │   ├── LoginPage.jsx        # Login page
│   │   ├── RegisterPage.jsx     # Register page
│   │   └── *.css                # Page-specific styles
│   ├── App.jsx                  # Main app component with routing
│   ├── App.css
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Authentication

The authentication system uses localStorage for demo purposes. In a production environment, you would connect this to a backend API.

### Default Users

You can register a new account through the Register page. The system will store user data in localStorage.

## Color Scheme

- **Primary Blue**: #1e40af
- **Light Blue**: #3b82f6
- **Primary Yellow**: #fbbf24
- **Light Yellow**: #fde68a
- **White**: #ffffff
- **Off White**: #f8fafc

## Pages Overview

1. **Landing Page** (`/`): Public landing page with features and call-to-action
2. **Login** (`/login`): User login page
3. **Register** (`/register`): User registration page
4. **Home** (`/home`): Protected dashboard page (requires login)
5. **About** (`/about`): Information about the organization
6. **Contact** (`/contact`): Contact form and information
7. **Projects** (`/projects`): Showcase of ongoing projects
8. **Testimonials** (`/testimonials`): Reviews and testimonials

## Development

The project uses Vite as the build tool for fast development and hot module replacement.

## License

This project is created for educational purposes.


