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
                    <p><strong>Store Name: </strong>{storeData.name}</p>
                    <p><strong>Description: </strong>{storeData.description}</p>
                    <p><strong>Address: </strong>{storeData.address}</p>
                    <p><strong>Phone: </strong>{storeData.phone}</p>
                    <p><strong>Contact Email: </strong>{storeData.contactEmail}</p>
                    <button onClick={handleEditClick}>Edit</button>
                </>
            )}
        </div>
    );
}