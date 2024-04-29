const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51P6wqOSIcynSEhdOprxTWfhQSjyVRCsmSdve0AUbXb3JjrD2PpuiR2Vw1j8jdvqwvzJDbwSYvSA04SbCzlovT1xG00nm7D1C4M"
);

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { passengerDetails, TotalFareAmount } = req.body;
    console.log({
      passengerDetails,
      TotalFareAmount,
    });

    // Input validation
    if (!passengerDetails || !TotalFareAmount || isNaN(TotalFareAmount)) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Bus Ticket",
              description: "One bus ticket",
            },
            unit_amount: TotalFareAmount * 100, 
          },
          quantity: 1,
        },
      ],
      metadata: {
        name: passengerDetails.name, 
        gender: passengerDetails.gender,
        age: parseInt(passengerDetails.age),
        email: passengerDetails.email,
        mobileNumber: parseInt(passengerDetails.mobileNumber),
      },
      mode: "payment",
      success_url: "http://localhost:5173/confirmbooking",
      cancel_url: "http://localhost:5173/cancelbooking",
    });

    console.log(session.id)
    res.status(200).json({
      id: session.id,
      clientSecret: session.client_secret,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to create payment intent" });
  }
});

module.exports = router;
