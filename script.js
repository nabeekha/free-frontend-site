// This javaScript file has basic functionalities such as button clicks that you can reference to edit your own website!

// Get the YouTube channel button element
const youtubeChannelButton = document.querySelector(".youtube-channel-button");

// Add a click event listener to the button
youtubeChannelButton.addEventListener("click", () => {
  // Redirect the user to the YouTube channel link
  window.location.href = "https://www.youtube.com/channel/UCXdSahmtHEhrD4ye6k7p8Aw";
});