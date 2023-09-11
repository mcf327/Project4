import { useState } from 'react';
import './CustomItemForm.css';

export default function CustomItemForm({ addCustomItem, setShowCustomItemForm }) {
    const [customItemData, setCustomItemData] = useState({
        name: '',
        category: '',
        price: 0,
        qty: 0,
        minimumStock: 0,
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setCustomItemData({
            ...customItemData,
            [name]: value,
        });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addCustomItem(customItemData);
        setCustomItemData({
            name: '',
            category: '',
            price: 0,
            qty: 0,
            minimumStock: 0,
        });
        setShowCustomItemForm(false);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                type="text"
                name="name"
                value={customItemData.name}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                type="text"
                name="category"
                value={customItemData.category}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Price:</label>
                <input
                type="number"
                name="price"
                value={customItemData.price}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Quantity:</label>
                <input
                type="number"
                name="qty"
                value={customItemData.qty}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Minimum Stock:</label>
                <input
                type="number"
                name="minimumStock"
                value={customItemData.minimumStock}
                onChange={handleChange}
                required
                />
            </div>
            <button type="submit">Add Custom Item</button>
        </form>
    );
}