import { useState } from 'react';
import './EditStoreInfoForm.css';

export default function EditStoreInfoForm ({ initialData, onSave, onCancel }) {
    const [formData, setFormData] = useState({ ...initialData });
  
    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
  
    const handleSave = () => {
        onSave(formData);
    }
  
    const handleCancel = () => {
        onCancel();
    };
  
    return (
        <div>
            <h3>Edit Store Info:</h3>
            <form className="edit-info-form">
                <div>
                    <label htmlFor="storeName">Store Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="contactEmail">Contact Email:</label>
                    <input
                    type="text"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    />
                </div>
            </form>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
  }