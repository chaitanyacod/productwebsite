import React from 'react'
import { Link } from 'react-router-dom'
 const Navbar = () => {
  return <>
    <nav id='nav'className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to='/' className='navbar-brand'><img src="" alt="" /> </Link>
      <div className='ml-auto'>
        <ul className='navbar-nav'>
          <li className='nav-list'><Link to='/' className='nav-link'>Home</Link></li>
          <li className='nav-list'><Link to='/Create_Product' className='nav-link'>Create_Product</Link></li>
          <li className='nav-list'><Link to='/Product_List' className='nav-link'>Product_list</Link></li>
          <li className='nav-list'><Link to='/Edit_Products' className='nav-link'>Edit Products</Link></li>
          <li className='nav-list'><Link to='/Admin' className='nav-link'>Admin</Link></li>
          
        </ul>
      </div>

    </nav>
  </>
}
export default Navbar