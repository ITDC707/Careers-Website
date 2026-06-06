// 1. 建立 8 家企業的資料陣列 (Array of Objects)
const companies = [
    {
        id: "tech-nova",
        name: "未來科技股份有限公司",
        tag: "軟體研發 / AI 應用",
        logo: "🚀", // 暫時用 Emoji，之後可以換成圖片路徑如 "images/logo1.png"
        desc: "引領 AI 新時代，專注於智慧生活、大型語言模型整合與雲端技術的創新團隊。"
    },
    {
        id: "green-energy",
        name: "永續綠能整合行銷",
        tag: "綠能科技 / 品牌行銷",
        logo: "⚡",
        desc: "致力於台灣再生能源推廣，提供最前瞻的綠色商務與品牌數位轉型解決方案。"
    },
    {
        id: "cyber-shield",
        name: "藍盾資安防禦實驗室",
        tag: "網路安全 / 雲端防護",
        logo: "🛡️",
        desc: "企業級資安防護專家，提供滲透測試、弱點掃描及二十四小時主動式防禦監控。"
    },
    {
        id: "alpha-finance",
        name: "阿爾發量化金融科技",
        tag: "金融科技 / 投資演算法",
        logo: "📈",
        desc: "結合大數據與機器學習，建構自動化量化交易模型，打造新一代智慧理財平台。"
    },
    {
        id: "mega-logistics",
        name: "美加智慧倉儲物流",
        tag: "智慧物流 / 供應鏈",
        logo: "📦",
        desc: "運用物聯網（IoT）與自動化無人搬運車，翻轉傳統倉儲，打造高效率冷鏈物流。"
    },
    {
        id: "bio-health",
        name: "維他生醫晶片研發",
        tag: "生技醫療 / 晶片設計",
        logo: "🧬",
        desc: "專注於定點照護（POCT）檢測晶片開發，用科技縮短精準醫療與大眾的距離。"
    },
    {
        id: "nexus-design",
        name: "連結點互動設計創意",
        tag: "UIUX / 網頁視覺",
        logo: "🎨",
        desc: "結合美學與使用者體驗，專門為上市櫃企業打造頂級品牌形象官網與 App 介面。"
    },
    {
        id: "edu-spark",
        name: "火花數位引航教育",
        tag: "線上教育 / EdTech",
        logo: "🎓",
        desc: "打破時空限制，透過遊戲化學習與線上互動系統，重塑未來世代的數位學習體驗。"
    }
];

// 2. 當網頁載入完成後，自動將資料渲染到 HTML 中
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("company-grid");
    
    // 先清空原本在 HTML 裡寫死的那兩張測試卡片
    gridContainer.innerHTML = "";

    // 用迴圈把 8 家公司的資料一依依生出來
    companies.forEach(company => {
        // 建立一個卡片的 div 元素
        const card = document.createElement("div");
        card.className = "company-card";
        
        // 設定點擊卡片時的反應 (目前先跳出警示視窗測試，下一階段再換成換頁功能)
        card.onclick = () => {
            alert(`你點擊了：${company.name}！接下來準備進入詳細分頁...`);
        };

        // 把資料組合進卡片內
        card.innerHTML = `
            <div class="card-logo">${company.logo}</div>
            <h3 class="card-title">${company.name}</h3>
            <span class="card-tag">${company.tag}</span>
            <p class="card-desc">${company.desc}</p>
            <div class="card-footer">查看職缺 →</div>
        `;

        // 將做好的卡片塞進主網格容器中
        gridContainer.appendChild(card);
    });
});