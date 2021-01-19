var a = 1000;

function quadrado(cm) {
	function area() {
		var area = cm * cm;
		
		return area;
	}
	function perimetro() {
		var lados = 4,
				perimetro = 4 * cm;
		return perimetro;
	}
	console.log(area());
	console.log(perimetro());
	console.log(cm);
}

function triangulo() {
	var ladosTriangulo = 3;
}

quadrado(20);

console.log(testeGlobal);