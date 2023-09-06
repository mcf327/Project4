import VendorList from '../../components/VendorList/VendorList';
import InventoryList from '../../components/InventoryList/InventoryList';
import { useState, useEffect } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import * as itemsAPI from '../../utilities/items-api';

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [vendorItems, setVendorItems] = useState([]);

  useEffect(function() {
    async function getVendors() {
      const vendors = await vendorsAPI.getAll();
      setVendors(vendors);
    }
    getVendors();
  }, []);

  async function handleVendorClick(vendorId) {
    setSelectedVendor(vendorId);
    const items = await itemsAPI.getItemsByVendorId(vendorId);
    console.log('items received from api call: ', items);
    setVendorItems(items);
    console.log('vendoritems state: ', vendorItems);
  }

  return (
    <div>
      <VendorList vendors={vendors} handleVendorClick={handleVendorClick} selectedVendor={selectedVendor} items={vendorItems}/>
      <InventoryList />
      
    </div>
  );
}