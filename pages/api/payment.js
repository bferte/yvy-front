export default async function handler(req, res) {
    if (req.method === 'POST') {

        const stripe = require('stripe')('sk_test_51J0o5eD92IwnR52qbZd5LVfSmqmWVget2K07R6bTZOaJhDacJ9lRpanIGRA6uz4MYKiO1B82s4fZUCamPkZm8XR300SOd7v2VH');

        let data = JSON.parse(req.body)
        

        


        const YOUR_DOMAIN = `${process.env.NEXT_URL}/checkout`;

        
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items: [
                {
                  price_data: {
                    currency: 'eur',
                    product_data: {
                      name: data.title,
                      images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: data.price*100,
                  },
                  quantity: 1,
                },
              ],
              mode: 'payment',
              success_url: `${YOUR_DOMAIN}`,
              cancel_url: `${YOUR_DOMAIN}`,
            });
            res.json({ id: session.id });
          
          


      
    } else {
      res.status(403)
    }
  }