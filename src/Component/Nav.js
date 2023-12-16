import React from 'react'
import {Link} from 'react-router-dom';
function Nav() {
  return (
    <div className='bg-orange-100 ' >
        <div className='flex justify-center' >
            <ul className=''>
                <Link className='text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4' to="">Hero</Link>
                <Link className='text-slate-500 text-lg font-semibold cursor-pointer hover:underline hover:decoration-black  px-4' to="/counter">Counter</Link>
            </ul>
        </div>

      
    </div>
  )
}

export default Nav
