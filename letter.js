exports.letter = function(guessed_letter, word, guessed_word) {
this.guessed_letter = guessed_letter,
this.word = word,
this.guessed_word = guessed_word,
this.setletter= function(){
                      for (var i = 0;i<this.word.length; i++)
                      	if(this.guessed_letter.toUpperCase() === this.word.substr(i,1))
                      	{
                      	//	console.log("found letter " + i);
                      		this.guessed_word[i] = this.guessed_letter.toUpperCase();
                      	}
                  //    console.log(guessed_word);
                      return this.guessed_word;
                  }
	this.setletter();
};

