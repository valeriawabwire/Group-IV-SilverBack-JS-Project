document.addEventListener("DOMContentLoaded", function() {
    // JavaScript to handle button clicks and show/hide content
    document.getElementById("people-btn").addEventListener("click", function() {
        // Show student details or perform other actions
    });

    document.getElementById("show-announcements-btn").addEventListener("click", function() {
        var announcements = document.getElementById("announcements");
        if (announcements.style.display === "none" || announcements.style.display === "") {
            announcements.style.display = "block";
        } else {
            announcements.style.display = "none";
        }
    });
});
