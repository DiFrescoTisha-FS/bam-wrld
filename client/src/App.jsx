import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component

const Home = React.lazy(() => import('./pages/index'));
const SignIn = React.lazy(() => import('./pages/signin'));
const ProtectedPage = React.lazy(() => import('./pages/protected')); // Your protected page component

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        <Route path="/home" element={<ErrorBoundary><Home /></ErrorBoundary>} />
        <Route path="/signin" element={<ErrorBoundary><SignIn /></ErrorBoundary>} />

        {/* Protected Route */}
        <Route
          path="/protected"
          element={
            <SignedIn>
              <ErrorBoundary><ProtectedPage /></ErrorBoundary>
            </SignedIn>
          }
        />
        <Route
          path="/protected"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
