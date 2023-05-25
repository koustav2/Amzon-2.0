import React from 'react'
import moment from 'moment';
import Curreny from 'react-currency-formatter';

function Order({ id, amount, amountShipping, images, timestamp, items }) {
    return (
        <div className='relative border rounded-md'>

            <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
                <div>
                    <p className='font-bold text-xs'>ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
                </div>
                <div>
                    <p className='text-xs font-bold'>TOTAL</p>
                    <p>
                        <Curreny quantity={amount} currency='INR' /> - Next Day Delivery{' '}
                        <Curreny quantity={amountShipping} currency='INR' />
                    </p>
                </div>
                <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-sm whitespace-nowrap'>ORDER # {id}</p>
                <p className='text-sm whitespace-nowrap sm:text-xl truncate self-end flex-1 text-right text-blue-500'>{items.length} items</p>
            </div>

            <div className='p-5 sm:p-10'>
                <div className='flex space-x-6 overflow-x-auto'>
                    {images.map((image) => (
                        <img
                            key={image}
                            src={image} alt=''
                            className='h-20 object-contain sm:h-32'
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Order
