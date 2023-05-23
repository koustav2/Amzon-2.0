import React from 'react'
import Image from 'next/image'
// import logo from "../assets/Amazon-Logo.png"

function Header() {
    return (
        <header>
            <div className='flex items-center bg-amazon_blue'>
                <div>
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        alt="logo"
                        className='object-contain cursor-pointer '

                    />
                </div>
            </div>
            <div>

            </div>
        </header>
    )
}

export default Header
