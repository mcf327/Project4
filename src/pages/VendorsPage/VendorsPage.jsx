import VendorList from '../../components/VendorList/VendorList';
import { useState, useEffect } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);

  useEffect(function() {
    async function getVendors() {
      const vendors = await vendorsAPI.getAll();
      setVendors(vendors);
    }
    getVendors();
  }, []);

  async function handleVendorClick() {
    alert('clicked');
  }

  return (
    <div>
      <VendorList vendors={vendors} onVendorClick={handleVendorClick}/>
    </div>
  );
}