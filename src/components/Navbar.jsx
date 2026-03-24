import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const location = false

  return (
    <div className='bg-white py-3 shadow-2xl'>
      
      <div className='max-w-6xl mx-auto flex justify-between items-center px-4'>
        
        {/* LEFT SIDE */}
        <div className='flex items-center gap-6'>
          
          {/* Logo */}
          <Link to='/'>
            <h1 className='font-bold text-3xl text-black'>
              <span className='text-red-500 font-serif'>Z</span>aptro
            </h1>
          </Link>

          {/* Location */}
          <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            <MapPin className='text-red-500' />
            <span className='font-semibold'>
              {location ? "Your Location" : "Add Address"}
            </span>
            <FaCaretDown />
          </div>

        </div>

        {/* RIGHT SIDE MENU */}
        <nav>
          <ul className='flex gap-7 items-center text-lg font-semibold'>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-red-600 text-gray-500 pb-1"
                    : "text-black cursor-pointer"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2  border-red-600 text-gray-500 pb-1"
                    : "text-black cursor-pointer"
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2  border-red-600 text-gray-500 pb-1"
                    : "text-black cursor-pointer"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2  border-red-600 text-gray-500 pb-1"
                    : "text-black cursor-pointer"
                }
              >
                Contact
              </NavLink>
            </li>

          </ul>
        </nav>

      </div>

    </div>
  )
}

export default Navbar