document.addEventListener("DOMContentLoaded", function () {
    // Select department and semester dropdown elements
    const departmentSelect = document.getElementById("department-select");
    const semesterSelect = document.getElementById("semester-select");

    // Subject list container
    const subjectList = document.getElementById("subject-list");

    // Function to populate subject list based on selected department and semester
    function populateSubjectList() {
        // Get selected department and semester values
        const selectedDepartment = departmentSelect.value;
        const selectedSemester = semesterSelect.value;

        // Clear previous content in subject list
        subjectList.innerHTML = "";

        // Fetch subject data from server or use hardcoded data
        // Example hardcoded data
        const subjects = getSubjects(selectedDepartment, selectedSemester);

        // Populate subject list
        subjects.forEach(subject => {
            const subjectItem = document.createElement("div");
            subjectItem.classList.add("subject-item");

            const subjectName = document.createElement("span");
            subjectName.textContent = subject.name + " (Code: " + subject.code + ")";
            subjectItem.appendChild(subjectName);

            // Button to view subject details
            const viewButton = document.createElement("button");
            viewButton.textContent = "View Details";

            viewButton.addEventListener("click", function () {
                // Function to handle viewing subject details
                window.location.href = `subject-details.html?name=${encodeURIComponent(subject.name)}&code=${encodeURIComponent(subject.code)}`;
            });
            subjectItem.appendChild(viewButton);

            subjectList.appendChild(subjectItem);
        });
    }

    // Event listener for department and semester dropdown change
    departmentSelect.addEventListener("change", populateSubjectList);
    semesterSelect.addEventListener("change", populateSubjectList);

    // Initial population of subject list
    populateSubjectList();
});

// Function to fetch subjects from server based on department and semester
function getSubjects(department, semester) {
    // Example hardcoded data
    const subjectData = {
        it: {
            sem1: [
                { name: "BEM", code: "IT101" },
                { name: "BEE", code: "IT102" },
                { name: "PHYSICS", code: "IT103" },
                { name: "BE", code: "IT104" },
                { name: "Engineering Design", code: "IT105" },
                // Add more subjects for IT Sem 1 as needed
            ],

            sem2: [
                { name: "Maths-1", code: "IT201" },
                { name: "C language", code: "IT202" },
                { name: "English", code: "IT203" },
                { name: "ES", code: "IT204" },
                // Add more subjects for IT Sem 2 as needed
            ]
            // Add more semesters for IT as needed
        },
        civil: {
            sem1: [
                { name: "Subject A", code: "CE101" },
                { name: "Subject B", code: "CE102" },
                // Add more subjects for Civil Engg Sem 1 as needed
            ],
            sem2: [
                { name: "Subject C", code: "CE201" },
                { name: "Subject D", code: "CE202" },
                // Add more subjects for Civil Engg Sem 2 as needed
            ]
            // Add more semesters for Civil Engg as needed
        },

        computer: {
            sem1: [
                { name: "Subject A", code: "CS101" },
                { name: "Subject B", code: "CS102" },
                // Add more subjects for Civil Engg Sem 1 as needed
            ],
            sem2: [
                { name: "Subject C", code: "CS201" },
                { name: "Subject D", code: "CS202" },
                // Add more subjects for Civil Engg Sem 2 as needed
            ]
            // Add more semesters for Civil Engg as needed
        }
        // Add more departments as needed
    }
    // Return subjects based on department and semester
    return subjectData[department][semester];
}

// // Function to handle viewing subject details
// Inside library-script.js
function viewSubjectDetails(subject) {
    // Get necessary information about the subject
    const subjectName = subject.name;
    const subjectCode = subject.code;
    
    // Navigate to subject-details.html with parameters
    window.location.href = `subject-details.html?name=${encodeURIComponent(subjectName)}&code=${encodeURIComponent(subjectCode)}`;
}


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||

document.addEventListener("DOMContentLoaded", function () {
    const departmentSelect = document.getElementById("department-select-books");
    const semesterSelect = document.getElementById("semester-select-books");

    departmentSelect.addEventListener("change", displayBooks);
    semesterSelect.addEventListener("change", displayBooks);

    displayBooks(); // Initial display
});

function getBooks(department, semester) {
    // Example hardcoded data
    const bookData = {
        it:{
            sem1: [
                { title: "IT A", author: "Author A", downloadLink: "book_A.pdf" },
                { title: "IT B", author: "Author B", downloadLink: "book_B.pdf" }
            ],
            sem2: [
                { title: "IT C", author: "Author C", downloadLink: "book_C.pdf" },
                { title: "IT D", author: "Author D", downloadLink: "book_D.pdf" }
            ],
        },
        civil: {
            sem1: [
                { title: "CIVIL X", author: "Author X", downloadLink: "book_X.pdf" },
                { title: "CIVIL Y", author: "Author Y", downloadLink: "book_Y.pdf" }
            ],
            sem2: [
                { title: "CIVIL Z", author: "Author Z", downloadLink: "book_Z.pdf" }
            ],
        },
        computer:{
            sem1:[
                { title: "COMPUTER Z", author: "Author Z", downloadLink: "book_Z.pdf" }
            ],
        },
        electric:{
            sem1:[
                { title: "ELECTRIC Z", author: "Author Z", downloadLink: "book_Z.pdf" }
            ]
        }

        // Add more departments and books as needed
    };

    return bookData[department][semester] || [];
}

function displayBooks() {
    const department = document.getElementById('department-select-books').value;
    const semester = document.getElementById('semester-select-books').value;
    const bookListContainer = document.getElementById('book-list');
    const books = getBooks(department, semester);

    bookListContainer.innerHTML = '';

    if (books.length > 0) {
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                 <button class="download-button" onclick="downloadBook('${book.downloadLink}')">Download</button>
            `;
            bookListContainer.appendChild(bookElement);
        });
    } 
    else {
        const messageElement = document.createElement('p');
        messageElement.textContent = 'No books available for the selected department and semester.';
        bookListContainer.appendChild(messageElement);
    }
}

function downloadBook(downloadLink) {
    // Trigger download using an invisible link
    const link = document.createElement('a');
    link.href = downloadLink;
    // link.download = downloadLink.split('/').pop();
     link.download = 'https://www.goodreads.com/book/show/4779597-a-father-s-promise-study-guide-only.pdf'; // You can set the desired filename here
    link.click();
}

function goToMainPage() {
    // Redirect to main page
    window.location.href = "main.html";
}
