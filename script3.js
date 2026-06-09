//1.JSON文字列をJavaScriptオブジェクトに変換しましょう
console.log("1.JSON文字列をJavaScriptオブジェクトに変換");
const jsonString = '{"name":"Taro", "age":42, "gender": "male"}';
const obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.age);

//2.JavaScriptオブジェクトをJSON文字列に変換しましょう
console.log("2.JavaScriptオブジェクトをJSON文字列に変換");
const user = { name: "Taro", Age: 13, gender: "male" };
const json = JSON.stringify(user);
console.log(json);

//フォームバリデーションの実装
//名前
console.log("・名前")
const nameCheck = document.getElementById("submitBtn"); 
nameCheck.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const nameError = document.getElementById("nameError");
    nameError.textContent = "";
    const nameRegax = /[^ -~｡-ﾟ]/;
    if (name === "" || !nameRegax.test(name)) {
        document.getElementById("nameError").innerText = "正しい名前を入力してください";
    }
});

// 年齢
console.log("・年齢");
const ageCheck = document.getElementById("submitBtn");
ageCheck.addEventListener("click", () => {
    const age = document.getElementById("ageInput").value;
    const ageError = document.getElementById("ageError");
    ageError.textContent = "";
    const ageRegax = /^[0-9]+$/;
    if (age === "" || !ageRegax.test(age)) {
        ageError.textContent = "正しい年齢を入力してください";
        return;
    }
    if (age < 0 || 116 < age) {
        ageError.textContent = "正しい年齢を入力してください"
    }
})

//メールアドレス
console.log("・メールアドレス");
const emailCheck = document.getElementById("submitBtn");
emailCheck.addEventListener("click", () => {
    const email = document.getElementById("emailInput").value;
    const emailError = document.getElementById("emailError");
    emailError.textContent = "";
    const emailRegax = /^[\w.\-]+@[\w\-]+\.[\w.\-]+$/;
    if (email === "" || !emailRegax.test(email)) {
        emailError.textContent = "正しいメールアドレスを入力してください";
    }
})

//電話番号
console.log("電話番号");
const phoneCheck = document.getElementById("submitBtn");
phoneCheck.addEventListener("click", () => {
    const phone = document.getElementById("phoneInput");
    const phoneError = document.getElementById("phoneError")
    phoneError.textContent = "";
    const phoneRegax = /^\d{11}$/;
    if (phone === "" || !phoneRegax.test(phone)) {
        phoneError.textContent = "正しい電話番号を入力してください";
    }
})