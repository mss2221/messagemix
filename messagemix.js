
const figlet = require("figlet")


const arrays = {
  timeArray : ['Tommorrow', 'In ten minutes', 'Next year', 'Very soon', 'By October'],
  verbArray : ['you will discover', 'everything will be', 'your thoughts will turn to', 'you might be', 'you will receive'],
  adjectiveArray : ['a very large', 'some big green', 'a very small', 'a wonderful', 'a lovely'],
  nounArray : ['motorcycle', 'vegetable', 'birthday party', 'rock', 'pond'],

    random : () => {
        return Math.floor(Math.random()*5)
    },

    message:()=>{
        return `${arrays.timeArray[arrays.random()]} ${arrays.verbArray[arrays.random()]} ${arrays.adjectiveArray[arrays.random()]} ${arrays.nounArray[arrays.random()]} `
    }
};


words = arrays.message()
/*

This following code will split off the first word of the message
and write an ASCII version of the first word to the console.

However, the message is created before
the makeAscii() function is finished.

I want the ASCII word to appear first, then
the rest of the message. (right now, the whole
message is displayed. I will change it so the first
word is left out.)

The desired result:
 _   _           _
| \ | | _____  _| |_
|  \| |/ _ \ \/ / __|
| |\  |  __/>  <| |_
|_| \_|\___/_/\_\\__|  year you might be a wonderful rock

*/
const makeAscii = (words) => {
  wordsArray = words.split(' ');
  firstWord = wordsArray[0];
  figlet.text(firstWord, function (err, asciiWord) {
   console.log(asciiWord);
//   console.log(words);  -- this line within the function will ensure it appears after

  })
};

makeAscii(words)
console.log(words)

/*
I have started trying to make a Promise /async
structure, but I cannot get it to work.

function makeAscii() {
  return new Promise(resolve => {
    wordsArray = words.split(' ');
    firstWord = wordsArray[0];
    figlet.text(firstWord, function (err, asciiWord) {
      console.log(asciiWord);
    });
  });
}

async function displayMessage() {
  const msg = await makeAscii();
  console.log(arrays.message);
}

displayMessage()
*/
