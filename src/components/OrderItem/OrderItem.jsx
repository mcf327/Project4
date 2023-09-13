import './OrderItem.css';

export default function OrderItem({ orderItem, removeFromCart, changeCartItemQty }) {
    return(
        <div className="order-item">
            {orderItem.item.name} &nbsp;
            ${orderItem.item.price.toFixed(2)} &nbsp;
            <button
                className="btn-xs"
                onClick={() => changeCartItemQty(orderItem.item._id, orderItem.qty - 1)}
            >−</button> 
            {orderItem.qty}
            <button
                className="btn-xs"
                onClick={() => changeCartItemQty(orderItem.item._id, orderItem.qty + 1)}
            >+</button> 
            <button className="btn-sm" onClick={() => removeFromCart(orderItem.item._id)}>X</button>
        </div>
    );
}