import React from 'react';
import Orders from './orders';
import Product from './product';
import Calendar from './Calendar';
import './dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
           <h1 id='dashboard-heading'> Dashboard</h1>

           <div className="dashboard-content">
              <div className="tiles-section">

                <Orders />
                <Product />

              </div>

              <div className="calendar-section">
                <Calendar />
              </div>
           </div>

        </div>
    );
    };

export default Dashboard;