// Function to fetch announcements (you can replace this with your own data source)
function fetchAnnouncements() {
    return [
        "Important notice: Fee payment deadline extended to May 15th.",
        "Reminder: Please ensure your fee payments are up-to-date to avoid penalties.",
        "New installment option available! Check your dashboard for details."
    ];
}

// Function to display announcements
function displayAnnouncements() {
    var announcementsContainer = document.getElementById("announcements");
    var announcements = fetchAnnouncements();

    // Display announcements as HTML paragraphs
    announcements.forEach(function(announcement) {
        var paragraph = document.createElement("p");
        paragraph.textContent = announcement;
        announcementsContainer.appendChild(paragraph);
    });
}

// Add event listener for button click
document.getElementById("show-announcements-btn").addEventListener("click", displayAnnouncements);
