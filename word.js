function Word(thisletter, thisword)
{
	this.thisletter = thisletter ,
	this.thisword = thisword 
};

Word.prototype.found = function(){ 
	if(this.thisword.includes(this.thisletter.toUpperCase()))
	{
       return true;
	}
	else 
	{
	 return false;
	}
};


module.exports = Word;