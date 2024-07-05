const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: '𝘄𝗮𝗹𝗸𝗲𝗿',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`Openai \n━━━━━━━━━━━\nPoser votre question\n━━━━━━━━━━━`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(``, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://metoushela-rest-api-koak.onrender.com/api/gpt4o?context=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('.  Openai\n━━━━━━━━━━━\n' + response + '━━━━━━━━━━━', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('.Openai:\n━━━━━━━━━━━\n㋛.Eurreur lier a l'api veullez contactez Metoushela walker.', event.threadID, event.messageID);
  }
};
