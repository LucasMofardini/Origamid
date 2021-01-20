//Tudo em javascript é OBJETO
const menu = {
  seletor: '.principal',
};
console.log(menu.seletor.toUpperCase());

//Função normal
function upperName(name) {
  return name.toUpperCase();
}
console.log(upperName('Lucas'));
//Criando função com const (expressão) Arrow function
const lowername = (name) => {
  return name.toLowerCase();
};
console.log(lowername('LUCAS'));

//Desestruturação de um objeto

function handleMouse(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}
document.addEventListener('click', handleMouse);
//Desestrutura na Orderm do array
const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta1);
//banana
console.log(fruta2);
//uva
