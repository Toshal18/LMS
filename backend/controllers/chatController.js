const messages = []; // In-memory storage (for simplicity)

exports.getMessages = (req, res) => {
  res.status(200).json(messages);
};

exports.addMessage = (message) => {
  messages.push(message);
};
