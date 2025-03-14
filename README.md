# AI Chatbot Prototype
This project is a prototype for an AI chatbot that integrates with multiple AI providers to gather context and generate responses.

## Features
- Integrates with the following AI providers:
  - OpenAI
  - Anthropic
  - DeepSeek
  - Perplexity
  - Venice
- Sends a user query to all integrated AI models and aggregates their responses.
- Handles errors from each API and formats responses for easy reading.

## Requirements
- Node.js (>=14.0.0)
- NPM or Yarn
- API Keys for the AI services

## Running the Project
After setting up the environment variables and installing dependencies, you can run the project by using:

### Using `npm`:
```bash
npm start

### Testing the Endpoint
Once your server is running, you can test it by sending the following `GET` request using a browser or via `curl`:

```bash
curl "http://localhost:3000/?prompt=What is the capital of France?"