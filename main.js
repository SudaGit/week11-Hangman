
var clear    = require('clear');
var hangarr  = require("./game.js");
var inquirer = require("inquirer");
var mletter   = require("./Letter.js");
var mword     = require("./Word.js");

process.stdin.setEncoding('utf8');


var lettersEntered = "";
var thisword = "";
var fletter = "";
var howmany = 0;
var numguess = 0;
var guessed_word = [];
var showstr = ""

// function start


 function  checkStats()
{

	//if (numguess!= 0)
//{
var mmword = new mword(fletter, thisword);
var iffound = mmword.found();

if (iffound)
{
	//console.log(fletter + " found " + thisword);
  var ret_word = mletter.letter(fletter, thisword, guessed_word);
 // console.log(guessed_word.join(""));
 // console.log(thisword);

}
else
{
	//console.log(fletter + " not found " + thisword);
  howmany++;
};
//} ;// numguess
drawMan(howmany);  //draw hang man based on number of wrong guesses
  showStr();  // show solved or partially solved word
if (thisword != guessed_word.join("") && howmany < 11)
{
	ask();
}
else if (howmany >10 && thisword != guessed_word.join(""))
{
	console.log("\nsorry to see you lose. you can always try again !\n");
}
else
{
	console.log("\nBravo ! you win !! Try again  !!!");
}
}  // end checkStats


function start(){

//welcome = setInterval(welCome, 3000);
thisword = chooseWord();
setBlanks(thisword);

//clear();
welCome();
showStr(); //show word string
var get_input = ask();     // take user input

} // end function start
//  ----------------------------------------------------------------

function welCome() {
	
console.log("               Welcome to Hangman");
console.log("\n\n");
console.log("      10 wrong guesses will bring you closer to the end. Be ware. ")
} // end welCome

function showStr()
{
showstr = "";
for (var i = 0; i< thisword.length; i++)
{
	showstr  += guessed_word[i] + " ";
}
console.log("\n\n");
console.log("   Guess this word   "+ showstr);
console.log("\n\n");
}// end show str

// begin function ask
// takes user guess
function ask()
{
 inquirer.prompt([
 {name: 'thisLetter', 
 message: 'Enter your guess ', 
 type:'input', 
 validate: function (input) { if(typeof input != 'string' || input.length>1)
                                 {return false; }
                                 else{return true;}
                             }
 }]).then(function(answers)
 {
 	numguess++;
 	fletter = answers.thisLetter.toUpperCase();
    
 	if(lettersEntered.includes(answers.thisLetter.toUpperCase()))
 	{
      console.log("you already chose that letter");
    }
 	else
 	{
 	lettersEntered += answers.thisLetter.toUpperCase();
 	console.log("Letters used " + lettersEntered);
 		

    }
    checkStats();
 });// end answers */
 
 } // end ask



function setBlanks()
{
 for(var j = 0; j< thisword.length ; j++)
 {
 	guessed_word[j] = '_';
 }
} // end setBlanks

// This function will pick our word
function chooseWord () {
 // get a random word from game.js
    
    var idx = getRandomArbitrary(0, hangarr.hangword.hangman_array.length -1);
    thisword = hangarr.hangword.ReturnWord(idx);
    return thisword;
   // console.log(idx);
    //console.log(thisword);
    // process.stdout.write('\033[0f')
    //drawMan(10);
    
}

// function to create random index
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function drawMan(howmany)
{
	switch (howmany)
	{
	case 1:
	   console.log("      XXXXXXX");
	   break;
	case 2:
	    console.log("      XXXXXXX");
	    console.log("      X");
	    console.log("      X");
	   break;
	case 3:
	  console.log("      XXXXXXX");	 
	  console.log("      X");
	  console.log("      X");
	  console.log("      XXXXXXX");
	   break;
	case 4:
	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  break;
	case 5:
	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  console.log("         X   ");
	  console.log("         X   ");
	  break;
	case 6:
	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  console.log("         X   ");
	  console.log("         X   ");
	  console.log("        X    ");
	  console.log("       X     ");
	  console.log("     xX      ");
	  break;
	case 7:
	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  console.log("         X   ");
	  console.log("         X   ");
	  console.log("        X  X  ");
	  console.log("       X    X   ");
	  console.log("     xX       Xx");
	  break;
	case 8:

	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  console.log("         X   ");
	  console.log("         X   ");
	  console.log("        X  X  ");
	  console.log("       X    X   ");
	  console.log("     xX   X   Xx ");
	  console.log("          X      ");
	  break;
	case 9:
	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  console.log("         X   ");
	  console.log("         X   ");
	  console.log("        X  X  ");
	  console.log("       X    X   ");
	  console.log("     xX   X   Xx ");
	  console.log("          X      ");
	  console.log("         X       ");
	  console.log("        X        ");
	  console.log("      xX         ");
	  break;
	case 10:
	  console.log("      XXXXXXX");
	  console.log("      X     X");
	  console.log("      X     X");
	  console.log("      XXXXXXX");
	  console.log("         X   ");
	  console.log("         X   ");
	  console.log("        X  X  ");
	  console.log("       X    X   ");
	  console.log("     xX   X   Xx ");
	  console.log("          X      ");
	  console.log("         X  X     ");
	  console.log("        X     X   ");
	  console.log("      xX       Xx ");
	  break;
	case 11:
      console.log("             ");
	  console.log("             ");
	  console.log("             ");
	  console.log("             ");
	  console.log("         X   ");
	  console.log("         X   ");
	  console.log("        X  X  ");
	  console.log("       X    X   ");
	  console.log("      X   X   X ");
	  console.log("      x    X  x ");
	  console.log("         X  X     ");
	  console.log("        X     X   ");
	  console.log("       X       X  ");
	  console.log("       x       x  ");
	  break;
	}
}

//   call  Start

start();
