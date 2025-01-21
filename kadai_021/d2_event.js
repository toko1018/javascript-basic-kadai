// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const parentList =document.getElementById('text');

// HTML要素がクリックされたときに、イベント処理を実行する
btn.addEventListener('click', () => {

    // li要素を新しく作成する
    const childList = document.getElementById('text');
    childList.textContent = 'ボタンをクリックしました';  


    // 2秒後 (2000ミリ秒) の待ち時間を設定し、非同期処理を実行する
    setTimeout(() => {
        const text = document.getElementById('text');
        text.textContent = 'ボタンをクリックしました';
    }, 2000);

});