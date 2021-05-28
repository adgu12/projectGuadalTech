// Modelo sobre el objeto que vamos a trabajar
export class Becario {
    constructor(
        public id: string,
        public nombre: string,
        public apellidos: string,
        public puesto: string,
        public horario: string,
        public fechaalta: string,
        public responsables: []
    ) {}
}