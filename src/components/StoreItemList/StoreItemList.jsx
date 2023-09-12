import StoreItem from '../StoreItem/StoreItem';
import NewItemForm from '../NewItemForm/NewItemForm';
import * as itemsAPI from '../../utilities/items-api';
import { useState, useEffect } from 'react';
import './StoreItemList.css';

export default function StoreItemList({ storeData, addItem, deleteItem }) {
    
    const items = storeData?.items || [];
    const [itemDetails, setItemDetails] = useState([]);

    useEffect(() => {
      const fetchItemDetails = async () => {
        const details = await Promise.all(
          items.map(async (itemId) => {
            const itemDetail = await itemsAPI.getItemById(itemId);
            return itemDetail;
          })
        );
        setItemDetails(details);
      };
  
      fetchItemDetails();
    }, [items]);

    return (
        <div className="store-item-list">
            <h2>Store Items</h2>
                {itemDetails.map(item => (
                   <StoreItem
                      key={item._id}
                      item={item}
                      deleteItem={deleteItem}
                   />
                ))}
            <NewItemForm addItem={addItem} />
        </div>
    );
  }