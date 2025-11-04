import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner container">
        <div className="brand">Card Dispute</div>
        <div className="links">
          <NavLink to="/transactions">Transactions</NavLink>
          <NavLink to="/card-dispute" className={({isActive}) => isActive ? 'active' : ''}>
            Card Dispute
          </NavLink>
          {/* <NavLink to="/dispute-decision" className={({isActive}) => isActive ? 'active' : ''}>
            Dispute Decision
          </NavLink> */}
          <NavLink to="/workflow-designer" className={({isActive}) => isActive ? 'active' : ''}>
            Camunda Workflow 
          </NavLink>
        </div>
      </div>
    </nav>
  );
}