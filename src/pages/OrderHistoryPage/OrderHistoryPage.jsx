import { useEffect, useState } from 'react';
import OrderHistoryItem from '../../components/OrderHistoryItem/OrderHistoryItem';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderHistoryPage.css';

export default function OrderHistoryPage() {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    async function fetchOrderHistory() {
      try {
        const response = await ordersAPI.getUserOrderHistory();
        const paidOrders = response.filter(order => order.isPaid);
        setOrderHistory(paidOrders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    }

    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h1>Past Orders</h1>
      <div className="order-history-container">
        {orderHistory.length > 0 ? (
          orderHistory.map(order => (
            <OrderHistoryItem key={order._id} order={order} />
          ))
        ) : (
          <p>No past orders found.</p>
        )}
      </div>
    </div>
  );
}