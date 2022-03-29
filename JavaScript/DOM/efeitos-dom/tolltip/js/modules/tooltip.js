export default function iniToolTip() {
    const toolTips = document.querySelectorAll('[data-tooltip]');
    toolTips.forEach((item) => {
        item.addEventListener('mouseover', onMouseOver);
    });

    function onMouseOver(event) {
        const toolTipBox = criarToolTipBox(this);

        onMouseMove.toolTipBox = toolTipBox;
        this.addEventListener('mousemove', onMouseMove);

        onMouseLeave.toolTipBox = toolTipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);

    }
    const onMouseLeave = {
        handleEvent() {
            this.toolTipBox.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mouseleave', onMouseMove);

        }
    }
    const onMouseMove = {
        handleEvent(event) {
            this.toolTipBox.style.top = event.pageY + 15 + 'px';
            this.toolTipBox.style.left = event.pageX + 15 + 'px';

        }
    }

    function criarToolTipBox(element) {
        const tollTipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tollTipBox.classList.add('tooltip');
        tollTipBox.innerText = text;
        document.body.appendChild(tollTipBox);
        return tollTipBox;
    }


}

