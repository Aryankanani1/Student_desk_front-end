// student-portal.js

let selectedRecipient = "admin"; // Default selected recipient
let messages = {
    "admin": [],
    "faculty": [],
    "hod": [],
    "sports": [],
    "culture": []
    // Add more recipients as needed
};

function selectRecipient() {
    selectedRecipient = document.getElementById('recipientSelect').value;
    displayMessages();
}

function sendMessage() {
    const newMessage = document.getElementById('newMessage').value;
    if (newMessage.trim() !== "") {
        const timestamp = new Date().toLocaleString(); // Add timestamp to the message
        messages[selectedRecipient].push({ sender: "current_user", message: newMessage });
        displayMessages();
        document.getElementById('newMessage').value = "";
    }
}
function displayMessages() {
    const messageContainer = document.getElementById('messages');
    messageContainer.innerHTML = '';

    messages[selectedRecipient].forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.className = (msg.sender === 'current_user') ? 'outgoing-message' : 'incoming-message';
        messageElement.innerHTML = `
            <div class="message-bubble">
                <div class="message-content">${msg.message}</div>
                <div class="message-timestamp">${msg.timestamp}</div>
            </div>
        `;
        messageContainer.appendChild(messageElement);
    });

    // Scroll to the bottom of the message container
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Additional functions or logic can be added based on your requirements
// student-portal.js

let selectedTool = "messaging"; // Default selected tool

function selectTool() {
    selectedTool = document.getElementById('toolSelect').value;
    updateUI();
}

function updateUI() {
    if (selectedTool === "messaging") {
        document.getElementById('messageContainer').style.display = 'block';
        document.getElementById('notificationContainer').style.display = 'none';
        displayMessages();
    } else if (selectedTool === "notifications") {
        document.getElementById('messageContainer').style.display = 'none';
        document.getElementById('notificationContainer').style.display = 'block';
        displayNotifications();
    }
}

// Simulated notifications (replace with actual server-side logic)
setInterval(simulateNotifications, 5000); // Simulate every 5 seconds

function simulateNotifications() {
    const sender = "Admin"; // Simulate notification from Admin
    const message = "New notification received!";
    const notification = { sender, message };
    notifications.push(notification);

    // Display notifications if the notifications tool is selected
    if (selectedTool === "notifications") {
        displayNotifications();
    }
}

// Additional logic for notifications
let notifications = [];
function simulateNotifications() {
    const sender = "Admin";
    const message = "New notification received!";
    const notification = { sender, message, timestamp: new Date().toLocaleString() };
    notifications.push(notification);

    if (selectedTool === "notifications") {
        displayNotifications();
    }
}
// Additional functions or logic can be added based on your requirements
function displayNotifications() {
    const notificationContainer = document.getElementById('notifications');
    notificationContainer.innerHTML = '';

    notifications.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.textContent = `${notification.sender}: ${notification.message}`;
        notificationContainer.appendChild(notificationElement);
    });
}




function goToMainPage() {
    // Redirect to the main page
    window.location.href = 'main.html';
}