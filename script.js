const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const num = document.getElementById("num");
const word = document.getElementById("word");
const btn = document.getElementById("btn");
const length = document.getElementById("length");
const copy = document.getElementById("copy");
const div = document.createElement("div");
document.body.appendChild(div);

let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "1234567890";
let symbolSet = "!@#$%^&*_+-";

btn.addEventListener('click', () => {
    word.value = generatePassword();
    
});

length.addEventListener('input',function() {
    num.textContent = this.value;
})

const generatePassword = () => {
    var pass = "";
    var i = 0;
    let allChars = "";
    allChars += box1.checked ? numberSet : "";
    allChars += box2.checked ? upperSet : "";
    allChars += box3.checked ? lowerSet : "";
    allChars += box4.checked ? symbolSet : "";
    while (i < length.value) {
        pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    
    if (pass.length < 6) {
        div.textContent = "Very Weak";
        document.body.style.backgroundColor = "red";
        document.documentElement.style.backgroundColor = "red";
    } else if (pass.length <8) {
        div.textContent = "Weak";
         document.body.style.backgroundColor = "orange";
         document.documentElement.style.backgroundColor = "orange";
    } else if (pass.length < 15) {
        div.textContent = "Strong";
         document.body.style.backgroundColor = "yellow";
         document.documentElement.style.backgroundColor = "yellow";
    } else if (pass.length <= 20) {
        div.textContent = "Very Strong";
         document.body.style.backgroundColor = "Green";
         document.documentElement.style.backgroundColor = "Green";
    }

    
    return pass;
}



copy.addEventListener('click', () => {
    
        navigator.clipboard.writeText(word.value);
    copy.value = "COPIED";
        setTimeout(function () {
            copy.value = "COPY";
        }, 3000);
    
})

