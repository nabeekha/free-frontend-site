// This javaScript file has basic functionalities such as button clicks that you can reference to edit your own website!

// Get the YouTube button element by its ID
const youtubeBtn = document.getElementById('youtube-btn');

// Function to open the YouTube channel link in a new tab
function openYouTubeChannel() {
    const youtubeChannelLink = "https://www.youtube.com/channel/UCXdSahmtHEhrD4ye6k7p8Aw";
    window.open(youtubeChannelLink, '_blank');
}

// Add a click event listener to the YouTube button
youtubeBtn.addEventListener('click', openYouTubeChannel);