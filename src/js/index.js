import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
    // 獲取所有計數器元素
    const counterElements = document.querySelectorAll('.counter-count');

    // 為每個計數器元素執行動畫
    counterElements.forEach(function (element) {
        // 獲取目標數值
        const targetValue = parseInt(element.textContent);

        // 檢查是否有 counter-plus class
        const hasPlusClass = element.classList.contains('counter-plus');

        // 設置初始值
        let currentValue = 0;

        // 動畫持續時間（毫秒）
        const duration = 3000;

        // 計算動畫開始時間
        const startTime = performance.now();

        // 數字格式化函數 - 添加逗號分隔符
        function formatNumber(num) {
            return num.toLocaleString('en-US');
        }

        // 動畫函數
        function animateCounter(currentTime) {
            // 計算已過時間
            const elapsed = currentTime - startTime;

            // 計算進度（0 到 1）
            const progress = Math.min(elapsed / duration, 1);

            // 使用 easeOutQuart 緩動函數（類似 jQuery 的 swing）
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            // 計算當前值
            currentValue = Math.ceil(targetValue * easeOutQuart);

            // 更新顯示 - 使用格式化函數
            element.textContent = formatNumber(currentValue);

            // 如果動畫未完成，繼續動畫
            if (progress < 1) {
                requestAnimationFrame(animateCounter);
            } else {
                // 動畫完成後，如果有 counter-plus class，添加 + 符號
                if (hasPlusClass) {
                    element.textContent = formatNumber(currentValue) + '+';
                }
            }
        }

        // 開始動畫
        requestAnimationFrame(animateCounter);
    });

    var splide = new Splide('.splide', {
        type: 'loop',
        focus: 'center',
        gap: '2rem',
        pagination: false,
        lazyLoad: 'nearby',
        breakpoints: {
            768: {
                padding: '10rem',
            },
            576: {
                padding: '5rem',
                gap: '1rem',
            },
        },
    });

    splide.mount();
});