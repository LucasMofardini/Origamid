const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

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
    showCss();

}
function showCss() {
    // Toda vez que tiver ; ele coloca em uma 'seçao' do array
    //  e depois une cada seçao com esse join
    cssText.innerHTML = '<span>' +
        btn.style.cssText.split('; ')
            .join(';</span><span>');
}
controles.addEventListener('change', handleChange);