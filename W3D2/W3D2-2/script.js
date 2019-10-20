// functie maken met de naam huiwerkMaken 2 argumenten; vak, callback
//console.log('Ok, ok, ik ga nu mijn [voeg hier het vak in] huiswerk maken ')

/* wat houd ${string interpolation}`in? om een variabele direct in een string 
 te gebruiken 
dus ipv 
let age =98 
let name = 'Karin' 
console.log ('Hi my name is, '+ name + ' and I am' + age + ' years old.')
is het 
console.log ('Hi my name is ${name} and I am ${age} years old.')
*/

/*stap 1
function huiswerkMaken (vak, callback){
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
   callback();
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);

//stap 2
function klaarMetHuiswerk(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);

//stap 3
function huiswerkMaken (vak, callback){
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
   callback();
}

function klaarMetHuiswerk(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);*/

//stap 4 
 huiswerkMaken=(vak, callback)=>{
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`)
   callback();
   setTimeout (function(){
}, 3000)
 }

function klaarMetHuiswerk(){
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!")
}
huiswerkMaken("wiskunde", klaarMetHuiswerk);
