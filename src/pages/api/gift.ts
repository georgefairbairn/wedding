import Stripe from 'stripe';
import type { APIRoute } from 'astro';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const priceId = formData.get('priceId');

  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Invalid product' }), {
      status: 400
    });
  }

  const baseUrl =
    import.meta.env.MODE === 'production'
      ? 'https://georgeandizzy.com'
      : 'http://localhost:4321';

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${priceId}`,
          quantity: 1,
          adjustable_quantity: {
            enabled: true,
            maximum: 10,
            minimum: 1,
          },
        }
      ],
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/gifts`
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error('Stripe Error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500
    });
  }
};
