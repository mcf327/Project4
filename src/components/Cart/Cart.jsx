import OrderItem from '../OrderItem/OrderItem';

export default function Cart({ cart }) {
  return (
    <div>
      {cart && cart.orderItems && cart.orderItems.length > 0 ? (
        <div className="cart-item-container">
          {cart.orderItems.map((orderItem) => (
            <OrderItem key={orderItem._id} orderItem={orderItem} />
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}