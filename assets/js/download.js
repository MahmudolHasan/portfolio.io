document.addEventListener('DOMContentLoaded', function() {
    var lottiePlayer = document.querySelector('.lottie');

    // Play the animation on hover
    lottiePlayer.closest('.download-icon').addEventListener('mouseenter', function() {
        lottiePlayer.play(); // Start playing the animation on hover
    });

    // Stop the animation when hover is lost
    lottiePlayer.closest('.download-icon').addEventListener('mouseleave', function() {
        lottiePlayer.stop(); // Stop the animation after hover
    });
});
