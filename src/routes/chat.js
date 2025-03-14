const express = require("express");
const { queryOpenAI, queryAnthropic, queryDeepSeek, queryPerplexity, queryVenice } = require("../api");

const router = express.Router();

router.get("/", async (req, res) => {
    const prompt = req.query.prompt;

    try {
        const responses = await Promise.all([
            queryOpenAI(prompt).catch(err => ({ error: err.message || 'Unknown error' })),
            queryAnthropic(prompt).catch(err => ({ error: err.message || 'Unknown error' })),
            queryDeepSeek(prompt).catch(err => ({ error: err.message || 'Unknown error' })),
            queryPerplexity(prompt).catch(err => ({ error: err.message || 'Unknown error' })),
            queryVenice(prompt).catch(err => ({ error: err.message || 'Unknown error' }))
        ]);

        res.json({
            OpenAI: responses[0].error ? { error: responses[0].error } : { response: responses[0] },
            Anthropic: responses[1].error ? { error: responses[1].error } : { response: responses[1] },
            DeepSeek: responses[2].error ? { error: responses[2].error } : { response: responses[2] },
            Perplexity: responses[3].error ? { error: responses[3].error } : { response: responses[3] },
            Venice: responses[4].error ? { error: responses[4].error } : { response: responses[4] }
        });
    } catch (error) {
        console.error("Error fetching AI responses:", error);
        res.status(500).json({ error: "Failed to get AI responses" });
    }
});

module.exports = router;
