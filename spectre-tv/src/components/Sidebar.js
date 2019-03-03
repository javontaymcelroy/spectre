import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div class='side-bar'>
      <NavLink exact to='/' className='links'>
        Home
      </NavLink>
      <NavLink to='/Dramas' className='links'>
        Dramas
      </NavLink>
      <NavLink to='/Fantasy' className='links'>
        Fantasy
      </NavLink>
      <NavLink to='/Thrillers' className='links'>
        Thrillers
      </NavLink>
      <NavLink to='/Animation' className='links'>
        Animation
      </NavLink>
      <NavLink to='/Crime' className='links'>
        Crime
      </NavLink>
      <NavLink to='/Horror' className='links'>
        Horror
      </NavLink>
      <NavLink to='/Action' className='links'>
        Action
      </NavLink>
      <NavLink to='/SciFi' className='links'>
        Sci Fi
      </NavLink>
      <NavLink to='/Comedy' className='links'>
        Comedy
      </NavLink>
      <NavLink to='/History' className='links'>
        History
      </NavLink>
    </div>
  );
};

export default Sidebar;
