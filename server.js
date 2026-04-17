const express = require("express");
const app = express();

app.use(express.json());

// BlockCypher webhook
app.post("/webhook", (req, res) => {
    console.log("📩 BlockCypher Webhook Received:");
    console.log(JSON.stringify(req.body, null, 2));

    // Example transaction hash
    if (req.body.hash) {
        console.log("🧾 TX Hash:", req.body.hash);
    }

    // Example amount (satoshis)
    if (req.body.total) {
        console.log("💰 Amount:", req.body.total, "sats");
    }

    res.sendStatus(200);
});

// Test route
app.get("/", (req, res) => {
    res.send("Webhook is live 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Running on port", PORT);
});
