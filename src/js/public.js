document.addEventListener('DOMContentLoaded', function () {
    // 平滑滾動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            console.log(target);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 導航欄滾動效果
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // 搜尋框動畫效果 - 桌面版
    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    let isSearchActive = false;

    // 搜尋框動畫效果 - 手機版
    const searchBoxMobile = document.getElementById('searchBoxMobile');
    const searchButtonMobile = document.getElementById('searchButtonMobile');
    const searchInputMobile = document.getElementById('searchInputMobile');
    let isSearchActiveMobile = false;

    // 初始化搜尋框功能
    function initSearchBox(searchBox, searchButton, searchInput, isSearchActiveRef) {
        if (!searchBox || !searchButton || !searchInput) return;

        // 點擊搜尋按鈕切換搜尋框狀態
        searchButton.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (!isSearchActiveRef.value) {
                // 展開搜尋框
                searchBox.classList.add('active');
                searchInput.style.opacity = '1';
                searchInput.style.width = '100px';
                searchInput.style.padding = '4px 4px';
                // searchInput.style.transform = 'translateY(-50%) translateX(0px)';
                searchInput.focus();
                isSearchActiveRef.value = true;
            } else {
                // 執行搜尋或收起搜尋框
                if (searchInput.value.trim() !== '') {
                    // 這裡可以添加搜尋邏輯
                    console.log('搜尋:', searchInput.value);
                    // 可以重定向到搜尋結果頁面或執行 AJAX 搜尋
                } else {
                    // 收起搜尋框
                    closeSearchBox(searchBox, searchInput, isSearchActiveRef);
                }
            }
        });

        // 按 ESC 鍵收起搜尋框
        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                closeSearchBox(searchBox, searchInput, isSearchActiveRef);
            } else if (e.key === 'Enter') {
                // 執行搜尋
                if (searchInput.value.trim() !== '') {
                    console.log('搜尋:', searchInput.value);
                    // 可以重定向到搜尋結果頁面或執行 AJAX 搜尋
                }
            }
        });
    }

    // 收起搜尋框的函數
    function closeSearchBox(searchBox, searchInput, isSearchActiveRef) {
        searchBox.classList.remove('active');
        searchInput.style.opacity = '0';
        searchInput.style.width = '0px';
        searchInput.style.padding = '0';
        // searchInput.style.transform = 'translateY(-50%) translateX(20px)';
        searchInput.value = '';
        searchInput.blur();
        isSearchActiveRef.value = false;
    }

    // 初始化桌面版搜尋框
    const desktopSearchActive = { value: false };
    initSearchBox(searchBox, searchButton, searchInput, desktopSearchActive);

    // 初始化手機版搜尋框
    const mobileSearchActive = { value: false };
    initSearchBox(searchBoxMobile, searchButtonMobile, searchInputMobile, mobileSearchActive);

    // 點擊搜尋框外部時收起搜尋框
    document.addEventListener('click', function (e) {
        // 桌面版搜尋框
        if (desktopSearchActive.value && searchBox && !searchBox.contains(e.target)) {
            closeSearchBox(searchBox, searchInput, desktopSearchActive);
        }

        // 手機版搜尋框
        if (mobileSearchActive.value && searchBoxMobile && !searchBoxMobile.contains(e.target)) {
            closeSearchBox(searchBoxMobile, searchInputMobile, mobileSearchActive);
        }
    });

    // Go Top Button
    // document.addEventListener('DOMContentLoaded', function () {
        const goTopBtn = document.getElementById('goTopBtn');

        if (!goTopBtn) return;

        // 監聽滾動事件
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                goTopBtn.classList.add('show');
            } else {
                goTopBtn.classList.remove('show');
            }
        });

        // 點擊回到頂部
        goTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    // });
});