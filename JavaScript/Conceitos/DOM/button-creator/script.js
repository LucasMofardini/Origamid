const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const btnCopiar = document.querySelector('.btn-cp');
const btnReset = document.querySelector('.btn-reset');

const handleStyle = {
    element: btn,
    texto(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + "px";
    },
    width(value) {
        this.element.style.width = value + "px";
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + "px";
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + "px";
    }
}

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    saveValues(name, value);
    showCss();

}
function showCss() {
    // Toda vez que tiver ; ele coloca em uma 'seçao' do array
    //  e depois une cada seçao com esse join
    cssText.innerHTML = '<span>' +
        btn.style.cssText.split('; ')
            .join(';</span><span>');
}
function copiaCode() {
    const code = document.querySelector('.css').innerText;
    navigator.clipboard.writeText(code);
    btnCopiar.innerText = 'copiado!';
    setTimeout(() => {
        btnCopiar.innerText = 'copiar';
    }, 4000);
}
function resetBtn() {
    cssText.innerText = '';

    btn.removeAttribute('style');
    localStorage.clear();
    document.location.reload();
}
function saveValues(name, value) {
    localStorage[name] = value;

}
console.log(controles.elements)
function setValues() {
    const properties = Object.keys(localStorage);
    properties.forEach((propertie) => {
        // seta os valores do botao
        handleStyle[propertie](localStorage[propertie]);
        // seta os valores do controle
        controles.elements[propertie].value = localStorage[propertie];
    });
    showCss();
}
setValues();

controles.addEventListener('change', handleChange);
btnCopiar.addEventListener('click', copiaCode);
btnReset.addEventListener('click', resetBtn);
