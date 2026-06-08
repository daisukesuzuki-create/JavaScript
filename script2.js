//1.合計点数算出
console.log("1.合計点算出");
const japanese = 100;
const math = 80;
const english = 75;
const science = 70;
const social = 80;
const total = japanese + math + english + science + social;
console.log(total);

//2.引き算
console.log("2.引き算");
const minus = 100000 - 80000;
console.log(minus);

//3.掛け算
console.log("3.掛け算");
const multiply = 32 * 64;
console.log(multiply);

//4.割算
console.log("4.割算");
const division = 10 / 2;
console.log(division);

//5.インクリメント演算子
console.log("5.インクリメント演算子");
let num = 3;
num++;
console.log(num);

//6.ディクリメント演算子
console.log("6.ディクリメント演算子");
let num2 = 0;
num2--;
console.log(num2);

//7.if文比較
console.log("7.if文比較");
const a = 8000;
const b = 12000;
if (a > b) {
    console.log("A君の方が多い");
} else if (b > a) {
    console.log("B君の方が多い");
} else {
    console.log("同じ金額");
}

//8.if文比較
console.log("8.if文比較");
const A = 8000;
const B = 12000;
const C = 3000;
if (A === B && B === C) {
    console.log("全員同じ金額");
} else if (A === B && A > C) {
    console.log("A君とB君が同率1位");
} else if (A === C && A > B) {
    console.log("A君とC君が同率1位");
} else if (B === C && B > A) {
    console.log("B君とC君が同率1位");
} else if (A > B && A > C) {
    console.log("A君が一番多い");
} else if (B > A && B > C) {
    console.log("B君が一番多い");
} else {
    console.log("C君が一番多い");
}

//9.点数に応じてメッセージをアラート表示してください
console.log("9.点数に応じてメッセージをアラート表示");
/*
- 点数が 100点なら「満点！！」
- 点数が 80点以上なら「合格です」
- 点数が 30点以下なら「赤点です」；これだと条件不備のため30点以上で指定します
- それ以外なら「不合格です」
*/
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    const score = Math.floor(Math.random() * 100) + 1;
    if (score === 100) {
        alert("満点！！");
    } else if (score >= 80) {
        alert(score + "点で" + "合格です");
    } else if (score >= 30) {
        alert(score + "点で" + "赤点です");
    } else {
        alert(score + "点で" + "不合格です");
    }
});

//10.switch文を使用して入力値に応じた結果を表示してください
console.log("10.switch文を使用");
const input = document.getElementById("myInput");
input.addEventListener("input", () => {
    const value = input.value;
    switch (value) {
        case "saitama":
            console.log("埼玉");
            break;
        case "tokyo":
            console.log("東京");
            break;
        case "kanagawa":
            console.log("神奈川");
            break;
        default:
            console.log("未確認");
    }
});

//Mathオブジェクトを使ってみよう

//11.ランダムな値
console.log("11.ランダムな値");
const getRandomNumber = () => {
    return Math.floor(Math.random() * 100 + 1);
}
console.log(getRandomNumber());

//12.最も高い数値
console.log("12.最も高い数値");
const MaxValue = Math.max(1, 4, 6);
console.log(MaxValue);

//13.最も低い数値
console.log("13.最も低い数値");
const MinValue = Math.min(1, 4, 6,);
console.log(MinValue);

//for文を使用してループ処理を練習しましょう

//14.10回実行
console.log("14.10回実行");
for (let i = 0; i < 10; i++) {
    console.log("実行");
}

//15.配列の中身を表示
console.log("15.配列の中身を表示");
const fluits = ["apple", "banana", "cat"];
for (let i = 0; i < fluits.length; i++) {
    console.group(fluits[i]);
}

//16.配列の合計
console.log("16.配列の合計");
const array = [1, 2, 3];
const arraySum = 0;
for (let i = 0; i < arraySum.length; i++) {
    arraySum += array[i];
}
console.log(arraySum);

//17.配列の分割
console.log("17.配列の分割");
const A17 = [1, "hoge", 2, "huga", 3, "piyo"];
const strings = [];
const numbers = [];
for (let i = 0; i < A.length; i++) {
    if (typeof (A17[i]) === "strings") {
        strings.push(strings[i]);
    } else if (typeof (A17[i] === "number")) {
        numbers.push(numbers[i]);
    }
}
console.log(strings);
console.log(numbers);

//18.奇数のみ足し算
console.log("18.奇数のみ足し算");
let totalOdd = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        continue;
    }
    totalOdd += i;
}
console.log(totalOdd);

//19.forEachを使ってループ処理
console.log("19.forEachを使ってループ処理");
const fruits = ['apple', 'banana', 'cat'];
fruits.forEach(item => {
    console.log(item);
});

//20.while文を使ってループ処理
console.log("20.while文を使ってループ処理");
let i = 0;
while (i < 10) {
    console.log("実行");
    i++;
}

//21.繰り返し文の用途
console.log("21.繰り返し文の用途");

// for文：回数が決まっているときに使う(5回表示)
console.log("・for文");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// forEach：配列をループしたいときに使う
console.log("・forEach");
const fruits21 = ['apple', 'banana', 'cat'];
fruits21.forEach(item => {
    console.log(item);
});

// while文：条件が満たされるまで繰り返すときに使う
console.log("・while文");
let i21 = 0;
while (i21 < 5) {
    console.log("実行");
    i21++;
}

//配列メソッドを練習しましょう
//22.mapメソッド
console.log("22.mapメソッド");
const numbers22 = [2, 4, 6, 8];
const result22 = numbers22.map(num => num * 2);
console.log(result22);

//23.someメソッド
console.log("23.someメソッド");
const numbers23 = [2, 4, 6, 7];
const hasOdd = numbers23.some(num => {
    return num % 2 === 1;
});
console.log(hasOdd);

//24.everyメソッド
console.log("24.everyメソッド");
const users24 = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
];
const allSubmitted = users24.every(user => user.hasSubmitted === true);
console.log(allSubmitted);

//25.filterメソッド
console.log("25.filterメソッド");
const users25 = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
];
const submittedUsers = users25.filter(user => {
    return user.hasSubmitted === true;
});
console.log(submittedUsers);

//26.sortメソッド
console.log("26.sortメソッド");
const users26 = [
    { id: 323, hasSubmitted: true },
    { id: 111, hasSubmitted: false },
    { id: 268, hasSubmitted: true },
];
users26.sort((a, b) => a.id - b.id);
console.log(users26);