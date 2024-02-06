// functions/chat.js

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  
    const requestBody = JSON.parse(event.body);
    const userMessage = requestBody.message;
  
    // Mock response for testing purposes
    const mockResponse = `You said: "${userMessage}". This is a mock response from ChatGPT.`;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: mockResponse }),
    };
  };
  