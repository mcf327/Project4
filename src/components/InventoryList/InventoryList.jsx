import { useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import CustomItemForm from '../CustomItemForm/CustomItemForm';
import './InventoryList.css'

export default function InventoryList({ inventory, removefromInventory, changeInventoryQty, changeInventoryMin, addCustomItem }) {
    const [showCustomItemForm, setShowCustomItemForm] = useState(false);

    function toggleCustomItemForm() {
        setShowCustomItemForm(!showCustomItemForm);
    }

    return (
        <div>
            {showCustomItemForm ? (
                <>
                    <CustomItemForm 
                        addCustomItem={addCustomItem}
                        showCustomItemForm={showCustomItemForm}
                        setShowCustomItemForm={setShowCustomItemForm}
                    />
                    <button onClick={toggleCustomItemForm}>Back</button>
                </>
            ) : (
                <>
                {inventory && inventory.inventoryItems && inventory.inventoryItems.length > 0 ? (
                    <div className="inventory-item-container">
                    {inventory.inventoryItems.map((inventoryItem) => (
                        <InventoryItem
                            key={inventoryItem._id}
                            inventoryItem={inventoryItem}
                            removefromInventory={removefromInventory}
                            changeInventoryQty={changeInventoryQty}
                            changeInventoryMin={changeInventoryMin}
                        />
                    ))}
                    </div>
                ) : (
                    <p>Your inventory is empty.</p>
                )}
                <button className="add-custom-item-button" onClick={toggleCustomItemForm}>
                    Add Custom Item
                </button>
                </>
            )}
        </div>
    );
}