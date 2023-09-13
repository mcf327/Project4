import './OrderHistoryItem.css';

export default function OrderHistoryItem({ order }) {
  
  const { _id, orderItems, orderTotal, createdAt } = order;

  return (
    <div className="order-history-item">
      <h2>Order #{_id}</h2>
      <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
      <div className="order-items">
        {orderItems.map((orderItem) => (
          <div key={orderItem._id} className="order-item">
            <p>{orderItem.item.name}</p>
            <p>Quantity: {orderItem.quantity}</p>
            <p>Price: ${orderItem.item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <p>Total: ${orderTotal.toFixed(2)}</p>
    </div>
  );
}