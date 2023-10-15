class Calculo {
	static financial = x => Number.parseFloat(x).toFixed(2)
	static iva = x => x * 0.21;
	static total = x => x + this.iva(x);//total mas iva
	static subtotalForeach = function(x) {
		let total = 0;
		x.forEach(element => {
			total += element.precio * element.cantidad;
		});
		return total;
	}
	static totalForeach = function(x) {
		let total = 0;
		x.forEach(element => {
			total += this.total(element.precio * element.cantidad);
		});
		return total;
	}
}