
function startRecording() {
    // Access the video element and start the camera
    const video = document.getElementById('video');
    const startButton = document.getElementById('start-recording');
    const stopButton = document.getElementById('stop-recording');
    const resultBox = document.getElementById('result-box');


    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            video.play();
            startButton.disabled = true; // Disable the start button while recording
            stopButton.disabled = false; // Enable the stop button
        })
        .catch(err => {
            console.error('Error accessing media devices.', err);
        });
}


function stopRecording() {
    const video = document.getElementById('video');
    const startButton = document.getElementById('start-recording');
    const stopButton = document.getElementById('stop-recording');
    const resultBox = document.getElementById('result-box');


    const stream = video.srcObject;
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }

    startButton.disabled = false; // Enable the start button
    stopButton.disabled = true; // Disable the stop button

    // Simulate translation result
    resultBox.value = 'Translation result will appear here...';
}

// Function to handle navigation between pages (if needed)
function navigateTo(page) {
    window.location.href = page;
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-recording');
    const stopButton = document.getElementById('stop-recording');

    if (startButton) {
        startButton.addEventListener('click', startRecording);
    }

    if (stopButton) {
        stopButton.addEventListener('click', stopRecording);
    }
});