const axios = require("axios");

async function queryDeepSeek(prompt) {
    try {
        const response = await axios.post(
            "https://api.deepseek.com/v1/chat/completions",
            {
                model: "deepseek-chat",
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {"Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`},
            }
        );
        return response.data.choices[0].message.content;

    } catch (error) {
        return error.response?.data;
    }
}

module.exports = queryDeepSeek;
