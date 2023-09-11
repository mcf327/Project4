import CreateStoreForm from '../../components/CreateStoreForm/CreateStoreForm';
import { useState, useEffect } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import './VendorDashboard.css';

export default function VendorDashboard({ user }) {
    const [hasCreatedStore, setHasCreatedStore] = useState(false);

    useEffect(function() {
        async function checkVendorObject() {
            try {
                if (user && user._id) { 
                    const response = await vendorsAPI.getAll();
                    const vendorExists = response.some(vendor => vendor.userId === user._id);
                    setHasCreatedStore(vendorExists);
                }
            } catch (error) {
                console.log('Error checking vendor object:', error);
            }
        }
        if (user) {
            checkVendorObject();
        }
    }, [user]);

    return(
        <div>
            <h1>Welcome to Your Vendor Dashboard!</h1>
            {hasCreatedStore ? (
                <p>Your store is already created.</p>
            ) : (
                <CreateStoreForm setHasCreatedStore={setHasCreatedStore} />
            )}
        </div>
    );
}