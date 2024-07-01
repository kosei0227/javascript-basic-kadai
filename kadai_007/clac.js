//ランダムの変数の定義
let clac_num = Math.floor(Math.random()*100);

console.log(clac_num);

//if文
//プログラムは上から実行されるので条件の多い選択肢を上に配置
if(clac_num%3===0 && clac_num%5===0) {
    console.log('３と５の倍数です');
}
else if (clac_num%5===0) {
    console.log('５の倍数です');
}
else if (clac_num%3===0 ) {
    console.log('３の倍数です');
}
else {
    console.log(clac_num);
}