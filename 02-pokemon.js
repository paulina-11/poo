class Pokemon {
    
    #name = '';
    #type = '';
    #evolutions = [];


    constructor(name, type, evolutions) {

        this.#name = name;
       
        this.#type = type;
        this.#evolutions = evolutions;
    }


    set name (name){
        this.#name = name;
    }

    set type (type){
        this.#type = type;
    }

    set evolutions (evolutions){
        this.#evolutions = evolutions;
    }

 

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

    evolve(evolution = 0){
        
        const EVOLVE = this.#evolutions [evolution] || '';
       
        let message = 'No puedo evolucionar';

        if(EVOLVE){
            message= `${this.#name} esta evolucionando a ${EVOLVE}`;
            
            this.name = EVOLVE;
        }

        return message;
    }

}

// pokemon es la clase padre o super clase
class TypeFire extends Pokemon{
// Todos los tipos fuego
    constructor(name,evolutions){
        // rellenar el padre
        super(name,'fire',evolutions)
        // No solicito solo lo coloco
    }
    message(){
        return `Hola, soy ${this.name} y soy de tipo fuego`;
    }

}

const charmander = new TypeFire('Charmander',['Charmeleon', 'Charizar']);

console.log(charmander.message());
