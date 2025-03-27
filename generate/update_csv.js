import fs from 'fs';
import fetch from 'node-fetch';

const SHEET_URL = '';

async function fetchCSV() {
    try {
        const response = await fetch(SHEET_URL);
        const csvData = await response.text();

        fs.writeFileSync("data.csv", csvData);
        console.log("✅ data.csv 更新成功！");
    } catch (error) {
        console.error("❌ 發生錯誤：", error);
    }
}

fetchCSV();
