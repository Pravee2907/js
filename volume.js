<script>
    // Grab elements
    const audio = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');
    const volumeIndicator = document.getElementById('volumeIndicator');

    // Initial play button setup
    function updatePlayPauseButton() {
        if (audio.paused) {
            playPauseBtn.classList.remove('pause-btn');
            playPauseBtn.classList.add('play-btn');
        } else {
            playPauseBtn.classList.remove('play-btn');
            playPauseBtn.classList.add('pause-btn');
        }
    }

    // Play / Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayPauseButton();
    });

    // Update the button's state initially based on audio's state
    audio.addEventListener('play', updatePlayPauseButton);
    audio.addEventListener('pause', updatePlayPauseButton);

    // Volume control functionality
    volumeControl.addEventListener('click', function(e) {
        const volumePosition = e.offsetX / volumeControl.offsetWidth;
        audio.volume = volumePosition;
        volumeIndicator.style.width = (volumePosition * 100) + '%';
    });
</script>
