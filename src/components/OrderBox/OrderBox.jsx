import InventoryList from "../InventoryList/InventoryList";
import Cart from "../Cart/Cart";
import { useState } from 'react';
import './OrderBox.css';

export default function OrderBox({ cart, inventory, removeFromCart }) {
    const [active, setActive] = useState('cart');

    return (
        <div className="order-box">
            <div className="order-box-buttons">
                <button onClick={() => setActive('cart')}>Cart</button>
                <button onClick={() => setActive('')}>My Inventory</button>
            </div>
            {active === 'cart' ? 
                <Cart 
                    cart={cart}
                    removeFromCart={removeFromCart}
                /> 
                : 
                <InventoryList 
                    inventory={inventory} 
                />
            }
        </div>
    );
}