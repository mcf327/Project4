export default function VendorItem({ item }) {
    return (
        <div className="vendor-item">
            <h4>{item.name}</h4>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
        </div>
    );
}