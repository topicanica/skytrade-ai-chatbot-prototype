const axios = require("axios");

async function queryPerplexity(prompt) {
    try {
        const response = await axios.post(
            "https://api.perplexity.ai/v1/chat",
            { 
                messages: [{ role: "user", content: prompt }],
                model:"sonar-pro",
            },
            { headers: { Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}` } }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        return error.response?.data;
    }
    
}

module.exports = queryPerplexity;