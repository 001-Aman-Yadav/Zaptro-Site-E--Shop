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

const Navbar = () => {
  const location = false

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

          <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
            <MapPin className='text-red-500' />
            <span className='font-semibold'>
              {location ? "Your Location" : "Add Address"}
            </span>
            <FaCaretDown />
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

            {/* Logged OUT */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className='bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600 transition'>
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            {/* Logged IN */}
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