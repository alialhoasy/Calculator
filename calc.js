// Variables
let varResult = document.getElementById('result');

function calculator(num) {
    // Will Be Remove 0 When Click Any Number
    if (varResult.textContent === '0') {
        varResult.innerText = '';
    }
    // If you click the "C" button the text will be zero
    if (num == 'C') {
        varResult.innerText = 0;
        return;
    }
    if (num == '←') {
        // Don't Remove Last zero
        if (varResult.textContent == 0)
            varResult.innerText = 0;
        // When the text is erased, the value returns to 0
        if (varResult.textContent.length == 1) {
            varResult.innerText = 0;
            return;
        }
        varResult.innerText = varResult.textContent.slice(0, -1);
        return;
    }
    // Print Result
    document.getElementById('result').innerText += num;
}

function result() {
    varResult.innerText = eval(varResult.innerText)
}