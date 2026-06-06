// 1. 統一設定圖片資料夾的路徑（請確認資料夾名稱是小寫的 images）
const IMAGE_BASE_PATH = "./images/"; 

// 2. 把 8 家企業的真實資料、圖檔名稱填進來
const companies = [
    { 
        id: "usig", 
        name: "台聚集團", 
        logo: "usig.png", // 💡 請改成你 images 資料夾裡台聚 Logo 的真實檔名（含副檔名）
        intro: "台聚集團為台灣石化產業先驅...",
        jobs: ["化學工程師", "行銷專員"],
        benefits: ["年終獎金", "定期健檢"]
    },
    { 
        id: "yamaha", 
        name: "台灣山葉機車工業股份有限公司", 
        logo: "yamaha.png", // 💡 改成山葉的真實圖檔名
        intro: "專注於機車研發與製造...",
        jobs: ["機械研發工程師", "生產管理師"],
        benefits: ["員工購車優惠", "完善培訓體制"]
    },
    { 
        id: "greatek", 
        name: "超豐電子股份有限公司", 
        logo: "greatek.png", // 💡 改成超豐的真實圖檔名
        intro: "台灣領先的半導體封裝測試廠...",
        jobs: ["設備製程工程師", "測試技術員"],
        benefits: ["分紅配股", "免費交通車"]
    },
    { 
        id: "pegatron", 
        name: "Pegatron和碩聯合科技", 
        logo: "pegatron.png", // 💡 改成和碩的真實圖檔名
        intro: "全球知名的電子代工及研發大廠...",
        jobs: ["軟體開發工程師", "硬體測試工程師"],
        benefits: ["彈性福利點數", "內部技術研討會"]
    },
    { 
        id: "tong-fang", 
        name: "同亨科技股份有限公司", 
        logo: "tongfang.png", // 💡 改成同亨的真實圖檔名
        intro: "專注於金融刷卡機與智慧支付終端設備...",
        jobs: ["韌體工程師", "全端網頁工程師"],
        benefits: ["績效獎金", "舒適辦公環境"]
    },
    { 
        id: "cal-comp", 
        name: "佳必琪國際股份有限公司", 
        logo: "calcomp.png", // 💡 改成佳必琪的真實圖檔名
        intro: "全球光通訊與高頻連接器核心供應商...",
        jobs: ["國外業務代表", "機構設計工程師"],
        benefits: ["國內外旅遊補助", "生日禮金"]
    },
    { 
        id: "acbel", 
        name: "艾克爾國際科技股份有限公司", 
        logo: "acbel.png", // 💡 改成艾克爾的真實圖檔名
        intro: "全球頂尖的半導體封裝與測試服務商...",
        jobs: ["製程工程師", "品管工程師"],
        benefits: ["優於勞基法的特休", "多元社團活動"]
    },
    { 
        id: "jie-bao", 
        name: "傑報人力資源顧問有限公司", 
        logo: "jiebao.png", // 💡 改成傑報的真實圖檔名
        intro: "提供全方位人力資源解決方案與企業諮詢...",
        jobs: ["人資招募顧問", "獵頭專員"],
        benefits: ["高額業績獎金", "完整的職涯規劃"]
    }
];

// 3. 自動渲染到網頁上 (這段保持原樣即可)
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("company-grid");
    if (gridContainer) gridContainer.innerHTML = ""; 

    companies.forEach(company => {
        const card = document.createElement("div");
        card.className = "company-card";
        
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
});

window.getCompanyData = function() {
    return companies;
};
