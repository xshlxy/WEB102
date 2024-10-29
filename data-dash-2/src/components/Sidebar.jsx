import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Header from './Header';

const Sidebar = () => (
  <div className="sideNav">
    <Header className="home" />
    <Link to="/">Home</Link>
    {/* Add more links as needed */}
  </div>
);

export default Sidebar;