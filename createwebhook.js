const axios = require("axios");

async function createWebhook() {
  try {
    const response = await axios.post(
      "https://api.blockcypher.com/v1/btc/main/hooks?token=YOUR_BLOCKCYPHER_TOKEN",
      {
        event: "confirmed-tx",
        address: "YOUR_BTC_ADDRESS",
        url: "https://yourdomain.com/webhook"
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Webhook Created:");
    console.log(response.data);

  } catch (error) {
    console.error("❌ Error Creating Webhook:");
    console.error(error.response?.data || error.message);
  }
}

createWebhook();
