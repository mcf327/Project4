import './StoreItem.css';

export default function StoreItem({ item, deleteItem }) {
    
    const handleDeleteClick = () => {
        deleteItem(item._id);
    };

  return (
    <div className="store-item">
      <strong>{item.name}</strong> &nbsp;Category: {item.category} ${item.price}
      <button className="btn-xs" onClick={handleDeleteClick}>X</button>
    </div>
  );
}