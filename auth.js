document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.getElementById("app");

    // Authentication Page
    function showAuthenticationPage() {
        appContainer.innerHTML = `
            <div class="form-container">
                <h1>Authentication Page</h1>
                <div class="input-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" placeholder="Enter your username">
                </div>
                <div class="input-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password">
                </div>
                <button onclick="authenticateUser()">Login</button>
                <p>Don't have an account? <a href="#">Sign up</a></p>
            </div>
        `;
    }

    // Initial load: Show Authentication Page
    showAuthenticationPage();
});

function authenticateUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy user data for demonstration
    const validUser = {
        username: "210120116103",
        password: "AryanKanani",
    };

    // Check if entered credentials match the dummy user data
    if (username === validUser.username && password === validUser.password) {
        alert("Login successful!");
        // Redirect to the main page or perform any other actions as needed
        // window.location.href = "main.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
// auth.js
function authenticateUser() {
    // Your authentication logic here
    
    // Assuming authentication is successful, get the entered username
    const username = document.getElementById('username').value;

    // Redirect to the main page with the username in the URL
    window.location.href = `main.html?username=${encodeURIComponent(username)}`;

    // Prevent form submission for this example
    return false;
}


