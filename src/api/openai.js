const axios = require("axios");

async function queryOpenAI(prompt) {
    try {
        const response = await axios.post (
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: [{role: "user", content: prompt }],        
            },
            { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        return error.response?.data;
    }
}

module.exports = queryOpenAI;