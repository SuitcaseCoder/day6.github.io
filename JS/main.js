


// ------------------- JS Example -------------------


// var food = ["pizza", "broccoli", "bacon", "Watermelon"];
// var condiments = ["red pepper flakes", "ranch dressing", "eggs", "salt"];

// for (var i = 0; i < food.length; i++) {
//     console.log("I like to eat " + food[i] + " with " + condiments[i] + ".");
// } 


// ------------------- JS Data types -------------------

// var numberOfStudents = 20;
// var startingPizza = 30;
// var endingPizza = 30;
// // const thisIsAConst ='1';

// function getPizza(numberOfStudents){
// 	1+1;

// 	numberOfStudents = 30;
// 	console.log(numberOfStudents);

// 	if(numberOfStudents > 15){
// 		console.log('get three boxes');
// 	} else if (numberOfStudents <15 )
// 	console.log('get two boxes');
// }

// // function pizzaLeft(startingPizza, endingPizza, numberOfStudents){
// // 	console.log(numberOfStudents, startingPizza);
// // 	endingPizza = startingPizza - numberOfStudents;
// // 	console.log(endingPizza);

// // }

// Document.ready(

// 	getPizza();
// 	)

// getPizza();
// pizzaLeft();



// var boolean = false;
// var article = "The year 2020 has been crazy."; 
// var sentence  = "frogs are super cool animals 18 20 190";
// var array = ["laura", 29, "texas", false];
// var object = {name: "laura", grade: 70};
// var nullVar = null;
// var undef = undefined;
// console.log(typeof boolean, typeof number, typeof string, typeof array, typeof object, typeof nullVar, typeof undef);

// Okay, computer. please add five + six. and then change the background color to blue.

// ------------------- JS Fundamentals -------------------

// variable declaration

// var nameOfMyVariable = one of any kinds of data ;

// var Sarah = "pretty";
// var x = 1; //number
// var y = "2"; // string
// var z = true; //boolean

// var myVariable ="whatever";

// myVariable = "awesome!!";

// myVariable = "super confusing";

// alert('hey I love java script this is ' + myVariable);

// myVariable = "super confusing";

// var a = 2;
// var b = 30;
// var math = a > b;
// console.log(math);

// var colors = ["Red", "Yellow", "Green", "Orange"];
// var cities = ["London", "Paris", "New York"];
 
// alert(colors[0]);   // Output: Red
// alert(cities[2]);   // Output: New York

// -------------------  loose typing  ------------------- 
// var z = 1;
// console.log(z);

// z = 'abc'; //would throw an error in strong typed languages
// console.log(typeof z);

// z = 1
// console.log(typeof z); //number



// var a = "one";
// var b = 1;

// // // "string" + number
// var add = b + a; 	//"11"
// var add2 = a + b; 	//"11"

// console.log(add, add2);


// // // number + number = number .... + "string"
// var example = b + b + a; 	//"21"
// console.log(example);

// // // "string" + number = stringNum + number 
// var other = a + b + b; 	//"111"
// console.log(other);

// var str1 = "hello";
// var str2 = "world";
// var str3 = "whatsup";

// console.log(str1+str2+str3);


// -------------------  comparison operators  ------------------- 


// 10 < 6		// false
// 10 > 6		// true
// 10 <= 45	// true
// 10 >= 10	// true
// 10 == 6		// false
// 10 == "10"	// true
// 10 === "10"	// false
// 10 != 6		// true
// console.log(10 != "10");	// false
// console.log(10 !== "10");	// true


// -------------------  comparison operators  ------------------- 

//Simple if statement
// var x = false;

// if(x) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// var x = 10;
// var y = 5;
// var z = 5;

// if(x > y){
// 	console.log('y is greater');
// } else if ( x <= y ) {
// 	console.log('x is less than or equal');
// } else if ( z = y){
// 	console.log('equal');
// } else {
// 	console.log('catchall');
// }

// var x = "1" //string
// var y = [one, 2, "three"]
// var z;  // undefined


// if(condition ) {
// 	// do something
// } else {
// // do something else
// };


// var cups = 0

// if(cups < 1){
//     console.log("Oh yeah, I definitely need a cup of coffee!");
// } else if (cups < 3) {
//     console.log("Yes. I'll take another cup of coffee!");
// } else {
//     console.log("I think I'm okay for now.");
// }

// -------------------  functions  ------------------- 

// function pizzaToppings(one, two, three) {
//     console.log("i want a pizza with: " + one + two +three);
//     // console.log('something');
// };

// pizzaToppings('pepperoni', "pineapple", 'jalapeños'); //logs 'hello function!'

// -------------------  manipulating the dom  ------------------- 


// function greetOnLoad(name){
// 	var name = prompt("Hi! What's your name?");
// 	var myelement = document.getElementsByClassName("greeting");
// 	var test = myelement.innerHTML();
// 	console.log(test);
// }
// greetOnLoad("Laura");


// -------------------  finding and using nodes  ------------------- 

// var el = document.getElementById('username'); // just the input with id username
// console.log(el);
// var paragraphs = document.getElementsByTagName('p'); // all paragraphs <-- in a nodelist
// var introductions = document.getElementsByClassName('introduction'); // all paragraphs <-- in a nodelist
// var firstButton = document.querySelector('ul'); // uses css selectors and grabs first instance it sees
// var inError = document.querySelectorAll('li'); // uses css selectors and returns a nodelist

// -------------------  editing a node  ------------------- 

// //Get all inputs
// var div = document.querySelector('div');
// var a = document.querySelector('a');

// a.innerHTML; //"click me"
// console.log(a.innerHTML);
// div.innerHTML; //'<a href="#">Click me</a>'
// console.log('div', div.innerHTML);

// a.innerHTML = "Updated link text";

// //Get an attribute
// a.href; //"http://google.com"
// a.href= "http://amazon.com"

// //Set an attribute
// a.name = 'new link name';

// //Add a new attribute
// a.target = "_blank";


// -------------------  removing a node  ------------------- 

// // Remove the first list item
// document.querySelector('.first').remove();

// // Create a node
// var newElement = document.createElement('BUTTON');

// //  append it to an existing element
// var existingElement = document.getElementById('existing');
// existingElement.appendChild(newElement);

// -------------------  dom events  ------------------- 


// function changeColor(){
// 	document.getElementById("clickme").style.color = "red";

// }

// function changeBack(){
// 	document.getElementById("clickme").style.color = "blue";
// }

// changeText();

// -------------------  jquery  ------------------- 

// -------------------  attaching event handlers  ------------------- 




// $('h1').on('click', function(event){
// 	alert('hey look at this!');
//     //Envoked when #myButton gets a click event
//     this.innerHTML = "button clicked";
// })

// $('#myButton').on('click', function(event){
//     //Update button html
//     $(this).html("button clicked");

//     //Create a new element
//     var newAnchor = '<a id="newEl">look at me!</a>';

//     //Append new element
//     $('#someOtherElement').append(newAnchor);
//     console.log(newAnchor);
// });
//     //Add an attribute
//     $('#newEl').attr({'href':'http://techtalentsouth.com'});

// });

    //Remove it
    // newAnchor.remove();

// })

 // Document.ready();

// $(document).ready(function() {
//     console.log('this runs second');
// });

// console.log('this runs first');

// Edit an inline style
// $('#myButton').css({color: 'red'});

//Better...

//Add a CSS Class
$('#myButton').addClass('newClass');

//Remove a CSS Class
// $('#myButton').removeClass('newClass');


