/* 
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while
*/

//  for

const food = ['pane', 'latte', 'uova', 'pasta', 'carne', 'pesce', 'acqua'];
const output = document.getElementById('output');
for(let i = 0; i < food.length; i++){
    output.innerHTML += food[i];
}




// while

// const food = ['pane', 'latte', 'uova', 'pasta', 'carne', 'pesce', 'acqua'];
// let c = 0;

// while(c < food.lenght){
//     console.table(food[c]);
//     c++;
// }

