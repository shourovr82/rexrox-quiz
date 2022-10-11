import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-emerald-800 text-white shadow-slate-400 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu bg-emerald-800 menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
              <li><Link to='/home'> Home</Link></li>
              <li><Link to='/quizes'> Quizes</Link></li>
              <li><Link to='/statistics'> Statistics</Link></li>
              <li><Link to='/blog'>Blogs</Link></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">REXROX</Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal p-0">
            <li ><NavLink to='/home' className={({ isActive }) => isActive ? 'p-4  font-medium bg-opacity-90 bg-emerald-900 transition-colors duration-200 ' : 'p-4  font-medium   transition-colors duration-200 '}> Home</NavLink></li>
            <li><NavLink to='/quizes' className={({ isActive }) => isActive ? 'p-4  font-medium bg-opacity-90 bg-emerald-900 transition-colors duration-200 ' : 'p-4  font-medium   transition-colors duration-200 '}> Quizes</NavLink></li>
            <li><NavLink to='/statistics' className={({ isActive }) => isActive ? 'p-4  font-medium bg-opacity-90 bg-emerald-900 transition-colors duration-200 ' : 'p-4  font-medium   transition-colors duration-200 '}> Statistics</NavLink></li>
            <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'p-4  font-medium bg-opacity-90 bg-emerald-900 transition-colors duration-200 ' : 'p-4  font-medium   transition-colors duration-200 '}>Blogs</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;


