import React from 'react';

import { MENU } from '../../config';

import './Menu.css';

function Menu({ handleMenuChange }) {
  return (
    <div className="menu">
      {MENU.map(item => (
        <button
          value={item.value}
          className="menu-item"
          onClick={handleMenuChange}
          key={item.value}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Menu;
