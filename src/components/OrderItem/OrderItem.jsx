import './OrderItem.css';

export default function OrderItem({ orderItem, removeFromCart }) {
    return(
        <div className="order-item">
            {orderItem.item.name} &nbsp;
            ${orderItem.item.price.toFixed(2)} &nbsp;
            Amount: {orderItem.qty}
            <button onClick={() => removeFromCart(orderItem.item._id)}>X</button>
        </div>
    );
}