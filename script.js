//q1
var winningNumbers = [1, 76, 2, 78, 16, 7];
console.log(2)

//q2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("steak","skateborad");
console.log(vegetables);

//q3
var randomThings = ["pumpkin", false, 23, true, "tomato"];
for (let i = 0; i < randomThings.length; i++){
    console.log(randomThings);
}

//q4

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (let i = 0; i < moreThings.length; i++){ 
    if (typeof moreThings[i]=== "number"){
        console.log("more things", moreThings[i]);
    }
}

//q5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var fixedingre = ingredients.sort();
for (let i = 0; i < fixedingre.length; i++){
    console.log(fixedingre);
}

//q6
var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];
for (let i = 0; i < characters.length; i++){
    if (i % 2 === 1){
        console.log(characters[i]);
    }
}
