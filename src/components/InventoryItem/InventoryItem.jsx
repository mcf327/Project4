import { useState } from 'react';
import './InventoryItem.css';

export default function InventoryItem({ inventoryItem, removefromInventory, changeInventoryQty, changeInventoryMin }) {
    const [isEditingStock, setIsEditingStock] = useState(false);
    const [isEditingMin, setIsEditingMin] = useState(false);
    const [newQty, setNewQty] = useState(inventoryItem.qty);
    const [newMin, setNewMin] = useState(inventoryItem.minimumStock);

    function handleEditStockClick() {
        setIsEditingStock(true);
    }

    function handleEditMinClick() {
        setIsEditingMin(true);
    }

    function handleStockInputChange(evt) {
        setNewQty(evt.target.value);
    }

    function handleMinInputChange(evt) {
        setNewMin(evt.target.value);
    }

    function handleStockInputBlur() {
        setIsEditingStock(false);
        changeInventoryQty(inventoryItem.item._id, newQty);
    }

    function handleMinInputBlur() {
        setIsEditingMin(false);
        changeInventoryMin(inventoryItem.item._id, newMin);
    }

    return (
        <div className="inventory-item">
            {inventoryItem.item.name} &nbsp;
            On Hand:&nbsp;
            {isEditingStock ? (
                <input
                    type="number"
                    value={newQty}
                    onChange={handleStockInputChange}
                    onBlur={handleStockInputBlur}
                    autoFocus
                />
            ) : (
                <span onClick={handleEditStockClick}>{inventoryItem.qty} &nbsp;</span> 
            )}
            Min:&nbsp;
            {isEditingMin ? (
                <input
                    type="number"
                    value={newMin}
                    onChange={handleMinInputChange}
                    onBlur={handleMinInputBlur}
                    autoFocus
                />
            ) : (
                <span onClick={handleEditMinClick}>{inventoryItem.minimumStock} &nbsp;</span> 
            )}
            <button className="btn-sm" onClick={() => removefromInventory(inventoryItem.item._id)}>X</button>
        </div>
    );
}