// Sample Video Data for 7-Year-Old Play Activities (Real, Verified Embeddable Videos)
const videoData = [
    {
        id: "play_01",
        title: "색종이 한 장으로 딱지 만들기! 세모 딱지 접는 법",
        youtubeId: "J8Jpx8F33sE",
        thumbnail: "https://img.youtube.com/vi/J8Jpx8F33sE/hqdefault.jpg",
        category: "craft",
        categoryName: "만들기 & 종이접기",
        tags: ["준비물소량", "인기"],
        duration: "05:10",
        channel: "네모아저씨",
        parentTip: "7세 손가락 소근육 발달과 공간지각력에 아주 좋은 활동입니다. 아이가 선을 맞추기 어려워할 때는 살짝 눌러주는 도움을 주세요!"
    },
    {
        id: "play_02",
        title: "신나는 뽀로로 건강 체조 율동 배우기",
        youtubeId: "1Z6OvhfgY5s",
        thumbnail: "https://img.youtube.com/vi/1Z6OvhfgY5s/hqdefault.jpg",
        category: "physical",
        categoryName: "몸놀이 & 어린이체조",
        tags: ["실내놀이", "인기"],
        duration: "03:40",
        channel: "뽀로로(Pororo)",
        parentTip: "층간소음 방지를 위해 두꺼운 매트를 깔아주세요. 부모님도 함께 레이스에 참여하면 아이의 승부욕과 사회성이 업그레이드됩니다."
    },
    {
        id: "play_03",
        title: "바나나 차차 율동 키즈 댄스 챌린지",
        youtubeId: "uB8bF3_Oa9g",
        thumbnail: "https://img.youtube.com/vi/uB8bF3_Oa9g/hqdefault.jpg",
        category: "music",
        categoryName: "율동 & 신나는 동요",
        tags: ["인기", "실내놀이"],
        duration: "03:15",
        channel: "뽀로로(Pororo)",
        parentTip: "전신 유산소 운동과 리듬감을 길러줍니다. 아이가 춤출 때 아낌없이 박수와 리액션을 보내주면 자존감이 대폭 상승합니다."
    },
    {
        id: "play_04",
        title: "색종이 표창 접기! 잘 날아가는 팽이 & 표창",
        youtubeId: "lY3PqK6F-qA",
        thumbnail: "https://img.youtube.com/vi/lY3PqK6F-qA/hqdefault.jpg",
        category: "craft",
        categoryName: "만들기 & 종이접기",
        tags: ["준비물소량", "집콕"],
        duration: "07:20",
        channel: "네모아저씨",
        parentTip: "손끝을 섬세하게 움직이며 집중력을 키울 수 있습니다. 접은 후 거실 목표물에 표창 던지기 게임으로 연결해 보세요."
    },
    {
        id: "play_05",
        title: "핑크퐁 상어가족 체조 율동",
        youtubeId: "761ae_KDg_4",
        thumbnail: "https://img.youtube.com/vi/761ae_KDg_4/hqdefault.jpg",
        category: "physical",
        categoryName: "몸놀이 & 어린이체조",
        tags: ["실내놀이", "인기"],
        duration: "02:20",
        channel: "핑크퐁 (Pinkfong)",
        parentTip: "온 가족이 함께 따라 하며 신나게 스트레칭을 즐길 수 있는 대표 국민 체조 영상입니다."
    },
    {
        id: "play_06",
        title: "집에서 하는 신기한 화산 폭발 과학실험!",
        youtubeId: "Hw2g6kX6sP0",
        thumbnail: "https://img.youtube.com/vi/Hw2g6kX6sP0/hqdefault.jpg",
        category: "science",
        categoryName: "신기한 과학실험",
        tags: ["준비물소량", "집콕"],
        duration: "06:10",
        channel: "어린이 과학 교실",
        parentTip: "식초와 베이킹소다 반응을 관찰하며 화학 반응의 기본 원리를 재미있게 익힐 수 있습니다."
    }
];

// App State
let currentCategory = 'all';
let currentTag = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('yt7yo_favorites') || '[]');

// Timer State
let timerSeconds = 1800; // 30 mins
let timerInterval = null;
let isTimerRunning = false;

