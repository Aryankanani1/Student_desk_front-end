// Add this to your fees-script.js file


document.getElementById('calculate-total').addEventListener('click', calculateTotal);

function calculateTotal() {
    // Get values from form
    const feesAmount = parseFloat(document.getElementById('fees-amount').value);
    const transactionCharge = parseFloat(document.getElementById('transaction-charge').value);

    // Calculate total amount
    const totalAmount = feesAmount + transactionCharge;

    // Set total amount in the input field
    document.getElementById('total-amount').value = totalAmount.toFixed(2);
}

// Add this to your fees-script.js file

function calculateTotal() {
    // Get values from form
    const feesAmount = parseFloat(document.getElementById('fees-amount').value);
    const transactionCharge = parseFloat(document.getElementById('transaction-charge').value);

    // Calculate total amount
    const totalAmount = feesAmount + transactionCharge;

    // Set total amount in the input field
    document.getElementById('total-amount').value = totalAmount.toFixed(2);
}

function showPaymentFields() {
    const paymentCategory = document.getElementById('payment-category').value;

    // Hide all additional fields
    document.getElementById('net-banking-fields').style.display = 'none';
    document.getElementById('debit-card-fields').style.display = 'none';

    // Show fields based on the selected payment category
    if (paymentCategory === 'net-banking') {
        document.getElementById('net-banking-fields').style.display = 'block';
    } else if (paymentCategory === 'debit-card') {
        document.getElementById('debit-card-fields').style.display = 'block';
    }
}

function downloadReceipt() {
    var receiptImageUrl = "receipt.jpg";

    // Create a temporary anchor element
    var downloadLink = document.createElement("a");

    // Set the href attribute to the receipt image URL
    downloadLink.href = receiptImageUrl;

    // Set the download attribute to specify the file name when downloaded
    downloadLink.download = "receipt.jpg";

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element to start the download
    downloadLink.click();

    // Remove the anchor element from the document body
    document.body.removeChild(downloadLink);
    // Logic to download the receipt
    // You can implement the actual download functionality based on your requirements
    alert('Receipt downloaded successfully!');
}

// function downloadReceipt() {
//     // Assuming you have the receipt image URL stored in a variable called receiptImageUrl
//     var receiptImageUrl = "receipt.jpg";

//     // Create a temporary anchor element
//     var downloadLink = document.createElement("a");

//     // Set the href attribute to the receipt image URL
//     downloadLink.href = receiptImageUrl;

//     // Set the download attribute to specify the file name when downloaded
//     downloadLink.download = "receipt.jpg";

//     // Append the anchor element to the document body
//     document.body.appendChild(downloadLink);

//     // Trigger a click event on the anchor element to start the download
//     downloadLink.click();

//     // Remove the anchor element from the document body
//     document.body.removeChild(downloadLink);
// }

function goToMainPage() {
    // Redirect to the main page
    window.location.href = 'main.html';
}

// You can add additional logic for form submission, validation, etc.
// Event listener for the back button
document.getElementById("back-btn").addEventListener("click", function() {
    goToMainPage();
});
