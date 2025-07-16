let currentAudio = null;

document.addEventListener('DOMContentLoaded', function() {
    const soundButtons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');

    // Play sound when button is clicked
    soundButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Stop any currently playing audio
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            // Get sound file from data attribute
            const soundFile = this.getAttribute('data-sound');
            
            // Play new audio
            currentAudio = new Audio(`sounds/${soundFile}`);
            currentAudio.play();
        });
    });

    // Stop all sounds
    stopButton.addEventListener('click', function() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    });
});