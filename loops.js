// Loops (laços de repetições)

// For é movido pro declaração
for(var a = 0; a < 10; a++) {
    console.log(`Repetindo porque ${a} é menor que 10. `);
}

// While é movido por uma condição e fica no laço enquanto esta condição for true (verdadeira)
var i = 0;

while(i<=10) {
    console.log(`Repetindo porque ${i} é menor que 10.`)
    i++;
}

// foreach
var avengers = ['Ironman', 'Spiderman', 'Thor', 'Capitain America', 'Black Panther', 'Black Window']
avengers.forEach(function(value, key){
    console.log(`${value} na posição ${key}`);
})
