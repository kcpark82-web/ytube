// Sample Video Data for 7-Year-Old Play Activities
const videoData = [
    {
        id: "play_01",
        title: "색종이 한 장으로 날아가는 슝슝 무한 비행기 만들기",
        youtubeId: "3_t2t4F0rP8",
        thumbnail: "https://img.youtube.com/vi/3_t2t4F0rP8/hqdefault.jpg",
        category: "craft",
        categoryName: "만들기 & 종이접기",
        tags: ["준비물소량", "인기"],
        duration: "08:15",
        channel: "종이접기 대장",
        parentTip: "7세 손가락 소근육 발달과 공간지각력에 아주 좋은 활동입니다. 아이가 선을 맞추기 어려워할 때는 살짝 눌러주는 도움을 주세요!"
    },
    {
        id: "play_02",
        title: "거실에서 즐기는 쿵쾅쿵쾅 신나는 실내 몸놀이 5가지",
        youtubeId: "Wp6-4tIqOac",
        thumbnail: "https://img.youtube.com/vi/Wp6-4tIqOac/hqdefault.jpg",
        category: "physical",
        categoryName: "몸놀이 & 어린이체조",
        tags: ["실내놀이", "집콕"],
        duration: "12:30",
        channel: "신나는 튼튼TV",
        parentTip: "층간소음 방지를 위해 두꺼운 매트를 깔아주세요. 부모님도 함께 레이스에 참여하면 아이의 승부욕과 사회성이 업그레이드됩니다."
    },
    {
        id: "play_03",
        title: "집에서 하는 신기한 베이킹소다 식초 폭발 과학실험!",
        youtubeId: "5j8-aWwZkUY",
        thumbnail: "https://img.youtube.com/vi/5j8-aWwZkUY/hqdefault.jpg",
        category: "science",
        categoryName: "신기한 과학실험",
        tags: ["준비물소량", "인기"],
        duration: "06:45",
        channel: "꼬마 과학자 탐구반",
        parentTip: "산성과 염기성의 화학 반응을 거품 폭발 형태로 직관적으로 보여줍니다. '어떤 냄새가 날까?', '왜 거품이 생길까?' 질문을 던져보세요."
    },
    {
        id: "play_04",
        title: "주사위와 종이 한 장이면 끝! 간단한 7세 맞춤 보드게임",
        youtubeId: "b8yS2dK5cQo",
        thumbnail: "https://img.youtube.com/vi/b8yS2dK5cQo/hqdefault.jpg",
        category: "boardgame",
        categoryName: "실내 보드게임 & 규칙",
        tags: ["준비물소량", "실내놀이"],
        duration: "10:10",
        channel: "보드게임 파파",
        parentTip: "규칙을 지키고 순서를 기다리는 수와 지각 능력을 키워줍니다. 질 때 삐지지 않고 '좋은 경기였다'고 인사하는 매너도 지도해주세요."
    },
    {
        id: "play_05",
        title: "키즈 율동 베스트! 바나나 차차 & 바다나무 신나는 댄스",
        youtubeId: "Mh8wG2N1a70",
        thumbnail: "https://img.youtube.com/vi/Mh8wG2N1a70/hqdefault.jpg",
        category: "music",
        categoryName: "율동 & 신나는 동요",
        tags: ["인기", "실내놀이"],
        duration: "15:20",
        channel: "키즈 댄스 파티",
        parentTip: "전신 유산소 운동과 리듬감을 길러줍니다. 아이가 춤출 때 아낌없이 박수와 리액션을 보내주면 자존감이 대폭 상승합니다."
    },
    {
        id: "play_06",
        title: "풍선 하나로 1시간 순삭! 아빠와 함께하는 풍선 배드민턴",
        youtubeId: "0Q1gP3V_a8A",
        thumbnail: "https://img.youtube.com/vi/0Q1gP3V_a8A/hqdefault.jpg",
        category: "physical",
        categoryName: "몸놀이 & 어린이체조",
        tags: ["준비물소량", "실내놀이", "집콕"],
        duration: "07:50",
        channel: "놀아주는 아빠짱",
        parentTip: "종이접시와 수수깡으로 채를 만들고 풍선으로 놀아주세요. 물건이 깨질 위험 없이 안심하고 순발력을 키울 수 있습니다."
    },
    {
        id: "play_07",
        title: "우유 위에 무지개가 펼쳐진다? 마법 같은 밀크 아트 과학",
        youtubeId: "9k-j4T2K9oY",
        thumbnail: "https://img.youtube.com/vi/9k-j4T2K9oY/hqdefault.jpg",
        category: "science",
        categoryName: "신기한 과학실험",
        tags: ["준비물소량", "집콕"],
        duration: "05:15",
        channel: "호기심 상자",
        parentTip: "우유, 세제, 식용유지만 있으면 표면장력을 직접 눈으로 확인할 수 있는 매혹적인 과학 미술 통합 놀이입니다."
    },
    {
        id: "play_08",
        title: "휴지심과 박스로 만드는 나만의 대형 공룡 마스크",
        youtubeId: "v8L2f-xN4b0",
        thumbnail: "https://img.youtube.com/vi/v8L2f-xN4b0/hqdefault.jpg",
        category: "craft",
        categoryName: "만들기 & 종이접기",
        tags: ["집콕", "인기"],
        duration: "14:00",
        channel: "재활용 미술관",
        parentTip: "택배 박스나 재활용품을 활용하여 환경 보호 생각도 나누고, 완성 후 공룡 역할극 놀이까지 연계해 보세요!"
    },
    {
        id: "play_09",
        title: "가족 모두 모여라! 7세 도미노 챌린지 & 수 세기 놀이",
        youtubeId: "K1p9oX2X3cE",
        thumbnail: "https://img.youtube.com/vi/K1p9oX2X3cE/hqdefault.jpg",
        category: "boardgame",
        categoryName: "실내 보드게임 & 규칙",
        tags: ["실내놀이"],
        duration: "09:30",
        channel: "창의력 블록 놀이",
        parentTip: "집중력과 인내심을 길러주는 최고의 놀이입니다. 쓰러져도 다시 도전하는 칠전팔기 마음가짐을 격려해주세요."
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
