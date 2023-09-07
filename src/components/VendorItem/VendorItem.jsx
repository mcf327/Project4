import './VendorItem.css';

export default function VendorItem({ item, addToInventory, addToCart }) {
    return (
        <div className="vendor-item">
            <p><strong>{item.name}</strong></p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToInventory(item)}>Add to Inventory</button>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
}