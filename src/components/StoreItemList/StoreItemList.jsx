import { useState } from 'react';
import './StoreItemList.css';

export default function StoreItemList({ storeData }) {
    // Ensure that storeData is not null or undefined before accessing its properties
    const items = storeData?.items || [];
  
    const [newItem, setNewItem] = useState('');
  
    function handleAddItemClick() {
    }
  
    function handleDeleteItemClick(itemId) {
    }
  
    return (
      <div className="store-item-list">
        <h2>Store Items</h2>
        <ul>
          {items.map(item => (
            <li key={item._id}>
              {item.name}
              <button onClick={() => handleDeleteItemClick(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="add-item">
          <input
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <button onClick={handleAddItemClick}>Add</button>
        </div>
      </div>
    );
  }