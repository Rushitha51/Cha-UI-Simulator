const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
addMessage("Hello 👋 Welcome to Chat UI Simulator! Ask me about HTML, CSS, JS, or projects.", "bot");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    generateReply(message);
  }, 600);
}

function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateReply(text) {
  const msg = text.toLowerCase();
  let reply = "";

  if (msg.includes("html")) {
    reply = "HTML is used to create the structure of a website.";
  }
  else if (msg.includes("css")) {
    reply = "CSS is used to style and design web pages.";
  }
  else if (msg.includes("javascript") || msg.includes("js")) {
    reply = "JavaScript adds interactivity to websites.";
  }
  else if (msg.includes("project")) {
    reply = "You can build projects like Todo App, Weather App, Portfolio, Dashboard or Chat UI.";
  }
  else if (msg.includes("dashboard")) {
    reply = "A dashboard displays analytics, charts and user data in one place.";
  }
  else if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hi there 😊 How can I help you today?";
  }
  else {
    reply = "That sounds interesting! Tell me more so I can help you better.";
  }

  addMessage(reply, "bot");
}
userInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
