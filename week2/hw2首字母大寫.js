function capitalize(str) {
    return str.replace(/^[a-z]/, (c) => c.toUpperCase());
}
console.log(capitalize('hello'));
console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));

//使用 replace() 進行字串內容變更
//regex : " ^ " 告知要比較的是字串首字
//regex : [a-z] 告知匹配條件為小寫字母 a-z
//將過濾出來是小寫字母的字首的，最後以 c 作為引數，傳入函數式把字首換成大寫
//regex (regular expression) 正規表示式，是一個可以多方利用的搜尋篩選替換的概念，很多程式語言都可以應用