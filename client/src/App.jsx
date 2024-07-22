import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { UserProvider } from './contexts/UserContext'; // Correct import
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';

const Home = React.lazy(() => import('./pages/index'));
const ProtectedPage = React.lazy(() => import('./pages/protected'));
const PrivacyPolicy = React.lazy(() => import('./pages/privacy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));

const App = () => {
  return (
    <UserProvider>
      <Suspense fallback={<div className="loading-screen">Loading...</div>}>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="/home" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="/privacy" element={<ErrorBoundary><PrivacyPolicy /></ErrorBoundary>} />
          <Route path="/terms" element={<ErrorBoundary><TermsOfService /></ErrorBoundary>} />
          <Route
            path="/protected"
            element={<ErrorBoundary><ProtectedPage /></ErrorBoundary>}
          />
        </Routes>
      </Suspense>
    </UserProvider>
  );
}

export default App;
