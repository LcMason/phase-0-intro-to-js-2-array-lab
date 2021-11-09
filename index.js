// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    cats.push('Ralph')
}

function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(Ralph){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

 function appendCat(Broom){
     return [...cats, 'Broom'];
 }

 function prependCat(Arnold){
     return ['Arnold', ...cats];
 }

 function removeFirstCat(){
     cats.slice(1);
 }
