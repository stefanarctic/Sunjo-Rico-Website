// ik the codebase needs be optimized

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else {
        //     entry.target.classList.remove('show')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(el => observer.observe(el))
// List -> transition-delay

// Observe when user scrolls to the testimonial section
// let videoPlayed = false;
// const testimonialObserver = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting && entry.target.id == 'testimonials')
//         {
//             const videoElement = document.getElementById('video1');
//             if(!videoPlayed)
//             {
//                 alert('Video played!');
//                 videoElement.currentTime = 0;
//                 videoElement.play();
//                 videoPlayed = true;
//             }
//         }
//     })
// })