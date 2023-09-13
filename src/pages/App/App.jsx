import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import VendorsPage from '../VendorsPage/VendorsPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import VendorDashboard from '../../pages/VendorDashboard/VendorDashboard';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
            {user ? (
                <>
                    <NavBar user={user} setUser={setUser} />
                    {user.userType === 'vendor' ? (
                        <VendorDashboard user={user} />
                    ) : (
                        <>
                            <Routes>
                                <Route path="/orders/new" element={<VendorsPage />} />
                                <Route path="/orders" element={<OrderHistoryPage />} />
                            </Routes>
                        </>
                    )}
                </>
            ) : (
                <AuthPage setUser={setUser} />
            )}
        </main>
  );
}
