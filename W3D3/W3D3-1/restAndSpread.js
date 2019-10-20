//Opdracht W3D3-1
//Functie 1 rest operator
function totalSum(...numbers){
    return numbers.reduce (function(previous,current){
        return previous+current;
    })
}
let total = totalSum(3,6,9,4)
console.log(total)












//Functie 2 spread operator
let age = [1,3,5,7]

function giveTotal (a,b,c,d) {
    return a+b+c+d;
}


console.log(giveTotal(...age))