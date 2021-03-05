const div = document.querySelector('[data-cor]');
console.log(div.dataset);
div.dataset.height = 1000;
delete div.dataset.width;

// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo