let ageChoice = document.getElementById("ageRange");
let nameInput = document.getElementById("nameInput");
let drinkChoice = document.getElementsByName("typeDrink"); // check if the radio button is checked instead of the whoel thing

let juiceList = ['Apple juice', 'Blueberry Juice', 'Cranberry Juice', 'Carrot juice', 'Grape juice', 'Grapefruit juice', 'Orange juice', 'Pomegranate juice', 'Pineapple juice', 'Tomato Juice'];
let sodaList = ['Coca-Cola', 'Pepsi', 'Diet Coke', 'Dr Pepper', 'Mountain Dew', 'Sprite', 'Diet Pepsi', 'Fanta', 'Coke Zero', 'Diet Mountain Dew'];
let energyList = ['Redbull', 'Monster', 'Rockstar', 'Nos', 'Xyience', 'Bang', 'Celsius'];
let alcoholList = ['Whiskey', 'Vodka', 'Red Wine', 'White Wine', 'Brandy', 'Rum', 'Gin', 'Tequila'];

ageChoice.addEventListener("input", function () { // Displays age by the slider
    document.getElementById("changeAge").innerHTML = "- " + ageChoice.value;
});


// wont go through
function yourChoice(e) {
    e.preventDefault(); //stops the whole page from submitting

    let age = ageChoice.value;
    let name = nameInput.value;

    let drink = ''; // to store the random option
    let num = 0;    //sets the message to default the good message
    let choice = '';

    if (document.getElementById('juice').checked) { //checks to see if the radio button was clicked
        console.log("the drink choice is juice");
        drink = juiceList[Math.floor(Math.random() * juiceList.length)]; //assigns drink a random value from the list
        choice = 'juice';
    } else if (document.getElementById('soft').checked) {
        console.log("the drink choice is soft");
        drink = sodaList[Math.floor(Math.random() * sodaList.length)];
        choice = 'soft';
    } else if (document.getElementById('energy').checked) {
        console.log("the drink choice is energy");
        drink = energyList[Math.floor(Math.random() * energyList.length)];
        choice = 'energy';
    } else if (document.getElementById('alcohol').checked) {
        console.log("the drink choice is alcohol");
        drink = alcoholList[Math.floor(Math.random() * alcoholList.length)];
        choice = 'alcohol';
        if (ageChoice.value < 18) {
            num = 1;
        }
    }
    let goodMessage = `Hello ${name}, your drink choice is ${choice} and the chosen drink for you is ${drink}`;   //two message choices for the outcomes
    let badMessage = `Sorry ${name}, your drink choice was ${choice} but due to you being ${age} we can't serve it to you`;
    let message = [goodMessage, badMessage];

    document.getElementById("displayDrink").innerHTML = message[num];
}