// DOM Elements
const videoGrid = document.getElementById('video-grid');
const emptyState = document.getElementById('empty-state');
const currentCategoryTitle = document.getElementById('current-category-title');
const videoCountBadge = document.getElementById('video-count');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const favCountBadge = document.getElementById('fav-count');

// Modal Elements
const videoModal = document.getElementById('video-modal');
const modalCloseBtn = document.getElementById('modal-close');
const youtubeIframe = document.getElementById('youtube-iframe');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalParentTip = document.getElementById('modal-parent-tip');
const modalTags = document.getElementById('modal-tags');
const modalFavBtn = document.getElementById('modal-fav-btn');
const modalYtDirect = document.getElementById('modal-yt-direct');

// Timer Elements
const timerDisplay = document.getElementById('timer-display');
const btnTimer15 = document.getElementById('btn-timer-15');
const btnTimer30 = document.getElementById('btn-timer-30');
const btnTimerToggle = document.getElementById('btn-timer-toggle');
const timerAlertModal = document.getElementById('timer-alert-modal');
const btnCloseTimerAlert = document.getElementById('btn-close-timer-alert');

// Random Play Button
const btnRandomPlay = document.getElementById('btn-random-play');
const btnResetFilters = document.getElementById('btn-reset-filters');

let activeModalVideoId = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    updateFavCount();
    renderVideos();
    setupEventListeners();
    updateTimerDisplay();
});

// Category Names Map
const categoryMap = {
    all: '전체 놀이 모음',
    favorites: '내가 찜한 영상 ❤️',
    craft: '만들기 & 종이접기 ✂️',
    physical: '몸놀이 & 어린이체조 🤸',
    science: '신기한 과학실험 🧪',
    boardgame: '실내 보드게임 & 규칙 🎲',
    music: '율동 & 신나는 동요 🎵'
};

