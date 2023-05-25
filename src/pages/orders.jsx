// 'use client'
import React from 'react'
import Header from '../components/Header'
import { getSession } from 'next-auth/react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import moment from 'moment';
import Stripe from 'stripe';
import { useSession } from 'next-auth/react';
import Order from '../components/Order';




function orders({ orders }) {
    const session = useSession()
    // console.log('orders:', orders);
    return (
        <div>
            <Header />
            <main className='max-w-screen-lg mx-auto p-18 mt-10'>
                <h1 className='text-4xl border-b mb-2 pb-1 border-yellow-400'>
                    My Orders
                </h1>

                {
                    session ? (
                        <h2>{orders.length} Orders</h2>
                    ) : (
                        <h2>Please sign in to see your orders</h2>
                    )
                }
                <div className='mt-5 space-y-4'>
                    {orders?.map((
                        { id, amount, amountShipping, images, timestamp, items }
                    ) => (
                        <Order
                            key={id}
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            images={images}
                            timestamp={timestamp}
                            items={items}
                        />
                    ))}
                </div>

            </main>

        </div>
    )
}

export default orders;

export async function getServerSideProps(context) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const session = await getSession(context);

    if (!session) {
        return {
            props: {},
        };
    }
    // console.log('session.user:', session.user);
    // console.log(session.user.email);

    // Get orders from Firestore DB
    const docRef = collection(db, 'users', session.user.email, 'orders');
    const querySnapshot = await getDocs(docRef);

    const orders = await Promise.all(querySnapshot.docs.map(async (doc) => {
        const { amount, amount_shipping, images, timestamp } = doc.data();
        return {
            id: doc.id,
            amount,
            amountShipping: amount_shipping,
            images: images,
            timestamp: moment(timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(doc.id, {
                    limit: 100,
                })
            ).data,
        };
    }));

    return {
        props: {
            orders: orders,
        },
    };
}
// Path: src\pages\orders.jsx


