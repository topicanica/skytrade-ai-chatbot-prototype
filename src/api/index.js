const queryOpenAI = require("./openai");
const queryAnthropic = require("./anthropic");
const queryDeepSeek = require("./deepseek");
const queryPerplexity = require("./perplexity");
const queryVenice = require("./venice");

module.exports = {
    queryOpenAI,
    queryAnthropic,
    queryDeepSeek,
    queryPerplexity,
    queryVenice,
};
