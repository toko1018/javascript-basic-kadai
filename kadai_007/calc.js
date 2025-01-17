// 変数numに1以上の正の数を代入する
let num = Math.floor(Math.random() * 100) + 1;

// 変数numの値を出力する (確認用)
    console.log('num:', num);

// もし変数numが、3と5の倍数ならば、「3と5の倍数です」という文字列を出力する
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
}

// もし変数numが、3の倍数ならば、「3の倍数です」という文字列を出力する
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

// もし変数numが、5の倍数ならば、「5の倍数です」という文字列を出力する
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

// それ以外のときは、「変数numの値」を出力する
else {
    console.log(num);
}
