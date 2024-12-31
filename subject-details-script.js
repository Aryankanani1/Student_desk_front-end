document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const subjectName = urlParams.get("name");
    const subjectCode = urlParams.get("code");

    // Display the subject details on the page
    document.getElementById("subject-name").textContent = subjectName;
    document.getElementById("subject-code").textContent = subjectCode;
    // Add more code to display other details as needed

    // Fetch subject details from server or use hardcoded data
    const subjectDetails = {
        ciriculam: "Subject Ciriculam Details",
        sirInfo: {
            name: "Prof. John Doe",
            photo: "https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg", // Replace with the actual photo link
            phoneNumber: "123-456-7890",
        },
        credits: "3 Credits",
        chapters: ["Chapter 1: Introduction", "Chapter 2: Basics", "Chapter 3: Advanced Concepts"],
        
        videoLink: "https://www.youtube.com/subject-video", // Replace with the actual video link
    };

    // Populate subject details
    document.getElementById("subjectCiriculam").textContent = subjectDetails.ciriculam;
    document.getElementById("sirPhoto").src = subjectDetails.sirInfo.photo;
    document.getElementById("sirName").textContent = subjectDetails.sirInfo.name;
    document.getElementById("sirPhoneNumber").textContent = subjectDetails.sirInfo.phoneNumber;

    // Populate subject chapters
    const chaptersContainer = document.getElementById("subjectChapters");
    subjectDetails.chapters.forEach(chapter => {
        const chapterElement = document.createElement("p");
        chapterElement.textContent = chapter;
        chaptersContainer.appendChild(chapterElement);
    });

    // Populate subject credits
    document.getElementById("subjectCredits").textContent = "Credits: " + subjectDetails.credits;

    // Populate video link
    const videoLinkContainer = document.getElementById("videoLink");
    if (subjectDetails.videoLink) {
        const videoLinkElement = document.createElement("a");
        videoLinkElement.href = subjectDetails.videoLink;
        videoLinkElement.textContent = "Watch Video Lecture";
        videoLinkContainer.appendChild(videoLinkElement);
    }
});

function goBack() {
    // Redirect back to the subject list
    window.location.href = "library.html";
}
