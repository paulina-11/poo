// alert('hola');
// Nombre de la clase debe ir en mayuscula 
class Pokemon {
    // Atributos
    #name = '';
    #type = '';
    // Arreglo porque son varios
    #evolutions = [];

// metodos

// Inicializa los valores de nuestros objetos
    constructor(name, type, evolutions) {
// palabra this es para hacer referencia a que valor que hace referencia a los atributos
        this.#name = name;
        // Despues del = hace referencia a contructor
        this.#type = type;
        this.#evolutions = evolutions;
    }

// Encapsulamiento dato privado con #
// set asigna los valores privados

    set name (name){
        this.#name = name;
    }
// se le tiene que poner el valor que se le va asignar a name se le asigna name
    set type (type){
        this.#type = type;
    }

    set evolutions (evolutions){
        this.#evolutions = evolutions;
    }

    // Obtener valores

    get name(){
        return this.#name;
    }
    get type(){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }

    // ---- acaba encapsulamiento
    // metodo
    attack(){
        return `${this.name}, esta atacando`;
    }
// Agrega un valor por defecto en caso de que no se resiva un parametro
    evolve(evolution = 0){
        //valida que la opción exista valor 0 se refiere a la posición del arreglo
        const EVOLVE = this.#evolutions [evolution] || '';
        // Si esto esto existe va tener el valor de evolve que es ta en el primer arreglo si no va ser nulo
        let message = 'No puedo evolucionar';

        if(EVOLVE){
            message= `${this.#name} esta evolucionando a ${EVOLVE}`;
            // pasa a la siguiente evolución
            this.name = EVOLVE;
        }

        return message;
    }

}

// nombrar atributos y capacidades
// Cuando es provada se accede al metodo
const Charmander = new Pokemon ('Charmander', 'Fire', ['Chameleon', 'Charizar']);

const Squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

// Llamar a los atributos 

console.log(`${Charmander.name} es de tipo ${Charmander.type}`);
console.log(Charmander.attack());
console.log(Charmander.evolve(0));
console.log ((`${Charmander.name} es de tipo ${Charmander.type}` ))


console.log(`${Squirtle.name} es de tipo ${Squirtle.type}`);
console.log(Squirtle.attack());
console.log(Squirtle.evolve(0));
console.log ((`${Squirtle.name} es de tipo ${Squirtle.type}` ))