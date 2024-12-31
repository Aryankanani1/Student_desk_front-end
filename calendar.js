// Add this to your calendar.js file

function showEvents(category) {
    const allEvents = document.querySelectorAll('.events');
    
    allEvents.forEach(eventList => {
        eventList.style.display = 'none';
    });

    const selectedEvents = document.getElementById(category);
    selectedEvents.style.display = 'block';
}



// Sample data for events (replace it with your actual data)
const examEvents = [
    { date: "March 15, 2024", title: "Exam 1", image: "exam1.jpg" },
    { date: "April 20, 2024", title: "Exam 2", image: "exam2.jpg" }
];

const feesEvents = [
    { date: "March 5, 2024", title: "Fees Payment", image: "fees.jpg" }
];

const cultureEvents = [
    { date: "February 10, 2024", title: "Culture Day", image: "culture.jpg" }
];

const celebrationEvents = [
    { date: "August 15, 2024", title: "Independence Day Celebration", image: "independence.jpg" }
];

const upcomingEvents = [
    { date: "March 25, 2024", title: "Guest Lecture", image: "guest_lecture.jpg" }
];

const specialEvents = [
    { date: "March 10, 2024", title: "Special Event 1", image: "special_event1.jpg" },
    { date: "April 5, 2024", title: "Special Event 2", image: "special_event2.jpg" }
];

function displayEvents(events, category) {
    const eventContainer = document.getElementById(category);
    eventContainer.innerHTML = "";

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `<img class="event-image" src="${event.image}" alt="${event.title}" onclick="openEventModal('${event.image}', '${event.title}')">
        <div class="event-title">${event.title}</div>
        <div class="event-date">${event.date}</div>`;
        eventContainer.appendChild(eventItem);
    });
}

function openEventModal(image, description) {
    const modal = document.getElementById('eventModal');
    const eventImage = document.getElementById('eventImage');
    const eventDescription = document.getElementById('eventDescription');

    eventImage.src = image;
    eventDescription.innerHTML = description;

    modal.style.display = 'block';
}

function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
}
displayEvents(examEvents, 'exams');
displayEvents(feesEvents, 'fees');
displayEvents(cultureEvents, 'culture');
displayEvents(celebrationEvents, 'celebrations');
displayEvents(upcomingEvents, 'upcoming');
displayEvents(specialEvents, 'special');


