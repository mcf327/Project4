import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import VendorRegistrationForm from '../../components/VendorRegistrationForm/VendorRegistrationForm';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    const [showVendorRegistration, setShowVendorRegistration] = useState(false);

  return (
    <main>
        <h1>AuthPage</h1>
        {showLogin ? (
            <LoginForm setUser={setUser} />
        ) : (
            <SignUpForm setUser={setUser} />
        )}
        <button onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? 'Sign Up' : 'Log In'}
        </button>

        <button onClick={() => setShowVendorRegistration(!showVendorRegistration)}>
                Vendors, click here to register!
        </button>

            {/* Conditionally render the VendorRegistrationForm */}
            {showVendorRegistration && (
                <VendorRegistrationForm setUser={setUser} />
            )}
    </main>
  );
}