// Render Videos Grid based on Filters & Search
function renderVideos() {
    let filtered = videoData.filter(video => {
        // Category Filter
        if (currentCategory === 'favorites') {
            if (!favorites.includes(video.id)) return false;
        } else if (currentCategory !== 'all' && video.category !== currentCategory) {
            return false;
        }

        // Tag Filter
        if (currentTag !== 'all' && !video.tags.includes(currentTag)) {
            return false;
        }

        // Search Query Filter
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            const inTitle = video.title.toLowerCase().includes(query);
            const inChannel = video.channel.toLowerCase().includes(query);
            const inCategory = video.categoryName.toLowerCase().includes(query);
            const inTip = video.parentTip.toLowerCase().includes(query);
            if (!inTitle && !inChannel && !inCategory && !inTip) return false;
        }

        return true;
    });

    // Update Header Text & Count
    currentCategoryTitle.childNodes[0].nodeValue = (categoryMap[currentCategory] || '놀이 모음') + ' ';
    videoCountBadge.textContent = `${filtered.length}개`;

    // Empty State
    if (filtered.length === 0) {
        videoGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    // Generate HTML Cards
    videoGrid.innerHTML = filtered.map(video => {
        const isFav = favorites.includes(video.id);
        const tagsHtml = video.tags.map(t => `<span class="badge-tag">#${t}</span>`).join('');

        return `
            <div class="video-card" onclick="openVideoModal('${video.id}')">
                <div class="thumbnail-wrapper">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
                    <div class="play-overlay">
                        <div class="play-icon"><i class="fa-solid fa-play"></i></div>
                    </div>
                    <span class="duration-tag">${video.duration}</span>
                    <button class="fav-btn-card" onclick="toggleFavorite(event, '${video.id}')">
                        <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-content">
                    <div class="card-tags">
                        <span class="badge-tag" style="background:#eef2ff; color:#4f46e5;">${video.categoryName.split(' ')[0]}</span>
                        ${tagsHtml}
                    </div>
                    <h4 class="card-title">${video.title}</h4>
                    <div class="card-footer">
                        <span class="channel-name"><i class="fa-brands fa-youtube"></i> ${video.channel}</span>
                        <span><i class="fa-solid fa-arrow-right"></i> 시청하기</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Toggle Favorite State
function toggleFavorite(event, videoId) {
    if (event) event.stopPropagation();
    
    if (favorites.includes(videoId)) {
        favorites = favorites.filter(id => id !== videoId);
    } else {
        favorites.push(videoId);
    }

    localStorage.setItem('yt7yo_favorites', JSON.stringify(favorites));
    updateFavCount();
    renderVideos();

    // If modal is open with this video, sync modal state
    if (activeModalVideoId === videoId) {
        updateModalFavButton(videoId);
    }
}

function updateFavCount() {
    favCountBadge.textContent = favorites.length;
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation Category Clicks
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderVideos();
        });
    });

    // Tag Filter Clicks
    document.querySelectorAll('.tag-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentTag = chip.getAttribute('data-tag');
            renderVideos();
        });
    });

    // Search Input Event
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderVideos();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderVideos();
    });

    // Reset Filters
    btnResetFilters.addEventListener('click', () => {
        currentCategory = 'all';
        currentTag = 'all';
        searchQuery = '';
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.nav-btn[data-category="all"]').classList.add('active');
        
        document.querySelectorAll('.tag-chip').forEach(c => c.classList.remove('active'));
        document.querySelector('.tag-chip[data-tag="all"]').classList.add('active');
        
        renderVideos();
    });

    // Random Play Button
    btnRandomPlay.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * videoData.length);
        openVideoModal(videoData[randomIndex].id);
    });

    // Modal Close Events
    modalCloseBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });

    // Modal Fav Toggle Button
    modalFavBtn.addEventListener('click', () => {
        if (activeModalVideoId) {
            toggleFavorite(null, activeModalVideoId);
        }
    });

    // Timer Controls
    btnTimer15.addEventListener('click', () => {
        setTimerDuration(900);
        btnTimer15.classList.add('active');
        btnTimer30.classList.remove('active');
    });

    btnTimer30.addEventListener('click', () => {
        setTimerDuration(1800);
        btnTimer30.classList.add('active');
        btnTimer15.classList.remove('active');
    });

    btnTimerToggle.addEventListener('click', toggleTimer);
    btnCloseTimerAlert.addEventListener('click', () => {
        timerAlertModal.classList.add('hidden');
    });
}

// Modal Functions
function openVideoModal(videoId) {
    const video = videoData.find(v => v.id === videoId);
    if (!video) return;

    activeModalVideoId = videoId;
    youtubeIframe.src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`;
    if (modalYtDirect) {
        modalYtDirect.href = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    }
    modalTitle.textContent = video.title;
    modalCategory.textContent = video.categoryName;
    modalParentTip.textContent = video.parentTip;

    modalTags.innerHTML = video.tags.map(t => `<span class="badge-tag">#${t}</span>`).join('');
    updateModalFavButton(videoId);

    videoModal.classList.remove('hidden');
}

function updateModalFavButton(videoId) {
    const isFav = favorites.includes(videoId);
    if (isFav) {
        modalFavBtn.classList.add('active');
        modalFavBtn.innerHTML = `<i class="fa-solid fa-heart"></i> <span>찜완료</span>`;
    } else {
        modalFavBtn.classList.remove('active');
        modalFavBtn.innerHTML = `<i class="fa-regular fa-heart"></i> <span>찜하기</span>`;
    }
}

function closeVideoModal() {
    videoModal.classList.add('hidden');
    youtubeIframe.src = '';
    activeModalVideoId = null;
}

// Timer Functions
function setTimerDuration(seconds) {
    if (isTimerRunning) stopTimer();
    timerSeconds = seconds;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function toggleTimer() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isTimerRunning = true;
    btnTimerToggle.innerHTML = `<i class="fa-solid fa-pause"></i> 일시정지`;
    btnTimerToggle.style.background = '#e17055';

    timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
        } else {
            stopTimer();
            timerAlertModal.classList.remove('hidden');
            if (!videoModal.classList.contains('hidden')) {
                closeVideoModal();
            }
        }
    }, 1000);
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    btnTimerToggle.innerHTML = `<i class="fa-solid fa-play"></i> 시작`;
    btnTimerToggle.style.background = 'var(--primary-dark)';
}
