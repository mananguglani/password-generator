const passwordElement = document.getElementById('password');
const copyElement = document.getElementById('copy');
const lengthElement = document.getElementById('length');
const upperElement = document.getElementById('upper');
const lowerElement = document.getElementById('lower');
const numberElement = document.getElementById('number');
const symbolElement = document.getElementById('symbol');
const generateElement = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*-/_ +';

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
};

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
};

function generatePassword() {
    const length = lengthElement.value;
    let password = '';

    if(upperElement.checked) {
        password += getUppercase();
    }

    if(lowerElement.checked) {
        password += getLowercase();
    }

    if(numberElement.checked) {
        password += getNumber();
    }

    if(symbolElement.checked) {
        password += getSymbol();
    }

    for(let i = password.length; i < length; i++) {
        const pw = generatePw();
        password += pw;
    }

    passwordElement.innerText = password;
};

function generatePw() {
    const pwArr = [];
    
    if(upperElement.checked) {
        pwArr.push(getUppercase());
    }

    if(lowerElement.checked) {
        pwArr.push(getLowercase());
    }

    if(numberElement.checked) {
        pwArr.push(getNumber());
    }

    if(symbolElement.checked) {
        pwArr.push(getSymbol());
    }

    if(pwArr.length === 0) return '';

    return pwArr[Math.floor(Math.random() * pwArr.length)];
}

generateElement.addEventListener("click", generatePassword);

copyElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = passwordElement.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard.');
});