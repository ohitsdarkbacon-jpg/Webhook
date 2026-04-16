const express = require("express");
const app = express();

app.use(express.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
    console.log("📩 Webhook received:");
    console.log(JSON.stringify(req.body, null, 2));

    // Example: payment amount
    if (req.body.total) {
        console.log("💰 Satoshis received:", req.body.total);
    }

    res.sendStatus(200);
});

// Health check
app.get("/", (req, res) => {
    res.send("Webhook is live");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("🚀 Running on port", PORT);
});
