/* ==========================================================================
   BAN BYUNG-HYUN YOUTUBE MEDIA HUB - JAVASCRIPT APPLICATION LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. DATASET: Curated Videos Provided by User (Ban Byung-hyun Channel)
  const videoData = [
    {
      id: "v01",
      videoId: "O1uxjRYK3Gk",
      title: "반병현 half_bottle 공식 영상 01 - AI & 미래 기술",
      category: "ai",
      categoryName: "AI & 챗GPT",
      channel: "반병현 half_bottle",
      views: 185000,
      viewsFormatted: "18.5만회",
      duration: "15:20",
      durationSec: 920,
      date: "2024.03.10",
      description: "반병현 작가/개발자의 공식 유튜브 영상. AI 시대 기술 트렌드와 업무 효율 향상 팁 전수.",
      tags: ["반병현", "인공지능", "생성형AI", "업무자동화"]
    },
    {
      id: "v02",
      videoId: "YTPw9-SRDZ8",
      title: "코딩 공부는 이제 시간 낭비일까? (젠슨 황 발언과 개발자의 미래)",
      category: "python",
      categoryName: "파이썬 & 자동화",
      channel: "반병현 half_bottle",
      views: 310000,
      viewsFormatted: "31만회",
      duration: "18:40",
      durationSec: 1120,
      date: "2024.02.28",
      description: "엔비디아 젠슨 황 CEO의 '코딩 공부 필요 없다' 발언에 대한 개발자 반병현의 깊이 있는 분석과 코딩 교육의 방향성 제시.",
      tags: ["코딩공부", "젠슨황", "개발자미래", "AI코딩", "반병현"]
    },
    {
      id: "v03",
      videoId: "WS5WZsHyWbw",
      title: "반병현 half_bottle 공식 영상 03 - IT & 기술 이야기",
      category: "trend",
      categoryName: "2026 AI 트렌드 & 강연",
      channel: "반병현 half_bottle",
      views: 142000,
      viewsFormatted: "14.2만회",
      duration: "22:15",
      durationSec: 1335,
      date: "2024.01.18",
      description: "개발자이자 작가로서 느낀 최신 IT 기술 변화 및 AI 시대 준비 전략.",
      tags: ["IT리뷰", "기술트렌드", "개발자", "반병현"]
    },
    {
      id: "v04",
      videoId: "nH8sQlbzSS0",
      title: "과연 당신은 살아남을까? (AI 시대 직업과 미래 생존법)",
      category: "trend",
      categoryName: "2026 AI 트렌드 & 강연",
      channel: "반병현 half_bottle",
      views: 450000,
      viewsFormatted: "45만회",
      duration: "25:30",
      durationSec: 1530,
      date: "2024.04.05",
      description: "급변하는 AI 혁명 속에서 개인과 직장인이 살아남기 위한 필수 역량과 위기 대처 능력에 관한 강연.",
      tags: ["미래직업", "AI생존법", "생산성", "강연", "반병현"]
    },
    {
      id: "v05",
      videoId: "EIjTXxWq3t0",
      title: "반병현 half_bottle 공식 영상 05 - 자동화 노하우",
      category: "python",
      categoryName: "파이썬 & 자동화",
      channel: "반병현 half_bottle",
      views: 128000,
      viewsFormatted: "12.8만회",
      duration: "16:45",
      durationSec: 1005,
      date: "2023.11.20",
      description: "일상의 귀찮은 일들을 코딩과 자동화로 단 1초 만에 해결하는 반병현 작가만의 핵심 노하우.",
      tags: ["업무자동화", "파이썬", "생산성", "반병현"]
    },
    {
      id: "v06",
      videoId: "v4fgCAHeDrM",
      title: "AI 때문에 직업이 사라진다는데 (Feat. 심리학과 인간의 역할)",
      category: "interview",
      categoryName: "인터뷰 & 미디어",
      channel: "반병현 half_bottle",
      views: 290000,
      viewsFormatted: "29만회",
      duration: "21:10",
      durationSec: 1270,
      date: "2024.03.22",
      description: "AI로 인한 일자리 대체 공포와 인공지능 시대를 대하는 인간의 심리적 기제, 대체 불가능한 역량 분석.",
      tags: ["AI일자리", "심리학", "미래사회", "반병현"]
    },
    {
      id: "v07",
      videoId: "GkGA8Eb3DfM",
      title: "반병현 half_bottle 공식 영상 07 - AI 툴 활용법",
      category: "copilot",
      categoryName: "코파일럿 & 툴",
      channel: "반병현 half_bottle",
      views: 165000,
      viewsFormatted: "16.5만회",
      duration: "19:50",
      durationSec: 1190,
      date: "2024.05.12",
      description: "최신 AI 생산성 도구 실무 활용법 및 코파일럿, 바이브 코딩 테크닉 안내.",
      tags: ["AI툴", "코파일럿", "바이브코딩", "반병현"]
    },
    {
      id: "v08",
      videoId: "i-eWUY2JBs8",
      title: "중국인들이 제 논문을 훔쳐갔습니다 | 논문표절사건 솔직 고백",
      category: "interview",
      categoryName: "인터뷰 & 미디어",
      channel: "반병현 half_bottle",
      views: 680000,
      viewsFormatted: "68만회",
      duration: "17:40",
      durationSec: 1060,
      date: "2023.08.14",
      description: "KAIST 저자 반병현의 연구 논문 표절 사건 전말과 지식재산권, 기술 보안에 관한 흥미진진한 비하인드 스토리.",
      tags: ["논문표절", "KAIST", "지식재산권", "반병현", "비하인드"]
    },
    {
      id: "v09",
      videoId: "UWWih9irM6g",
      title: "한국인이 좋아하는 속도로 때려넣는 IT리뷰 Microsoft 365 코파일럿",
      category: "copilot",
      categoryName: "코파일럿 & 툴",
      channel: "반병현 half_bottle",
      views: 230000,
      viewsFormatted: "23만회",
      duration: "14:15",
      durationSec: 855,
      date: "2024.01.05",
      description: "마이크로소프트 365 코파일럿(Copilot)의 모든 핵심 기능을 초고속으로 정리하는 10분 완성 IT 리뷰.",
      tags: ["마이크로소프트", "코파일럿", "Copilot", "IT리뷰", "반병현"]
    },
    {
      id: "v10",
      videoId: "AbQHhYNUXuY",
      title: "반병현 half_bottle 공식 영상 10 - AI 트렌드 최종정리",
      category: "ai",
      categoryName: "AI & 챗GPT",
      channel: "반병현 half_bottle",
      views: 210000,
      viewsFormatted: "21만회",
      duration: "20:00",
      durationSec: 1200,
      date: "2024.06.01",
      description: "챗GPT와 생성형 AI 기술 트렌드 및 실무 적용 사례 종합 가이드.",
      tags: ["챗GPT", "생성형AI", "AI트렌드", "반병현"]
    }
  ];

  // 2. APP STATE
  const state = {
    searchQuery: "",
    selectedCategory: "all",
    favoritesOnly: false,
    sortBy: "latest",
    bookmarks: JSON.parse(localStorage.getItem('ban_byunghyun_bookmarks') || '[]'),
    currentTheme: localStorage.getItem('ban_byunghyun_theme') || 'dark',
    activeModalVideoId: null
  };

  // 3. DOM ELEMENTS
  const videoGrid = document.getElementById('videoGrid');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryPills = document.getElementById('categoryPills');
  const sortSelect = document.getElementById('sortSelect');
  const favoriteOnlyToggle = document.getElementById('favoriteOnlyToggle');
  const bookmarkToggleBtn = document.getElementById('bookmarkToggleBtn');
  const bookmarkCountBadge = document.getElementById('bookmarkCountBadge');
  const resultCountText = document.getElementById('resultCountText');
  const activeFilterTag = document.getElementById('activeFilterTag');
  const emptyState = document.getElementById('emptyState');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const totalVideoCountEl = document.getElementById('totalVideoCount');
  
  // Theme Toggle Elements
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Video Modal Elements
  const videoModal = document.getElementById('videoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalIframe = document.getElementById('modalIframe');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalChannel = document.getElementById('modalChannel');
  const modalViews = document.getElementById('modalViews');
  const modalDate = document.getElementById('modalDate');
  const modalDuration = document.getElementById('modalDuration');
  const modalDescription = document.getElementById('modalDescription');
  const modalTags = document.getElementById('modalTags');
  const modalBookmarkBtn = document.getElementById('modalBookmarkBtn');
  const modalShareBtn = document.getElementById('modalShareBtn');
  const modalDirectYoutubeLink = document.getElementById('modalDirectYoutubeLink');

  // 4. INITIALIZATION
  function init() {
    // Set Theme
    applyTheme(state.currentTheme);

    // Set Total Stat
    totalVideoCountEl.textContent = videoData.length;

    // Initial Render
    render();

    // Event Listeners
    setupEventListeners();
  }

  // 5. EVENT LISTENERS SETUP
  function setupEventListeners() {
    // Search Input
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      render();
    });

    // Clear Search
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      render();
    });

    // Category Filter Pills
    categoryPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.cat-pill');
      if (!pill) return;

      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      state.selectedCategory = pill.dataset.category;
      render();
    });

    // Sort Dropdown
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });

    // Favorites Only Toggle
    favoriteOnlyToggle.addEventListener('click', () => {
      state.favoritesOnly = !state.favoritesOnly;
      favoriteOnlyToggle.classList.toggle('active', state.favoritesOnly);
      favoriteOnlyToggle.querySelector('i').className = state.favoritesOnly ? 'fa-solid fa-star' : 'fa-regular fa-star';
      render();
    });

    // Bookmark Top Button
    bookmarkToggleBtn.addEventListener('click', () => {
      state.favoritesOnly = !state.favoritesOnly;
      favoriteOnlyToggle.classList.toggle('active', state.favoritesOnly);
      favoriteOnlyToggle.querySelector('i').className = state.favoritesOnly ? 'fa-solid fa-star' : 'fa-regular fa-star';
      render();

      if (state.favoritesOnly) {
        showToast("저장한 영상 목록을 표시합니다.");
      }
    });

    // Reset Filters Button (Empty State)
    resetFiltersBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.selectedCategory = 'all';
      state.favoritesOnly = false;
      state.sortBy = 'latest';

      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      sortSelect.value = 'latest';
      favoriteOnlyToggle.classList.remove('active');
      favoriteOnlyToggle.querySelector('i').className = 'fa-regular fa-star';

      document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
      document.querySelector('.cat-pill[data-category="all"]').classList.add('active');

      render();
    });

    // Theme Switch
    themeToggleBtn.addEventListener('click', () => {
      state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(state.currentTheme);
      localStorage.setItem('ban_byunghyun_theme', state.currentTheme);
      showToast(`${state.currentTheme === 'dark' ? '다크' : '라이트'} 모드로 전환되었습니다.`);
    });

    // Modal Close Events
    modalCloseBtn.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
      }
    });

    // Modal Bookmark Toggle
    modalBookmarkBtn.addEventListener('click', () => {
      if (!state.activeModalVideoId) return;
      toggleBookmark(state.activeModalVideoId);
      updateModalBookmarkState();
    });

    // Modal Share Button
    modalShareBtn.addEventListener('click', () => {
      if (!state.activeModalVideoId) return;
      const video = videoData.find(v => v.id === state.activeModalVideoId);
      if (video) {
        const url = `https://www.youtube.com/watch?v=${video.videoId}`;
        navigator.clipboard.writeText(url).then(() => {
          showToast("유튜브 링크가 클립보드에 복사되었습니다!");
        }).catch(() => {
          showToast("링크 복사에 실패했습니다.");
        });
      }
    });
  }

  // 6. RENDER LOGIC
  function render() {
    // Update Bookmark Badge
    bookmarkCountBadge.textContent = state.bookmarks.length;

    // Filter Data
    let filtered = videoData.filter(video => {
      // Category Filter
      if (state.selectedCategory !== 'all' && video.category !== state.selectedCategory) {
        return false;
      }

      // Favorites Filter
      if (state.favoritesOnly && !state.bookmarks.includes(video.id)) {
        return false;
      }

      // Search Query Filter
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        const matchesTitle = video.title.toLowerCase().includes(query);
        const matchesDesc = video.description.toLowerCase().includes(query);
        const matchesChannel = video.channel.toLowerCase().includes(query);
        const matchesTags = video.tags.some(tag => tag.toLowerCase().includes(query));
        return matchesTitle || matchesDesc || matchesChannel || matchesTags;
      }

      return true;
    });

    // Sort Data
    filtered.sort((a, b) => {
      if (state.sortBy === 'latest') {
        return new Date(b.date.replace(/\./g, '-')) - new Date(a.date.replace(/\./g, '-'));
      } else if (state.sortBy === 'popular') {
        return b.views - a.views;
      } else if (state.sortBy === 'title') {
        return a.title.localeCompare(b.title, 'ko');
      } else if (state.sortBy === 'duration') {
        return b.durationSec - a.durationSec;
      }
      return 0;
    });

    // Update Result Info Bar
    resultCountText.innerHTML = `영상 <strong>${filtered.length}</strong>개 검색됨`;

    if (state.searchQuery || state.selectedCategory !== 'all' || state.favoritesOnly) {
      const activeFilters = [];
      if (state.selectedCategory !== 'all') {
        const catObj = videoData.find(v => v.category === state.selectedCategory);
        if (catObj) activeFilters.push(`카테고리: ${catObj.categoryName}`);
      }
      if (state.favoritesOnly) activeFilters.push('저장한 영상만');
      if (state.searchQuery) activeFilters.push(`검색: "${state.searchQuery}"`);

      activeFilterTag.textContent = activeFilters.join(' | ');
      activeFilterTag.style.display = 'inline-block';
    } else {
      activeFilterTag.style.display = 'none';
    }

    // Toggle Empty State
    if (filtered.length === 0) {
      videoGrid.style.display = 'none';
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
      videoGrid.style.display = 'grid';
      renderVideoCards(filtered);
    }
  }

  // 7. RENDER VIDEO CARDS
  function renderVideoCards(videos) {
    videoGrid.innerHTML = videos.map(video => {
      const isSaved = state.bookmarks.includes(video.id);
      const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;

      return `
        <article class="video-card" data-id="${video.id}">
          <div class="thumbnail-container">
            <img src="${thumbnailUrl}" alt="${escapeHtml(video.title)}" class="thumbnail-img" loading="lazy">
            <div class="play-overlay">
              <div class="play-circle"><i class="fa-solid fa-play"></i></div>
            </div>
            <span class="card-cat-badge">${escapeHtml(video.categoryName)}</span>
            <span class="duration-badge">${video.duration}</span>
            <button class="bookmark-card-btn ${isSaved ? 'saved' : ''}" data-id="${video.id}" title="${isSaved ? '북마크 해제' : '북마크 저장'}" onclick="event.stopPropagation();">
              <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
            </button>
          </div>

          <div class="card-content">
            <h3 class="card-title">${escapeHtml(video.title)}</h3>
            <div class="card-meta">
              <span class="card-channel"><i class="fa-solid fa-circle-user"></i> ${escapeHtml(video.channel)}</span>
              <span>•</span>
              <span>${video.viewsFormatted}</span>
              <span>•</span>
              <span>${video.date}</span>
            </div>
            <p class="card-description">${escapeHtml(video.description)}</p>

            <div class="card-footer">
              <div class="card-tags">
                ${video.tags.slice(0, 2).map(tag => `<span class="mini-tag">#${escapeHtml(tag)}</span>`).join('')}
              </div>
              <span class="play-text-btn">시청하기 <i class="fa-solid fa-chevron-right"></i></span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Card Click Events
    document.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        openModal(id);
      });
    });

    // Attach Card Bookmark Events
    document.querySelectorAll('.bookmark-card-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        toggleBookmark(id);
      });
    });
  }

  // 8. BOOKMARK MANAGEMENT
  function toggleBookmark(videoId) {
    const index = state.bookmarks.indexOf(videoId);
    let message = "";
    if (index > -1) {
      state.bookmarks.splice(index, 1);
      message = "저장 목록에서 삭제되었습니다.";
    } else {
      state.bookmarks.push(videoId);
      message = "내 저장 목록에 추가되었습니다!";
    }
    localStorage.setItem('ban_byunghyun_bookmarks', JSON.stringify(state.bookmarks));
    showToast(message);
    render();
  }

  // 9. MODAL PLAYER LOGIC
  function openModal(videoId) {
    const video = videoData.find(v => v.id === videoId);
    if (!video) return;

    state.activeModalVideoId = videoId;

    // Load Youtube Iframe Player
    modalIframe.src = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;

    // Fill Content
    modalTitle.textContent = video.title;
    modalCategory.textContent = video.categoryName;
    modalChannel.textContent = video.channel;
    modalViews.textContent = `조회수 ${video.viewsFormatted}`;
    modalDate.textContent = video.date;
    modalDuration.textContent = video.duration;
    modalDescription.textContent = video.description;
    modalDirectYoutubeLink.href = `https://www.youtube.com/watch?v=${video.videoId}`;

    // Tags
    modalTags.innerHTML = video.tags.map(t => `<span class="modal-tag">#${escapeHtml(t)}</span>`).join('');

    // Update Bookmark State
    updateModalBookmarkState();

    // Show Modal
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    videoModal.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
    state.activeModalVideoId = null;
  }

  function updateModalBookmarkState() {
    if (!state.activeModalVideoId) return;
    const isSaved = state.bookmarks.includes(state.activeModalVideoId);
    modalBookmarkBtn.innerHTML = `<i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>`;
    modalBookmarkBtn.style.color = isSaved ? '#f59e0b' : '';
    modalBookmarkBtn.title = isSaved ? '북마크 해제' : '북마크 저장';
  }

  // 10. THEME MANAGEMENT
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      themeIcon.className = 'fa-solid fa-moon';
      themeToggleBtn.title = '라이트 모드로 전환';
    } else {
      themeIcon.className = 'fa-solid fa-sun';
      themeToggleBtn.title = '다크 모드로 전환';
    }
  }

  // 11. TOAST NOTIFICATIONS
  function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${escapeHtml(message)}`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Helper Utility: HTML Escaping
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Run App
  init();

});
