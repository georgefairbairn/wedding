import Stripe from 'stripe';
import type { APIRoute } from 'astro';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const donation = Number(formData.get('donation'));

  if (!donation || donation <= 0) {
    return new Response(JSON.stringify({ error: 'Invalid donation amount' }), {
      status: 400
    });
  }

  // Build your base URL based on environment
  const baseUrl =
    import.meta.env.MODE === 'production'
      ? 'https://georgeandizzy.com'
      : 'http://localhost:4321';

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: { name: 'Custom Donation' },
            unit_amount: donation * 100 // Stripe expects amount in cents
          },
          quantity: 1
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
