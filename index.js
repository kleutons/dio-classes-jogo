
class Hero {

    constructor(name, age, type){
        this.nameHero   = name;
        this.ageHero    = age;
        this.typeHero   = type;
    }

    typeAttack(){
        if(this.typeHero === 'mago'){
            return 'magia';
        }else if (this.typeHero === 'guerreiro'){
            return 'espada';
        }else if(this.typeHero === 'monge'){
            return 'artes marciais';
        }else{
            return 'shuriken';
        }
    }

    attack(){
        console.log(`Meu ${this.nameHero}, idade: ${this.ageHero}, tipo: ${this.typeHero} atacou usando ${this.typeAttack()}`)
    }


}

const nameHero = 'Heroi';
const ageHero = '19';
const typeHero = 'ninja';


const meuHeroi = new Hero(nameHero, ageHero, typeHero);
meuHeroi.attack();