// 日付オブジェクトを宣言
const today = new Date();

// 日付の各部分を取得
const [month, day, year] = [
    today.getMonth() + 1, // 月は0から始まるため、+1
    today.getDate(),
    today.getFullYear(),
];

// 日付をコンソールに出力
console.log(`本日の日付は: ${year}年${month}月${day}日`);