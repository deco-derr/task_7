import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className="page-content services-container">
      <h2>Our Services</h2>
      <ul>
        <li><Link to="design">Design</Link></li>
        <li><Link to="development">Development</Link></li>
      </ul>

      {/* Nested Routes */}
      <Outlet />
    </div>
  );
};

export default Services;
