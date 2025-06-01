const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Replace with your OpenAI API key
const OPENAI_API_KEY = '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';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/generate', async (req, res) => {
  const { name, jobPost, experience } = req.body;
  if (!name || !jobPost) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // Prompt engineering for ATS-friendly output
  const prompt = `
You are an expert resume and cover letter writer. Write a short, ATS-optimized application letter for the following job post. 
Include relevant keywords from the job description and highlight the user's experience. 
Keep the tone professional and concise.

User Name: ${name}
User Experience: ${experience || 'Not provided'}
Job Description: ${jobPost}

Application Letter:
`;

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that writes job applications.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 350,
      temperature: 0.7,
    });

    const aiText = completion.data.choices[0].message.content.trim();
    res.json({ result: aiText });
  } catch (err) {
    res.status(500).json({ error: 'AI generation failed.' });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`JobHackr AI backend running on http://localhost:${PORT}`);
});