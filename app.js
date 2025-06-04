// 오디오 파일 경로
const audioFiles = {
    'rain': 'sounds/rain.mp3',
    'ocean': 'sounds/ocean.mp3',
    'forest': 'sounds/forest.mp3'
};

// 명상 오디오 파일 경로
const meditationFiles = {
    'breathing': 'meditations/breathing.mp3',
    'sleep': 'meditations/sleep.mp3',
    'stress': 'meditations/stress.mp3'
};

// 현재 재생 중인 오디오
let currentAudio = null;
let isPlaying = false;

// DOM 요소
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const playButtons = document.querySelectorAll('.play-btn');
const volumeSliders = document.querySelectorAll('.volume-slider');
const playerControls = document.querySelector('.player-controls');
const progressBar = document.querySelector('.progress');
const currentTitle = document.querySelector('.current-title');
const currentDuration = document.querySelector('.current-duration');
const currentImage = document.querySelector('.current-image');

// 네비게이션 기능
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.dataset.section;
        
        // 활성화된 버튼 변경
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // 섹션 변경
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSection) {
                section.classList.add('active');
            }
        });
    });
});

// 오디오 재생 기능
function playAudio(audioFile, title, imageSrc) {
    if (currentAudio) {
        currentAudio.pause();
    }
    
    currentAudio = new Audio(audioFile);
    currentAudio.play();
    isPlaying = true;
    
    // 현재 재생 정보 업데이트
    currentTitle.textContent = title;
    currentImage.src = imageSrc;
    updatePlayPauseButton();
    
    // 진행 상태 업데이트
    currentAudio.addEventListener('timeupdate', updateProgress);
    currentAudio.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayPauseButton();
    });
}

// 재생/일시정지 버튼 업데이트
function updatePlayPauseButton() {
    const playPauseBtn = document.querySelector('.play-pause-btn');
    playPauseBtn.textContent = isPlaying ? '일시정지' : '재생';
}

// 진행 상태 업데이트
function updateProgress() {
    if (currentAudio) {
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.style.width = `${progress}%`;
        
        // 시간 표시 업데이트
        const currentMinutes = Math.floor(currentAudio.currentTime / 60);
        const currentSeconds = Math.floor(currentAudio.currentTime % 60);
        currentDuration.textContent = `${currentMinutes.toString().padStart(2, '0')}:${currentSeconds.toString().padStart(2, '0')}`;
    }
}

// 재생 버튼 이벤트 리스너
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.sound-card, .meditation-card');
        const title = card.querySelector('h3').textContent;
        const imageSrc = card.querySelector('img').src;
        const audioFile = audioFiles[title.toLowerCase()] || meditationFiles[title.toLowerCase()];
        
        if (audioFile) {
            playAudio(audioFile, title, imageSrc);
        }
    });
});

// 볼륨 조절
volumeSliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
        if (currentAudio) {
            currentAudio.volume = e.target.value / 100;
        }
    });
});

// 플레이어 컨트롤
document.querySelector('.play-pause-btn').addEventListener('click', () => {
    if (currentAudio) {
        if (isPlaying) {
            currentAudio.pause();
        } else {
            currentAudio.play();
        }
        isPlaying = !isPlaying;
        updatePlayPauseButton();
    }
});

// 이전/다음 버튼 (실제 구현은 필요에 따라 추가)
document.querySelector('.prev-btn').addEventListener('click', () => {
    // 이전 트랙 재생 로직
});

document.querySelector('.next-btn').addEventListener('click', () => {
    // 다음 트랙 재생 로직
}); 