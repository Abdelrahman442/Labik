document.getElementById("sendButton").addEventListener("click", function () {
  var messageInput = document.getElementById("messageInput");
  var messageText = messageInput.value.trim();
  if (messageText !== "") {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML =
      '<span class="sender">أنت: </span><span class="text">' +
      messageText +
      "</span>";
    document.getElementById("messages").appendChild(messageElement);
    messageInput.value = "";
    messageInput.focus();
    // Scroll to the bottom of the chat
    var messagesContainer = document.getElementById("messages");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
});

document
  .getElementById("messageInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("sendButton").click();
    }
  });
