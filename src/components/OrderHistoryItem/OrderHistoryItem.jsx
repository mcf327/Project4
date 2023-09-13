import './OrderHistoryItem.css';

export default function OrderHistoryItem({ order }) {
  
  const { _id, orderItems, orderTotal, createdAt } = order;

  return (
    <div className="order-history-card">
      <h4>Order #{_id}</h4>
      <p>Date: {new Date(createdAt).toLocaleDateString()}</p>
      <div className="order-items">
        {orderItems.map((orderItem) => (
          <div key={orderItem._id} className="history-item">
            <p>{orderItem.item.name}</p> &nbsp; &nbsp;
            <p>Qty: {orderItem.qty}</p> &nbsp; &nbsp;
            <p>${orderItem.item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <p>Total: ${orderTotal.toFixed(2)}</p>
    </div>
  );
}