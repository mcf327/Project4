import VendorItem from '../VendorItem/VendorItem';
import './ItemList.css';

export default function ItemList({ items, addToInventory, addToCart }) {
    return (
        <div className="item-list">
            {items.map((item) => (
                <VendorItem 
                    key={item._id} 
                    item={item}
                    addToInventory={addToInventory}
                    addToCart={addToCart} 
                />
            ))}
        </div>
    );
}