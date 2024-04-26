document.getElementById("show-announcements-btn").addEventListener("click", function() {
    var announcementsText = "Consequences of Late Payment of Fees\n\n" +
        "If fees are not paid by the specified deadline, the following consequences may occur:\n\n" +
        "- Penalties or late fees may be imposed.\n" +
        "- Access to certain campus facilities or services may be restricted.\n" +
        "- Registration for future classes or academic activities may be blocked.\n" +
        "- Transcripts or academic records may be withheld.\n\n" +
        "It is important to ensure timely payment of fees to avoid these consequences.";

    // Display the announcements as an alert
    alert(announcementsText);
});
