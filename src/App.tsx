import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LoginForm } from './components/auth/LoginForm';
import { Layout } from './components/layout/Layout';
import { PublicLayout } from './components/layout/PublicLayout';
import { ClinicDetail } from './pages/ClinicDetail';
import { Home } from './pages/Home';
import { Clinics } from './pages/Clinics';
import { Dashboard } from './pages/Dashboard';
import { Patients } from './pages/Patients';
import { Appointments } from './pages/Appointments';
import { useAuthStore } from './store/authStore';

function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          } />
          <Route path="/clinics" element={
            <PublicLayout>
              <Clinics />
            </PublicLayout>
          } />
          <Route path="/clinic/:id" element={
            <PublicLayout>
              <ClinicDetail />
            </PublicLayout>
          } />
          
          {/* Auth Routes */}
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginForm />
          } />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={
            isAuthenticated ? (
              <Layout>
                <Dashboard />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          } />
          <Route path="/patients" element={
            isAuthenticated ? (
              <Layout>
                <Patients />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          } />
          <Route path="/appointments" element={
            isAuthenticated ? (
              <Layout>
                <Appointments />
              </Layout>
            ) : (
              <Navigate to="/login" replace />
            )
          } />
        </Routes>
      </Router>
      
      <Toaster />
    </>
  );
}

export default App;