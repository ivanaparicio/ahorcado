import Alpine from 'alpinejs'
import game from './game.js'


document.addEventListener('alpine:initialized', () => {
    console.log('PASE1');
})

Alpine.data('game', game)
 
window.Alpine = Alpine
 
Alpine.start()





