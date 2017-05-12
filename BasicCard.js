var inquirer = require("inquirer");

var BasicCard = function(front,back){
  this.front = front;
  this.back = back ;
}

module.exports = BasicCard;

var Qs = 	
[
"The beaver is the national emblem of which country?",
"Which singer's real name is Stefani Joanne Angelina Germanotta?", 
"How many players are there in a baseball team?",
"What is the name of Batman's butler?",
"The average human body contains how many pints of blood?",
"Which US state is nearest to the old Soviet Union?"
]

var As = 	
[
"Canada",
"Lady Gaga",
"9",
"Alfred",
"9",
"Alaska"
]

var rand = Math.floor((Math.random() * Qs.length) + 1);
//console.log(rand);

var bc = new BasicCard(Qs[rand-1],As[rand-1]);

inquirer.prompt([
  {
    name: "back",
    message: bc.front
  }

]).then(function(answers) {
  if (answers.back.toUpperCase() == bc.back.toUpperCase()){
  	console.log("Your Basic Card answer is correct");
  }else{
  	console.log("Your Basic Card answer is wrong");
  	console.log("Correct answer is: " + bc.back);
  }
});
