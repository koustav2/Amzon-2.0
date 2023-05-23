import React from 'react'
import Image from 'next/image'
import logo from "../assets/Amazon-Logo.png"

function Header() {
  return (
    <header>
        <div>
            <Image 
                src={logo}
                width={150}
                height={40}
                alt="logo" 
                className='object-contain cursor-pointer'

            />
        </div>
        <div>
            
        </div>
    </header>
  )
}

export default Header
