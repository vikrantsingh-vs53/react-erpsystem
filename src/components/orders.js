// src/components/Orders.js

import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import './orders.css'; // You can create a separate CSS file for styling

const Orders = () => {
  // Mock data for orders
  const initialOrdersData = [
    { orderId: 1, customerName: 'John Doe', orderDate: '2024-03-11', status: 'Processing' },
    { orderId: 2, customerName: 'Jane Smith', orderDate: '2024-03-12', status: 'Shipped' },
    { orderId: 3, customerName: 'Bob Johnson', orderDate: '2024-03-13', status: 'Delivered' },
    { orderId: 4, customerName: 'Anuska Johnson', orderDate: '2024-03-15', status: 'Delivered' },
    // Add more mock data as needed
  ];

  const [ordersData, setOrdersData] = useState(initialOrdersData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const requestSort = (key) => {
    let direction = 'ascending';

    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    sortTable(key, direction);
  };

  const sortTable = (key, direction) => {
    const sortedData = [...ordersData];
    sortedData.sort((a, b) => {
      if (direction === 'ascending') {
        return a[key] > b[key] ? 1 : -1;
      }
       else 
      {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setOrdersData(sortedData);
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowDetailsModal(true);
  };

  const handleUpdateStatus = (order) => {
    setSelectedOrder(order);
    setShowStatusModal(true);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = ordersData.filter((order) => order.orderId !== orderId);
    setOrdersData(updatedOrders);
  };

  return (
    <div className="tile orders-tile">
      <h2>Orders</h2>

       <table className="orders-table">
           <thead>
            <tr>
             <th onClick={() => requestSort('orderId')}>Order ID</th>
             <th onClick={() => requestSort('customerName')}>Customer Name</th>
             <th onClick={() => requestSort('orderDate')}>Order Date</th>
             <th onClick={() => requestSort('status')}>Status</th>
             <th>Actions</th>
           </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
             <tr key={order.orderId}>
               <td>{order.orderId}</td>
               <td>{order.customerName}</td>
               <td>{order.orderDate}</td>
               <td>{order.status}</td>
               <td>
                 <button id='view-detail-btn' onClick={() => handleViewDetails(order)}>View Details</button>
                 <button id='update-status-btn' onClick={() => handleUpdateStatus(order)}>Update Status</button>
                 <button id='delete-btn' onClick={() => handleDeleteOrder(order.orderId)}>Delete</button>
               </td>
             </tr>
          ))}
          </tbody>
       </table>

      {/* Reusable Modal for displaying order details */}
      <Modal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        title="Order Details"
      >
        <p>Order ID: {selectedOrder?.orderId}</p>
        <p>Customer Name: {selectedOrder?.customerName}</p>
        <p>Order Date: {selectedOrder?.orderDate}</p>
        <p>Status: {selectedOrder?.status}</p>
      </Modal>

      {/* Reusable Modal for updating order status */}
      <Modal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        title="Update Order Status"
      >
        {/* Add form or input fields to update status */}
        <button onClick={() => setShowStatusModal(false)}>Update Status</button>
      </Modal>
    </div>
  );
};

export default Orders;
