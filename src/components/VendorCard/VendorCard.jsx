import './VendorCard.css';

export default function VendorCard({ vendor, onVendorClick }) {
    return (
      <div className="vendor-card" onClick={() => onVendorClick(vendor._id)}>
        <h3>{vendor.name}</h3>
        <p>{vendor.description}</p>
      </div>
    );
  }