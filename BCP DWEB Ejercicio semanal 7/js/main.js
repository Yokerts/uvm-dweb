class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}