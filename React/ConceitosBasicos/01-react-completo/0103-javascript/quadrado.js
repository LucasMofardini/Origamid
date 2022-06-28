export function areaQuadrado(l) {
  return l * l;
}
export function perimetroQuadrado(l) {
  return l * 4;
}
function somaNumero(n) {
  return n + n;
}
const quadrado = {
  areaQuadrado,
  perimetroQuadrado,
  somaNumero,
};
//Voce exporta todo o objeto quadrado que tem mais objeto dentro dele
export default quadrado;
