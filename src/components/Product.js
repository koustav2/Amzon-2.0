import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import { useState, useEffect } from 'react'

import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

function Product({ id, title, price, description, category, image }) {
    const [rating, setRating] = useState(1);

    const [hasPrime, setHasPrime] = useState(true);
    const diaptch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, 
            price, description, 
            category, image, 
            rating, hasPrime
        };
        // Sending the product as an action to the REDUX store... the basket slice
        diaptch(addToBasket(product));
    };
    

    useEffect(() => {
        setRating(
          Math.floor(Math.random() * (5-1 + 1)) + 1
        );
        setHasPrime(Math.random() < 0.5);
      }, []);
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <Image src={image} width={200} height={200} alt='logo'
               className='object-contain'
            />

            <h4 className='my-3'>{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon
                        key={i}
                        className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mb-5'>
                <Currency quantity={price} currency="INR" />
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-12' src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF" alt="prime" />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}

            <button 
                onClick={addItemToBasket}
            className='mt-auto button'>Add to Basket</button>

        </div>
    )
}

export default Product;
