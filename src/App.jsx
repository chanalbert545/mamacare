import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import FloatingButton from './components/FloatingButton';
import Layout from './components/Layout';
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ClassesPage = lazy(() => import('./pages/ClassesPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const UploadPage = lazy(() => import('./pages/UploadPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));

function App() {
  const withLayout = (PageComponent) => (
    <Layout>
      <PageComponent />
      <FloatingButton />
    </Layout>
  );

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="page-loading">Loading…</div>}>
          <Routes>
            <Route path="/" element={withLayout(LandingPage)} />
            <Route path="/home" element={withLayout(HomePage)} />
            <Route path="/login" element={withLayout(LoginPage)} />
            <Route path="/register" element={withLayout(RegisterPage)} />
            <Route path="/about" element={withLayout(AboutPage)} />
            <Route
              path="/upload"
              element={
                <ProtectedRoute>
                  {withLayout(UploadPage)}
                </ProtectedRoute>
              }
            />
            <Route path="/services" element={withLayout(ServicesPage)} />
            <Route path="/classes" element={withLayout(ClassesPage)} />
            <Route path="/team" element={withLayout(TeamPage)} />
            <Route path="/gallery" element={withLayout(GalleryPage)} />
            <Route path="/contact" element={withLayout(ContactPage)} />
            <Route path="/projects" element={withLayout(ProjectsPage)} />
            <Route path="/testimonials" element={withLayout(TestimonialsPage)} />
            <Route path="/donate" element={withLayout(DonatePage)} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  )
}

export default App
