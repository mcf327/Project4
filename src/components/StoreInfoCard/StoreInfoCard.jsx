import { useState } from 'react';
import EditStoreInfoForm from '../EditStoreInfoForm/EditStoreInfoForm';
import './StoreInfoCard.css';

export default function StoreInfoCard({ storeData, onSave }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }

    function handleSaveClick(formData) {
        onSave(formData);
        setIsEditing(false);
      }

    function handleCancelClick() {
        setIsEditing(false);
    }


    return (
        <div className="store-info-card">
            {isEditing ? (
                <EditStoreInfoForm 
                    initialData={storeData}
                    onSave={handleSaveClick}
                    onCancel={handleCancelClick}
                />
            ) : (
                <>
                    <h2>Your Store Info:</h2>
                    <p>Store Name: {storeData.name}</p>
                    <p>Description: {storeData.description}</p>
                    <p>Address: {storeData.address}</p>
                    <p>Phone: {storeData.phone}</p>
                    <p>Contact Email: {storeData.contactEmail}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </>
            )}
        </div>
    );
}