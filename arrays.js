// Array
var avengers = ['Homem de ferro', 'Capitão américa', 'Thor']
console.log(avengers)

// Adicionar
avengers.push('Hulk')
console.log(avengers)

// pop remove o último registro do array
avengers.pop();
// shift remove o primeiro registro do meu array
avengers.shift();
console.log(avengers);

avengers.push('Homem aranha')
avengers.splice(indice)
avengers.push('Viúva Negra');
avengers.push('Gavião arqueiro');
console.log(avengers)

var newAvengers = ['Homem aranha', 'Capitã Marvel', 'Pantera negra']
var result = avengers.concat(newAvengers);
console.log(avengers)
