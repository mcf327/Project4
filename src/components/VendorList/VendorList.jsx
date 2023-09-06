import VendorCard from '../VendorCard/VendorCard';
import './VendorList.css';

export default function VendorList({ vendors, handleVendorClick, selectedVendor }) {
  return (
    <div className="vendor-list">
      {selectedVendor ? (
        null
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