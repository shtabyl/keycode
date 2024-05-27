const keySymbol = document.querySelector('.key-symbol');
const keyCode = document.querySelector('.key-code');

document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft': {
            keyCode.innerText = '37';
            keySymbol.innerText = e.key;
            break;
        }
        case 'ArrowUp': {
            keyCode.innerText = '38';
            keySymbol.innerText = e.key;
            break;
        }
        case 'ArrowRight': {
            keyCode.innerText = '39';
            keySymbol.innerText = e.key;
            break;
        }
        case 'ArrowDown': {
            keyCode.innerText = '40';
            keySymbol.innerText = e.key;
            break;
        }
        case ' ': {
            keyCode.innerText = e.key.charCodeAt();
            keySymbol.innerText = 'Space bar';
            break;
        }
        default: {
            if (e.location === 0 || e.location === 3) {
                keyCode.innerText = e.key.charCodeAt();
                keySymbol.innerText = e.key;
            } else {
                document.addEventListener('keypress', (e) => {
                    keyCode.innerText = e.key.charCodeAt();
                    keySymbol.innerText = e.key;
                });
            }
        }
    }
});