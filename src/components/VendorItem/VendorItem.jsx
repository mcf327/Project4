import './VendorItem.css';

export default function VendorItem({ item, addToInventory, addToCart }) {
    return (
        <div className="vendor-item">
            <p><strong>{item.name}</strong></p>
            <p>${item.price.toFixed(2)}</p>
            <button className="btn-xs" onClick={() => addToInventory(item._id)}>Add to Inventory</button>
            <button className="btn-xs" onClick={() => addToCart(item._id)}>Add to Cart</button>
        </div>
    );
}