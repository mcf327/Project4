import './VendorCard.css';

export default function VendorCard({ vendor, handleVendorClick }) {
    return (
      <div className="vendor-card" onClick={() => handleVendorClick(vendor._id)}>
        <h3>{vendor.name}</h3>
        <p>{vendor.description}</p>
      </div>
    );
  }