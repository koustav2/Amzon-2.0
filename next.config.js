
module.exports = {
    images: {
        domains: ['links.papareact.com','images.ctfassets.net', 'images.unsplash.com','fakestoreapi.com','www.nicepng.com'],
    },
    env : {
        stripe_public_key: `${process.env.STRIPE_PUBLIC_KEY}`
    }
};