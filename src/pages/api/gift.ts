import Stripe from "stripe";
import type { APIRoute } from "astro";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const priceId = formData.get("priceId");
  const countStr = formData.get("count");
  const count =
    typeof countStr === "string" && countStr.trim() === ""
      ? 1
      : Number(countStr);

  if (!priceId || !count) {
    return new Response(JSON.stringify({ error: "Invalid product" }), {
      status: 400,
    });
  }

  const baseUrl =
    import.meta.env.MODE === "production"
      ? "https://georgeandizzy.com"
      : "http://localhost:4321";

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: `${priceId}`,
          quantity: 1,
          ...(count > 1 && {
            adjustable_quantity: {
              enabled: true,
              maximum: count,
              minimum: 1,
            },
          }),
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?price_id=${priceId}`,
      cancel_url: `${baseUrl}/gifts`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error("Stripe Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
};
