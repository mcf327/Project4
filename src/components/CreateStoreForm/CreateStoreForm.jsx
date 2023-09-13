import { useState } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import './CreateStoreForm.css';

export default function CreateStoreForm({ setHasCreatedStore, setStoreData, user }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(evt) {
        evt.preventDefault();
        const vendorData = {
            name,
            description,
            address,
            phone,
            contactEmail
        };

        try {
            await vendorsAPI.createVendor(vendorData);
            const updatedStoreData = await vendorsAPI.getStoreByUserId(user._id);
            setStoreData(updatedStoreData);
            setHasCreatedStore(true);
        } catch (error) {
            console.log('error creating store: ', error);
            setError('An error occurred. Please try again later.');
        }
    }


    return (
      <div className="create-store-box">
        <div className="create-store-form">
          <h2>Create Your Store</h2>
          {error && <p className="error-message">{error}</p>}
          <form autoComplete="off" onSubmit={handleSubmit}>
            
            <label>Store Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
      </div>
      );
}