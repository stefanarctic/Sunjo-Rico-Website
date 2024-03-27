
// Temporary loading fix
window.onload = () => {
    // document.getElementById('home').scrollIntoView();

    // Disables audio for all videos in the testimonial section
    const videoElements = document.querySelectorAll('div.slide-col div.hero video');
    videoElements.forEach(video => {
        video.volume = 0;
    });

    // Because relative path doesn't work in the hosted version
    const mainDiv = document.getElementById('main');
    mainDiv.style.setProperty('background', `url('${document.location.origin}/images/Night_City1.png') no-repeat center fixed`);
    mainDiv.style.setProperty('background-size', 'cover');
    // console.clear();
    // console.log("asdsa");
    // console.log(mainDiv);
    // console.log(document.location.origin);
    // mainDiv.setAttribute('background', `url('${document.location.origin}/images/Night_City1.png') no-repeat center fixed`);
}