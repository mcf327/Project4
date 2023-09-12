import { useState } from 'react';

export default function NewItemForm({ addItem }) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');

    const handleAddItemClick = () => {
        addItem({ 
            name: name,
            category: category,
            price: parseFloat(price)
        });
        setName('');
        setCategory('');
        setPrice('');
    }
    return (
        <div className="new-item-form">
            <h2>Add a New Item</h2>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button onClick={handleAddItemClick}>Add</button>
        </div>
        );
    }
