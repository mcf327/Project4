import VendorCard from '../VendorCard/VendorCard';
import ItemList from '../../components/ItemList/ItemList';
import './VendorList.css';

export default function VendorList({ vendors, handleVendorClick, selectedVendor, items }) {
  return (
    <div className="vendor-list">
    {selectedVendor ? (
      items.length > 0 ? (
        <ItemList items={items} />
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