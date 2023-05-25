
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
    console.log('hello');
    // console.log(res.body);
    const items = req.body.items;
    const email = req.body.email;

 const transformedItems = items.map(item =>({
   
    quantity: 1,
    price_data:{
        currency: 'inr',
        unit_amount: item.price * 100,
        product_data:{
            description: item.description,
            name: item.title,
            images: [item.image],
        },
    }
 }));

 const session = await Stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                  amount: 7000,
                  currency: 'inr',
                },
                display_name: 'Free shipping',
                delivery_estimate: {
                  minimum: {
                    unit: 'business_day',
                    value: 5,
                  },
                  maximum: {
                    unit: 'business_day',
                    value: 7,
                  },
                },
              },
            },
        ],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA', 'IN'],
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata:{
            email,
            images: JSON.stringify(items.map(item => item.image)),
        },
 });
 res.status(200).json({id: session.id});
//  console.log(session);
//  console.log(session.id);
}

// https://checkout.stripe.com/c/pay/cs_test_b1Y40hr98Bfdo4ObrWYoYIqnNhUTjvrCh3MiWWgxMYsGPJYNoZo2RltSb1#fidkdWxOYHwnPyd1blpxYHZxWjA0S0dCRHxWT2lxbHx1REsxZ199PHBGUm1VcXNNT2FjTG49b24xV1ZIQVVKcktcXX0xM29GXWZCXWRTT0ZLZDAzakpzTDZwcklnaUBRPH9SSDRHMkxkbUtsNTVcRDRPNENyNScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPydocGlxbFpscWBoJyknYGtkZ2lgVWlkZmBtamlhYHd2Jz9xd3BgeCUl