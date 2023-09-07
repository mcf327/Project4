import VendorList from '../../components/VendorList/VendorList';
import InventoryList from '../../components/InventoryList/InventoryList';
import { useState, useEffect } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import * as itemsAPI from '../../utilities/items-api';
import './VendorsPage.css';
import OrderBox from '../../components/OrderBox/OrderBox';

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
    setVendorItems(items);
  }

  function backToVendors() {
    setSelectedVendor(null);
    setVendorItems([]);
  }

  function handleAddToInventory(item) {
    console.log(`This will add ${item} to user's inventory list`);
  }

  function handleAddToCart(item) {
    console.log(`This will add ${item} to user's cart`);
  }

  return (
    <div className="page-container">
      <VendorList 
          vendors={vendors} 
          handleVendorClick={handleVendorClick} 
          selectedVendor={selectedVendor} 
          items={vendorItems}
          addToCart={handleAddToCart}
          addToInventory={handleAddToInventory}
          backToVendors={backToVendors}
      />
      <OrderBox />
      
    </div>
  );
}