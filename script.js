function generatePass(length) {
     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     let password = "";
     for (let i = 0; i < length; i++) {
          const randIndex = Math.floor(Math.random() * charset.length);
          password += charset.charAt(randIndex);
     }
     return password;
}

function copyClipboard(text) {
     navigator.clipboard.writeText(text.innerHTML);
     success.style.bottom = "100px";
     success.style.opacity = 100;
     setTimeout(() => {
          success.style.bottom = "25px";
          success.style.opacity = 0;
     }, 1500);
}

const result = document.querySelector(".result");
const rangeSpan = document.querySelector(".rangeLth");
const rangeBtn = document.getElementById("length");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const success = document.querySelector(".success");

rangeBtn.addEventListener("input", () => {
     rangeSpan.innerHTML = `Lenght : ${rangeBtn.value}`;
     console.log(rangeBtn.value);
});

generateBtn.addEventListener("click", () => {
     result.innerHTML = generatePass(rangeBtn.value);
});

copyBtn.addEventListener("click", () => {
     copyClipboard(result);
});
