const axios = require("axios");

async function queryAnthropic(prompt) {
    try {
        const response = await axios.post(
            "https://api.anthropic.com/v1/complete",
            { prompt: prompt, max_tokens: 500 },
            { headers: { Authorization: `Bearer ${process.env.ANTHROPIC_API_KEY}` } }
        );
        return response.data.completion;
        
    } catch (error) {
        return error.response?.data;
    }
}

module.exports = queryAnthropic;