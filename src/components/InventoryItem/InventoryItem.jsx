import './InventoryItem.css';

export default function InventoryItem({ inventoryItem, removefromInventory }) {
    return(
        <div className="inventory-item">
            {inventoryItem.item.name} &nbsp;
            ${inventoryItem.item.price.toFixed(2)} &nbsp; 
            On Hand: {inventoryItem.qty}
            <button onClick={() => removefromInventory(inventoryItem.item._id)}>X</button>
        </div>
    );
}