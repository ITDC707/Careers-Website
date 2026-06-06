const IMAGE_BASE_PATH = "./images/"; 

// 異步讀取瘦身版 companies.json 清單並渲染主頁
async function loadCompanyList() {
    try {
        const response = await fetch('./companies.json');
        if (!response.ok) throw new Error('無法讀取企業清單');
        
        const companyList = await response.json();
        renderCompanyGrid(companyList);
    } catch (error) {
        console.error('讀取主頁清單錯誤:', error);
    }
}

// 渲染主網頁卡片的邏輯
function renderCompanyGrid(list) {
    const gridContainer = document.getElementById("company-grid");
    if (!gridContainer) return; // 如果不是在主頁，就直接跳出
    
    gridContainer.innerHTML = ""; 

    list.forEach(company => {
        const card = document.createElement("div");
        card.className = "company-card";
        
        // 點擊卡片時，將公司的 id 帶去給 detail.html
        card.onclick = () => {
            window.location.href = `detail.html?id=${company.id}`;
        };

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
}

// 網頁載入完成後立刻執行
document.addEventListener("DOMContentLoaded", () => {
    loadCompanyList();
});
