var name = "Princess Brunhilda von Nay Nay III";
var age = 8; // Setting age to 8
var tmpAge;
var	drinkingAge;

console.log("My name is " + name + " and I am age " + age);

var counter = 1; 

// inital value
// test of value
// add stuff each time

for(var counter = 1; age <= (21 -counter); counter++){

	tmpAge = age + counter;
	console.log("In " + counter + " I will be " + tmpAge);

	drinkingAge = 21 - tmpAge;

	if ( tmpAge < 21 ) {
		console.log("...and beer in " + drinkingAge + " years");
	} else if (tmpAge === 21){
		console.log("yeah... celebrate");
	} else {
		console.log("leave me alone I am drinking");
	}
}
