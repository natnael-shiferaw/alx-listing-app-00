import React from 'react'
import Image from 'next/image'
import { CiMail, CiSearch } from 'react-icons/ci'
import alx_logo from '../../public/assets/alx_logo.png'
import AccommodationsRow from '../common/AccommodationsRow'

function Header() {
  return (
    <header className='mb-6'>
      {/**Information section */}
      <div className="green_section mb-2 flex gap-2 justify-center items-center text-white p-4 text-md font-medium">
          <span className='text-white h-3 w-3'><CiMail /></span>
          <span>Overseas trip? Get the latest information on travel guides</span>
          <button className='bg-black py-1 px-2 rounded-full text-sm' type='button'>more info</button>
      </div>
      {/**Navbar */}
      <nav className='bg-white flex flex-col gap-1 py-2'>
        <div className='flex justify-between items-center'>
          {/**logo */}
          <Image src={alx_logo} width={50} height={50} alt='logo' />
          {/** Search Parameters */}
          <div className='flex justify-between gap-8'>
            {/**location search */}
            <div className=' flex flex-col space-y-4 border border-slate-100 rounded-xl p-3 items-center'>
              <label htmlFor='location_input'>Location</label>
              <input type='text' id='location_input' name='location_input' placeholder='Enter location'
                     className='w-40 text-sm' />
            </div>
            {/**other search parameters(check-in,check-out, People, search icon) */}
            <div className='flex  justify-center gap-4 border border-transparent rounded-xl p-1 items-center'>
              {/**checkIn input */}
              <div className='size-24 flex flex-col space-y-4 border border-slate-100 rounded-xl p-2 items-center'>
                <label htmlFor='checkIn_input'>Check in</label>
                <input type='text' id='checkIn_input' name='checkIn_input' placeholder='MM/DD/YYYY'
                       className='w-24 text-sm' />
              </div>
              {/**checkOut_input */}
              <div className='size-24 flex flex-col space-y-4 border border-slate-100 rounded-xl p-2 items-center'>
                <label htmlFor='checkOut_input'>Check out</label>
                <input type='text' id='checkOut_input' name='checkOut_input' placeholder='MM/DD/YYYY'
                       className='w-24 text-sm' />
              </div >
              {/**People input */}
              <div className='size-24 flex flex-col space-y-4 border border-slate-100 rounded-xl p-2 items-center'>
                <label htmlFor='People_input'>People</label>
                <input type='text' id='People_input' name='People_input' placeholder='Number of guests'
                       className='w-24 text-sm' />
              </div>
              {/** search icon */}
              <div onClick={() => {}}
                   className='w-10 h-10 border rounded-full flex items-center justify-center bg-orange-400 hover:cursor-pointer'>
                    <CiSearch className='w-6 h-6  ' />
              </div>
              
            </div>
            <div>

            </div>
          </div>

          {/**SignIn and SignUp buttons */}
          <div className='flex space-x-4'>
            {/**Sign in button */}
            <button type='button'
                    className='text-white border bg-green-500 py-1 px-3 rounded-full'>
                Sign in
            </button>
            {/**Sign up button */}
            <button type='button'
                    className='text-black border bg-white py-1 px-3 rounded-full'>
                Sign up
            </button>
          </div>
        </div>

        {/**Types of accommodation */}
        <AccommodationsRow />
      </nav>
      
    </header>
  )
}

export default Header