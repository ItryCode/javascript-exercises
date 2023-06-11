const reverseString = function(word) {
    let words=word.split("");
    
    let num=0;
    let new_word=[];
    for(let i=words.length-1;i>-1;i--){
        new_word[num]=words[i];
        num++;
        
        
    }

    return new_word.join("")
};


// Do not edit below this line
module.exports = reverseString;
