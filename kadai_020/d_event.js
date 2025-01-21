// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const parentList =document.getElementById('text');

// HTML要素がクリックされたときに、イベント処理を実行する
btn.addEventListener('click', () => {

    // li要素を新しく作成する
    const childList = document.getElementById('text');
    childList.textContent = 'ボタンをクリックしました';  
});
