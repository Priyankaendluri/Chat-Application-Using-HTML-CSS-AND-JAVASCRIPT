// Get the elements from the DOM
const sendButton = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatBox = document.getElementById('chat-box');

// Function to display messages
function displayMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender); // Add the sender class (e.g., 'user' or 'bot')
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle sending messages
function sendMessage() {
  const message = messageInput.value.trim();
  
  if (message) {
    // Display the user's message
    displayMessage(message, 'user');
    messageInput.value = ''; // Clear the input field

    // Simulate a bot response after a short delay
    setTimeout(() => {
      displayMessage('Bot: ' + 'This is a bot reply to "' + message + '"', 'bot');
    }, 1000);
  }
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for pressing Enter to send a message
messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

