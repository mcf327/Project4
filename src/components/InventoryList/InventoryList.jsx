import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryList.css'

export default function InventoryList({ inventory, removefromInventory, changeInventoryQty, changeInventoryMin }) {
    return (
        <div>
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
        </div>
    );
}