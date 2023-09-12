import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import VendorRegistrationForm from '../../components/VendorRegistrationForm/VendorRegistrationForm';
import { useState } from 'react';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    const [showVendorRegistration, setShowVendorRegistration] = useState(false);

  return (
    <main>
            <h1>Welcome to StockBuddy</h1>
            {/* Conditionally render based on showLogin and showVendorRegistration */}
            {showLogin && !showVendorRegistration ? (
                <LoginForm setUser={setUser} />
            ) : showVendorRegistration ? (
                <VendorRegistrationForm setUser={setUser} />
            ) : (
                <SignUpForm setUser={setUser} />
            )}
            <button onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'Sign Up' : 'Log In'}
            </button>

            <button onClick={() => setShowVendorRegistration(!showVendorRegistration)}>
                Sign Up As Vendor
            </button>
        </main>
  );
}