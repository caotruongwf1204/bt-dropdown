import React, { useState } from 'react';
import Button from './Button';
import Menu from './Menu';
import './Item.css';

const Item = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='dropdown-item'>
      <Button onClick={toggleMenu}></Button>
      {isMenuOpen && (
        <Menu>
          
        </Menu>
      )}
    </div>
  );
};

export default Item;
