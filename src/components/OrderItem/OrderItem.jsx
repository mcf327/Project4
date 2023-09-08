export default function OrderItem({ orderItem }) {
    return(
        <div className="order-item">
            {orderItem.item.name}
            {orderItem.item.price}
        </div>
    );
}