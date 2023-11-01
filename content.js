console.debug('extension loaded');

window.setInterval(() => {
    if (!window.location.href.includes('youtube.com/watch?v='))
    return;

    const videoPlayer = document.querySelector('.html5-video-player');
    if (!videoPlayer) {
        console.warn('No player found');
        return;
    }

    const video = videoPlayer.querySelector('video.video-stream.html5-main-video');
    if (!video) {
        console.warn('Video not found');
        return;
    }

    const adModule = videoPlayer.querySelector('div.video-ads.ytp-ad-module');
    if (!adModule || window.getComputedStyle(adModule, null).display === 'none') {
        return;
    }

    const time = video.duration - 0.1;
    if (Number.isFinite(time) && video.currentTime < time) {
        video.currentTime = time;
    }

    const skipButton = videoPlayer.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
    if (skipButton) {
        skipButton.click();
    }

    console.debug('Ad skipped');

    video.play();
}, 100);