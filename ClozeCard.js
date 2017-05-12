var inquirer = require("inquirer");

var ClozeCard = function(text,cloze){
	this.partial = text;
	this.cloze = cloze;
	this.fullText = text.replace("__________", cloze);	
}

module.exports  = ClozeCard;

var Qs = 
[
	"In Fahrenheit, water freezes at __________ degrees temperature.",
	"According to Greek mythology, __________ was the first woman on earth.",
	"__________  was the leader of the wolves in The Jungle Book.",
	"The Statue of Liberty was given to the US by __________",
	"There are __________  time zones in the world."
]

var As =
 [
	"32",
	"Pandora",
	"Akala",
	"France",
	"24"
]

var rand = Math.floor((Math.random() * Qs.length) + 1);
console.log(rand);

var cc = new ClozeCard(Qs[rand-1],As[rand-1]);

inquirer.prompt([
   {
    name: "cloze",
    message: cc.partial
  }
  
]).then(function(answers) {
  if (answers.cloze.toUpperCase() == cc.cloze.toUpperCase()){
  	console.log("Your Cloze Card answer is correct");
  }else{
  	console.log("Your Cloze Card answer is wrong");
  	console.log("Correct answer is: " + cc.fullText);
  }
});

