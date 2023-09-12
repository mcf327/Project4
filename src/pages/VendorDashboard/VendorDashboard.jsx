import CreateStoreForm from '../../components/CreateStoreForm/CreateStoreForm';
import StoreInfoCard from '../../components/StoreInfoCard/StoreInfoCard';
import StoreItemList from '../../components/StoreItemList/StoreItemList';
import { useState, useEffect } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import './VendorDashboard.css';

export default function VendorDashboard({ user }) {
    const [hasCreatedStore, setHasCreatedStore] = useState(false);
    const [storeData, setStoreData] = useState(null);

    useEffect(function() {
        async function checkVendorObject() {
            try {
                if (user && user._id) { 
                    const response = await vendorsAPI.getAll();
                    const vendorExists = response.some(vendor => vendor.userId === user._id);
                    setHasCreatedStore(vendorExists);

                    if (vendorExists) {
                        const storeResponse = await vendorsAPI.getStoreByUserId(user._id);
                        setStoreData(storeResponse); 
                    }
                }
            } catch (error) {
                console.log('Error checking vendor object:', error);
            }
        }
        if (user) {
            checkVendorObject();
        }
    }, [user]);

    async function saveStoreData(updatedData) {
        try {
            await vendorsAPI.updateStoreInfo(user._id, updatedData);
            const updatedStoreData = await vendorsAPI.getStoreByUserId(user._id);
            setStoreData(updatedStoreData);
        } catch (error) {
            console.log('error saving store data: ', error);
        }
    }

    return (
        <div>
            <h3>Welcome to Your Vendor Dashboard!</h3>
            {hasCreatedStore && storeData ? (
                <div className="vendor-dashboard">
                    <StoreInfoCard storeData={storeData} onSave={saveStoreData} />
                    <StoreItemList storeData={storeData} />
                </div>
            ) : (
                <CreateStoreForm 
                    setHasCreatedStore={setHasCreatedStore}
                    setStoreData={setStoreData}
                    user={user}
                />
            )}
        </div>
    );
}