document.addEventListener("DOMContentLoaded", function () {
    // Sample events data
    const eventsData = [
        { date: "2024-01-01", title: "New Year's Day", description: "Welcome the New Year with joy!" ,imageUrl:"https://images.template.net/248762/new-year-s-day-design-clipart-edit-online.jpg"},
        { date: "2024-01-26", title: "Republic Day", description: "Honoring the Indian Constitution!",imageUrl:"image.jpg"},
        { date: "2024-02-14", title: "Valentine's Day", description: "Celebrate love and affection!",imageUrl:"image.jpg" },
        { date: "2024-03-08", title: "International Women's Day", description: "Celebrate women's achievements!" ,imageUrl:"image.jpg"},
        { date: "2024-04-01", title: "April Fools' Day", description: "Enjoy playful pranks and jokes!" ,imageUrl:"image.jpg"},
        { date: "2024-04-22", title: "Earth Day", description: "Raise awareness about environmental issues!",imageUrl:"image.jpg" },
        { date: "2024-05-01", title: "Labor Day", description: "Celebrate the contributions of workers!",imageUrl:"image.jpg" },
        { date: "2024-05-04", title: "Star Wars Day", description: "May the Force be with you!" ,imageUrl:"image.jpg"},
        { date: "2024-06-05", title: "World Environment Day", description: "Promote environmental awareness!", imageUrl:"image.jpg"},
        { date: "2024-06-21", title: "International Day of Yoga", description: "Promote physical and mental well-being!",imageUrl:"image.jpg" },
        { date: "2024-07-01", title: "Canada Day", description: "Celebrate Canadian pride!" ,imageUrl:"image.jpg"},
        { date: "2024-07-04", title: "Independence Day (USA)", description: "Celebrate the United States' independence!" ,imageUrl:"image.jpg"},
        { date: "2024-08-15", title: "Independence Day (India)", description: "Celebrate the spirit of freedom!", imageUrl:"image.jpg"},
        { date: "2024-09-06", title: "Read a Book Day", description: "Explore the joy of reading!" ,imageUrl:"image.jpg"},
        { date: "2024-09-23", title: "Autumn Equinox", description: "Welcome the fall season!" ,},
        { date: "2024-10-05", title: "World Teachers' Day", description: "Celebrate the contributions of teachers!", imageUrl:"image.jpg"},
        { date: "2024-10-31", title: "Halloween", description: "Enjoy spooky costumes and treats!", imageUrl:"image.jpg"},
        { date: "2024-11-11", title: "Veterans Day", description: "Honor military veterans!" ,imageUrl:"image.jpg"},
        { date: "2024-11-26", title: "Thanksgiving Day", description: "Express gratitude and enjoy a feast!" ,imageUrl:"image.jpg"},
        { date: "2024-12-25", title: "Christmas Day", description: "Merry Christmas! Celebrate the joy of giving!" ,imageUrl:"image.jpg"}
        // Add more events as needed
    ];
 
    // Function to generate calendar for a given year and month
        function generateCalendar(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfWeek = new Date(year, month, 1).getDay();

        const calendarContainer = document.createElement("div");
        calendarContainer.classList.add("year-calendar");

        const monthHeader = document.createElement("h2");
        monthHeader.textContent = new Date(year, month, 1).toLocaleString("default", { month: "long" });
        calendarContainer.appendChild(monthHeader);

        const daysContainer = document.createElement("div");
        daysContainer.classList.add("days-container");

        // Add day names
        const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        for (let i = 0; i < dayNames.length; i++) {
            const dayName = document.createElement("div");
            dayName.classList.add("day-name");
            dayName.textContent = dayNames[i];
            daysContainer.appendChild(dayName);
        }

        // Add empty days before the first day of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("empty-day");
            daysContainer.appendChild(emptyDay);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = day;

            // Check for special events and add relevant classes
            const curretDate = new Date(year,month,day);
            const event = eventsData.find(event=>curretDate.toISOString().split("T")[0]===event.date);
            if (event) {
                dayElement.classList.add("event-day");
                dayElement.title = event.title;
                dayElement.addEventListener("click", function () {
                    showEventDetails(event);
                });
            }
        daysContainer.appendChild(dayElement);
    }
        calendarContainer.appendChild(daysContainer);
        document.body.appendChild(calendarContainer);
    }
// Function to show event details
function showEventDetails(event) {
    const eventModal = document.getElementById("eventModal");
    const eventImage = document.getElementById("eventImage");
    const eventDescription = document.getElementById("eventDescription");

    eventImage.classList.add("event-image-modal");
    eventImage.src = event.imageUrl;
    eventImage.alt = event.title;
    eventDescription.innerHTML = `<h3>${event.title}</h3><p>${event.description}</p>`;

    eventModal.style.display = "block";
}

  // Function to generate full-year calendar for the selected year
  function generateFullYearCalendar(selectedYear) {
    // Remove existing year calendars
    const existingYearCalendars = document.querySelectorAll(".year-calendar");
    existingYearCalendars.forEach(calendar => calendar.remove());
    for (let month = 0; month < 12; month++) {
        generateCalendar(selectedYear, month);
    }
  }
  function handleYearSelectChange() {
    generateFullYearCalendar(yearSelect.value);
}

// Get the dropdown element and add change event listener
const yearSelect = document.getElementById("yearSelect");
yearSelect.addEventListener("change", handleYearSelectChange);

// Initial generation of full-year calendar
const currentYear = new Date().getFullYear();
generateFullYearCalendar(currentYear);

});
function goToMainPage() {
    // Redirect to main page
    window.location.href = "main.html";
}
