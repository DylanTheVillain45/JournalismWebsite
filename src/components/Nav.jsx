import React from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from '../data/data.js';
import JournalismLogo from "../assets/JournalismLogo.png"
function Nav() {
  return (
    <nav className='py-2 pb-3 border-b-2 border-black bg-[#f9f9ec] drop-shadow-lg shadow-[rgba(0,0,0,1)] z-50'>
      <div className=''>
        <p>
          <div className='w-full flex justify-center'><img src={JournalismLogo} alt="" className='w-64'/></div>
          <h1 className='text-6xl font-title uppercase text-center'>the asti phoenix</h1>
        </p>
      </div>
      {/* <div className='w-full px-[20%] items-center justify-center text-lg flex flex-row gap-8 '>
        {navLinks.map((item, index) => (
          <div>
            <Link 
              key={index} 
              to={`home`} 
              className="font-serif hover:text-gray-500 transition-all duration-200"
            >
              {item}
            </Link>
          </div>
        ))}
      </div> */}
    </nav>
  )
}

export default Nav