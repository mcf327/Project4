import VendorCard from '../VendorCard/VendorCard';
import './VendorList.css';

export default function VendorList({ vendors, onVendorClick }) {
  return (
    <div className="vendor-list">
      <h2>Vendors:</h2>
      {vendors.map((vendor) => (
        <VendorCard key={vendor._id} vendor={vendor} onVendorClick={onVendorClick} />
      ))}
    </div>
  );
}