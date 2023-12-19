import React from 'react'
import {Link as Softscroll} from 'react-scroll';
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <div className='bg-orange-100 p-4  ' >
      <div className='flex justify-center'>
        <div className='flex justify-center mx-4' >
            <ul className=''>
                <Softscroll className='text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4' to="hero" smooth={true} duration={500}>Hero</Softscroll>
                <Softscroll className='text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4' to="counter" smooth={true} duration={500} offset={200}>Counter</Softscroll>
            </ul>
        </div>
        <div className=''>
          <button className='bg-gray-300 px-4 py-3 rounded-2xl hover:scale-110 transition ease-in-out duration-500'><Link to="/login">Login</Link></button>
          
        </div>
      </div>

      
    </div>
  )
}

export default Nav
