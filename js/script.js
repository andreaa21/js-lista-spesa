/* 
Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while
*/


const food = ['pane', 'latte', 'uova', 'pasta', 'carne', 'pesce', 'acqua'];
const output = document.getElementById('output');
const br = document.createElement('br');


//  for

for(let i = 0; i < food.length; i++){
    output.innerHTML += food[i];
    output.append(br);
    console.log(food[i]);
}








