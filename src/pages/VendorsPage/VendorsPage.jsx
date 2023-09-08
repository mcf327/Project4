import VendorList from '../../components/VendorList/VendorList';
import { useState, useEffect } from 'react';
import * as vendorsAPI from '../../utilities/vendors-api';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import './VendorsPage.css';
import OrderBox from '../../components/OrderBox/OrderBox';

export default function VendorsPage() {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [vendorItems, setVendorItems] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(function() {
    async function getVendors() {
      const vendors = await vendorsAPI.getAll();
      setVendors(vendors);
    }
    getVendors();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
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

  function handleAddToInventory(itemId) {
    alert('clicked the inventory button');
  }

  async function handleAddToCart(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }

  async function handleRemoveFromCart(itemId) {
    const cart = await ordersAPI.removeItemFromCart(itemId);
    setCart(cart);
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
      <OrderBox 
          cart={cart}
          inventory={inventory}
          removeFromCart={handleRemoveFromCart}
      />
    </div>
  );
}