
document.addEventListener("DOMContentLoaded", function () {
    const appContainer = document.getElementById("app");
  const urlParams = new URLSearchParams(window.location.search);
    const authenticatedUsername = urlParams.get("username");
    // Main Desktop Page
    function showMainPage() {
        appContainer.innerHTML = `
            <h1>Welcome, ${userData.username}!</h1>
            <p>Role: ${userData.role}</p>
            <button onclick="switchToAuthenticationPage()">Go to Authentication Page</button>
            
        `;
    }
    // Initial load: Show Main Page (for demonstration purposes; you may need to implement proper authentication logic)
    showMainPage();
});

function logout() {
    // Perform any logout actions as needed
    alert("Logout successful!");
    // Redirect to the login page or perform any other actions as needed
    window.location.href = "login.html"; // Change "login.html" to the actual login page URL
}


// Automatically switch images every 5 seconds
let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

setInterval(showNextImage, 2000);

// Add this script in main.js

// Get the result link element
const resultLink = document.querySelector('.result-link');

// Add a click event listener to navigate to the result page
resultLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = "result.html"; // Navigate to the result page
});


// Inside the main.js file

// Sample data for categories and books (replace with your actual data)
const booksData = [
    { title: 'Book 1', category: 'Category 1' },
    { title: 'Book 2', category: 'Category 2' },
    { title: 'Book 3', category: 'Category 1' },
    // Add more books as needed
];

// Function to populate categories dropdown
function populateCategoriesDropdown() {
    const categories = [...new Set(booksData.map(book => book.category))];
    const dropdown = document.getElementById('category');
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.toLowerCase().replace(/\s/g, '-');
        option.textContent = category;
        dropdown.appendChild(option);
    });
}
