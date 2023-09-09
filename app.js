


var name = "Austin";
const numberOfStates = 50;

var nine = 5+4;

/*no clue why this exists*/

function sayHello() {

    console.log("Hello World!")

}

function checkAge(name2, age) {

    if (age <21){
        console.log("Sorry " + name2 + ", you aren't old enough to view this page!");
    }

}

var favVeg= ["zukini", "onion", "carrot"];

for(var i=0; i < favVeg.length; i++){

    console.log(favVeg[i]);

}

var pet = {

    name:"Bradley",
    breed:"shi zhu",
}

console.log(pet.name +" is a " + pet.breed);

var people=[
    ted={
        name:"ted",
        age:"3",

    },
    bill={
        name:"bill",
        age:"35",

    },
    mark={
        name:"mark",
        age:"13",

    },
    henry={
        name:"henry",
        age:"20",

    },
    will={
        name:"will",
        age:"21",

    },
];

for(var i=0;i<people.length;i++){
    checkAge(people[i].name, people[i].age);
}

function getLength(word){

    return word.length;

}

var isHappy = getLength("Hello World");

if(isHappy%2 == 1){
    console.log("The world is an odd place!");
}else{
    console.log("The world is nice and even!");
}