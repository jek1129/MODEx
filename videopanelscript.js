// Function to open and play the video in a floating window
function openVideo(videoSrc) {
    const videoPlayer = document.getElementById('videoPlayer');
    const floatingPlayer = document.getElementById('floatingPlayer');
    
    videoPlayer.src = videoSrc;
    floatingPlayer.style.display = 'block';
    
    videoPlayer.play();
}

// Function to close the floating video player
function closeVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    const floatingPlayer = document.getElementById('floatingPlayer');
    
    videoPlayer.pause();
    floatingPlayer.style.display = 'none';
    videoPlayer.src = ''; // Stop the video when closing
}
