import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'

// ✅ Clerk import FIX
import {
  SignedIn,
  SignedOut,
  SignInButton, 
  UserButton
} from '@clerk/clerk-react'

const Navbar = ({ location, getLocation, opendropdown, setopendropdown }) => {

  // ✅ FIXED toggle function
  const toggeldropdown = () => {
    setopendropdown(!opendropdown)
  }

  return (
    <div className='bg-white py-3 shadow-2xl'>
      
      <div className='max-w-6xl mx-auto flex justify-between items-center px-4'>
        
        {/* LEFT SIDE */}
        <div className='flex items-center gap-6'>
          
          <Link to='/'>
            <h1 className='font-bold text-3xl text-black'>
              <span className='text-red-500 font-serif'>Z</span>aptro
            </h1>
          </Link>

          {/* ✅ LOCATION CLICKABLE */}
          <div 
            onClick={toggeldropdown}
            className='flex gap-1 cursor-pointer text-gray-700 items-center relative'
          >
            <MapPin className='text-red-500' />
            
            <span className='font-semibold'>
              {location}
            </span>

            <FaCaretDown />

            {/* ✅ DROPDOWN */}
            {opendropdown && (
              <div className='absolute top-10 left-0 bg-white shadow-lg rounded p-4 w-64 z-50'>
                
                <h2 className='font-semibold mb-2'>Select Location</h2>

                <button
                  onClick={getLocation}
                  className='w-full bg-blue-500 text-white py-1 rounded mb-2'
                >
                </button>

                <button
                  onClick={() => setopendropdown(false)}
                  className='w-full bg-gray-300 py-1 rounded'
                >
                  Cancel
                </button>

              </div>
            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <nav className='flex items-center gap-7'>
          
          <ul className='flex gap-7 items-center text-lg font-semibold'>

            <li>
              <NavLink to="/" className={({ isActive }) =>
                isActive ? "border-b-2 border-red-600 text-gray-500 pb-1" : "text-black"
              }>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({ isActive }) =>
                isActive ? "border-b-2 border-red-600 text-gray-500 pb-1" : "text-black"
              }>
                Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) =>
                isActive ? "border-b-2 border-red-600 text-gray-500 pb-1" : "text-black"
              }>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) =>
                isActive ? "border-b-2 border-red-600 text-gray-500 pb-1" : "text-black"
              }>
                Contact
              </NavLink>
            </li>

          </ul>

          {/* CART */}
          <Link to='/cart' className='relative flex items-center'>
            <IoCartOutline className='h-7 w-7' />
            <span className='bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full absolute -top-2 -right-2'>
              0
            </span>
          </Link>

          {/* ✅ AUTH SECTION */}
          <div className='flex items-center gap-3'>

            <SignedOut>
              <SignInButton mode="modal">
                <button className='bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition'>
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

          </div>

        </nav>

      </div>

    </div>
  )
}

export default Navbar