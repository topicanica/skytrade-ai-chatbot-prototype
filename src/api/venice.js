const axios = require("axios");

async function queryVenice(prompt) {
    try {
        const response = await axios.post(
            "https://api.venice.ai/api/v1/chat/completions", 
            {
                model: "llama-3.3-70b",  
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {"Authorization": `Bearer ${process.env.VENICE_API_KEY}`},
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        return error.response?.data;
    }
}

module.exports = queryVenice;
