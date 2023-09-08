import VendorCard from '../VendorCard/VendorCard';
import ItemList from '../../components/ItemList/ItemList';
import './VendorList.css';

export default function VendorList({ vendors, handleVendorClick, selectedVendor, items, addToCart, addToInventory, backToVendors }) {
  return (
    <div className="vendor-list">
        <button 
          onClick={backToVendors} 
          style={{ display: selectedVendor ? 'block' : 'none' }} 
        >
          Back to Vendors
        </button>
        {selectedVendor ? (
        items.length > 0 ? (
            <ItemList 
                items={items}
                addToCart={addToCart}
                addToInventory={addToInventory}
            />
        ) : (
            <p>No items available for this vendor.</p>
        )
        ) : (
        vendors.map((vendor) => (
            <VendorCard
                key={vendor._id}
                vendor={vendor}
                handleVendorClick={handleVendorClick}
            />
        ))
        )}
    </div>
  );
}