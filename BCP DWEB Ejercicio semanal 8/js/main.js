class Contenido {
    constructor() {
    }

    getParticipantes() {
        return [
            { nombre: "Elena", calificacion: 9.5 },
            { nombre: "Carlos", calificacion: 9 },
            { nombre: "Javier", calificacion: 8.5 },
            { nombre: "Laura", calificacion: 8 },
            { nombre: "Miguel", calificacion: 7.5 },
            { nombre: "Patricia", calificacion: 7 }
        ];
    }

   getBiblioteca() {
        return [
            { autor: "Bill Gates", titulo: "The Road Ahead", estadoLectura: true },
            { autor: "Steve Jobs", titulo: "Walter Isaacson", estadoLectura: true },
            { autor: "Suzanne Collins", titulo: "Mockingjay: The Final Book of The Hunger Games", estadoLectura: false },
        ];
   } 
}