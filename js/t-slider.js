const btns = document.querySelectorAll(".btn")
const slideRow = document.querySelector(".slide-row")
const slider = document.querySelector(".slider")

let currentIndex = 0

// Pauses the current element when user switched to another tab
window.onblur = () => {
    const videoElement = document.getElementById(`video${currentIndex}`);
    videoElement.pause();
}

// Unpauses the video when the user returned to the current tab
window.onfocus = () => {
    const videoElement = document.getElementById(`video${currentIndex}`);
    videoElement.play();
}

const updateSlide = (_) => {
    const videoElements = document.querySelectorAll('div.slide-col div.hero video');
    
    // Pause all videos
    videoElements.forEach(video => {
        video.pause();
    });
    
    // Plays the current video
    const currentVideo = document.getElementById(`video${currentIndex}`);
    // currentVideo.currentTime = 0;
    currentVideo.play();

    slideRow.style.transform = `translateX(${currentIndex * -slider.offsetWidth}px)`

    btns.forEach((btn, index) => {
        btn.classList.toggle("active", index === currentIndex)
    })
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        currentIndex = index
        updateSlide()
    })
})

window.addEventListener("resize", () => {
    updateSlide()
})
