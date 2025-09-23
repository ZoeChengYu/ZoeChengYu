// 等待 HTML 文件完全載入並解析後再執行腳本
document.addEventListener('DOMContentLoaded', () => {
    
    // 獲取頁面上的元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // 為 "切換模式" 按鈕添加點擊事件監聽器
    themeToggleButton.addEventListener('click', () => {
        // 使用 classList.toggle 方法來添加或移除 'light-mode' class
        // 如果 body 已經有 'light-mode' class，則移除它；如果沒有，則添加它。
        body.classList.toggle('light-mode');
    });

});
