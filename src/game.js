export default () => ({

    categories : {
        countries: ['canada', 'brasil', 'australia', 'india', 'italia'],
        fruits: ['manzana', 'platano', 'uva', 'fresa', 'sandia'],
        animals: ['leon', 'elefante', 'tiburon', 'jirafa', 'murcielago'],
        colors: ['azul', 'rojo', 'amarillo', 'verde', 'morado'],
    },
    listCategories:[
        {
            name: 'Animales',
            image: 'images/animals.jpg',
            value: 'animals',
        },
        {
            name: 'Frutas',
            image: 'images/fruits.jpg',
            value: 'fruits',
        },
        {
            name: 'Países',
            image: 'images/countries.jpg',
            value: 'countries',
        },
        {
            name: 'Colores',
            image: 'images/colors.jpg',
            value: 'colors',
        },
    ],
    imgLevels: {0: 'images/6.jpg', 1: 'images/5.jpg', 2: 'images/4.jpg', 3: 'images/3.jpg', 4: 'images/2.jpg', 5: 'images/1.jpg',  6: 'images/0.jpg'},
    abc: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    category: null,
    level: null,
    intents: null,
    word: '',
    lettersSelecteds: [],
    started:false,
    winner: false,

    selectCategory(category){
        this.category = category
    },

    selectLevel(level){
        this.level = level
        this.start()
    },

    start(){
        this.intents = {easy: 10, medium: 7, hard: 3}[this.level]
        let category = this.categories[this.category]
        let words = Math.floor(Math.random() * category.length)
        this.word = category[words]
        this.started = true
    },

    letterIsSelected(letter){
        return this.lettersSelecteds.some(value => value === letter)
    },

    selectLetter(letter){
        if (this.letterIsSelected(letter)) return
        this.lettersSelecteds.push(letter)
    },

    letterExists(letter){
        return this.lettersSelecteds.some(value => letter === value) ? letter : '__'
    },

    get intentsFails(){
        let accerts = 0

        for (let letter of this.lettersSelecteds) {         
            this.word.split('').some(value => letter === value) ? accerts++ :  ''
        }
         
        this.winner = accerts == Array.from(new Set(this.word.split(''))).length

        return this.intents - (this.lettersSelecteds.length - accerts)
    },

    reset(){
        this.category = null
        this.level = null
        this.intents = null
        this.word = ''
        this.lettersSelecteds = []
        this.started  = false
    },

    reload(){
        this.lettersSelecteds = []
        this.start()
    }
})