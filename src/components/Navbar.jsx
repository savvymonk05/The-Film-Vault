import React from 'react';
import Logo from '../assets/movieLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img className='w-[60px]' src={Logo} alt="Logo" />
      <Link className='text-blue-500 text-2xl font-bold' to="/">Movies</Link>
      <Link className='text-blue-500 text-2xl font-bold' to="/watchlist">WatchList</Link>
    </div>
  );
};

export default Navbar;
