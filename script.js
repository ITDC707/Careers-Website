// 1. 在最上方統一設定圖片資料夾的路徑
// 如果在同一個資料夾，就保持 "./"
// 如果你建了一個叫 images 的資料夾，就改成 "./images/"
const IMAGE_BASE_PATH = "E:\114學年度\網頁\index\Careers-Website"; 

// 2. 企業資料陣列：此時 logo 欄位只需要寫「純檔名」
const companies = [
    { id: "company-1", name: "台聚集團", logo: "01.png" },
    { id: "company-2", name: "台灣山葉機車工業股份有限公司", logo: "02.png" },
    { id: "company-3", name: "超豐電子股份有限公司", logo: "03.jpg" },
    { id: "company-4", name: "Pegatron和碩聯合科技", logo: "04.png" },
    { id: "company-5", name: "同亨科技股份有限公司", logo: "05.jpg" },
    { id: "company-6", name: "佳必琪國際股份有限公司", logo: "06.png" },
    { id: "company-7", name: "艾克爾國際科技股份有限公司", logo: "07.jpg" },
    { id: "company-8", name: "傑報人力資源顧問有限公司", logo: "08.png" }
];

// 3. 自動渲染到網頁上
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("company-grid");
    gridContainer.innerHTML = ""; // 清空

    companies.forEach(company => {
        const card = document.createElement("div");
        card.className = "company-card";
        
        card.onclick = () => {
            alert(`準備進入 ${company.name} 的詳細介紹與職缺分頁！`);
        };

        // 💡 關鍵就在這裡：把「基本路徑」和「圖片檔名」字串拼接起來！
        const fullLogoPath = IMAGE_BASE_PATH + company.logo;

        card.innerHTML = `
            <div class="card-logo-container">
                <img src="${fullLogoPath}" alt="${company.name} Logo" class="company-logo-img">
            </div>
            <h3 class="card-title">${company.name}</h3>
            <div class="card-footer">查看職缺 →</div>
        `;

        gridContainer.appendChild(card);
    });
});
