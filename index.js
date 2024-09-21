const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push (name);
    
}
function destructivelyPrependCat (name){
    cats.unshift (name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return [...cats, name]

}
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat() {
    return cats.slice(0, -1); 
}

const newCatsArray = removeLastCat();
console.log(newCatsArray); 
console.log(cats)


function removeFirstCat(){
    return cats.slice(1);
}

const Cats =removeFirstCat();
console.log(newCatsArray); 
console.log(cats); 