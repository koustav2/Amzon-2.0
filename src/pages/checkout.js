import React from 'react'
import Header from '../components/Header'

function Checkout() {
    return (
        <div className='bg-gray-100'>
            <Header />
            <main className='lg:flex max-w-screen-xl mx-auto'>
                {/* Left */}
                <div className='flex-grow m-5 shadow-sm'>
                    <img className='object-contain' src='https://links.papareact.com/ikj' alt='' />
                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>Your Shopping Basket</h1>
                    </div>
                    


                </div>

                {/* Right */}
                <div>

                </div>

            </main>

        </div>
    )
}

export default Checkout
