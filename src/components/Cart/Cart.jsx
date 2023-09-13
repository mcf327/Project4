import OrderItem from '../OrderItem/OrderItem';

export default function Cart({ cart, removeFromCart, changeCartItemQty, handleCheckout }) {
  return (
    <div>
      {cart && cart.orderItems && cart.orderItems.length > 0 ? (
        <div className="cart-item-container">
          {cart.orderItems.map((orderItem) => (
            <OrderItem 
                key={orderItem._id} 
                orderItem={orderItem}
                removeFromCart={removeFromCart}
                changeCartItemQty={changeCartItemQty}
            />
          ))}
           <section className="total">
              {cart.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!cart.orderItems.length}
                >CHECKOUT</button>
              }
              <span className="right">Total: ${cart.orderTotal.toFixed(2)}</span>
            </section>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}