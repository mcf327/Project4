import { useState } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import './CreateStoreForm.css';

export default function CreateStoreForm() {
    const [storeName, setStoreName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        const vendorData = {
            storeName,
            description,
            address,
            phone,
            contactEmail
        };

        try {
            await vendorsAPI.createVendor(vendorData);
        } catch (error) {
            console.log('error creating store: ', error);
            setError('An error occurred. Please try again later.');
        }
    }


    return (
        <div>
          <h2>Create Your Store</h2>
          {error && <p className="error-message">{error}</p>}
          <form autoComplete="off" onSubmit={handleSubmit}>
            
            <label>Store Name</label>
            <input
              type="text"
              name="storeName"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              required
            />

            <label>Description</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label>Contact Email</label>
            <input
              type="text"
              name="contactEmail"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />

            <button type="submit">Create Store</button>
          </form>
        </div>
      );
}