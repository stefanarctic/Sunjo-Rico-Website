
// Temporary loading fix
window.onload = () => {
    // document.getElementById('home').scrollIntoView();

    // Disables audio for all videos in the testimonial section
    const videoElements = document.querySelectorAll('div.slide-col div.hero video');
    videoElements.forEach(video => {
        video.volume = 0;
    });
}