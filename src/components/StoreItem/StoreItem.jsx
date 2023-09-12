import './StoreItem.css';

export default function StoreItem({ item, deleteItem }) {
    
    const handleDeleteClick = () => {
        deleteItem(item._id);
    };

  return (
    <div className="store-item">
      <strong>Name:</strong> {item.name}<br />
      <strong>Category:</strong> {item.category}<br />
      <strong>Price:</strong> ${item.price}<br />
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}