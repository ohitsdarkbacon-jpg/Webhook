require("dotenv").config();
const axios = require("axios");

async function createWebhook() {
  const token = process.env.BLOCKCYPHER_TOKEN;

  try {
    const response = await axios.post(
      `https://api.blockcypher.com/v1/btc/main/hooks?token=${token}`,
      {
        event: "confirmed-tx",
        address: "bc1qc8vqearyta2zxtryuwedu6pdajnjuz4tcaj4wx",
        url: "https://webhook-production-07d0.up.railway.app/webhook"
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

createWebhook();
