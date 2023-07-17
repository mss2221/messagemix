alert("Welcome! Press OK if you are not OK!");

const button = document.getElementById("messageButton");
const messageDisplay = document.getElementById("message");
let moto = document.getElementById("moto");

const arrays = {
  timeArray: [
    "Tomorrow",
    "In ten minutes",
    "Next year",
    "Very soon",
    "By October",
  ],
  verbArray: [
    "you will discover",
    "everything will be",
    "your thoughts will turn to",
    "you might be",
    "you will receive",
  ],
  adjectiveArray: [
    "a very large",
    "some big green",
    "a very small",
    "a wonderful",
    "a lovely",
  ],
  nounArray: [
  "motorcycle",
  "vegetable",
  "birthday party",
  "rock",
  "pond"
  ],

  random: () => {
    return Math.floor(Math.random() * 5);
  },

  // message: () => {
  //   newMessage = `${arrays.timeArray[arrays.random()]
  //   } ${arrays.verbArray[arrays.random()]
  //   } ${arrays.adjectiveArray[arrays.random()]
  //   } ${arrays.nounArray[arrays.random()]
  //   }`;
  //   return newMessage;
  // },

/*
    This keeps the phrases separate. Does not seem to
    add functionality after all. The hope was to use
    the nounPhrase for image selection. But still stuck
    with an if/else loop
*/
  randomPhrases: () => {
    adverbPhrase = `${arrays.timeArray[arrays.random()]}`;
    verbPhrase = `${arrays.verbArray[arrays.random()]}`;
    adjectivePhrase = `${arrays.adjectiveArray[arrays.random()]}`;
    nounPhrase = `${arrays.nounArray[arrays.random()]}`;
    const phrases = {
      adverbPhrase: adverbPhrase,
      verbPhrase: verbPhrase,
      adjectivePhrase: adjectivePhrase,
      nounPhrase: nounPhrase
    };
    return phrases;
  }
};
/*
function dispImage(img) {
  document.getElementById(img).style.display = "block";
}

function hideImg() {
  moto.style.display = "none";
  vegetable.style.display = "none";
  birthday.style.display = "none";
  rock.style.display = "none";
  pond.style.display = "none";
}
*/

// The @id attribute "click"  and the event type "click"
// are a little confusing.
// Changed the @id of the button to 'messageButton'

// the phrases are broken up here, so that 1st word can be
// selected later for ascii display
function assembleMessage () {
  const mixmsg = `${arrays.randomPhrases().adverbPhrase} \
  ${arrays.randomPhrases().verbPhrase} \
  ${arrays.randomPhrases().adjectivePhrase} \
  ${arrays.randomPhrases().nounPhrase}`
  arrays.randomPhrases().verbPhrase;
  messageDisplay.innerHTML = mixmsg;

  const keywordImage = document.getElementById("keyword");

// Still a big if statement. I still wonder if there
// is a cleaner way to do this.
  if (mixmsg.includes("motorcycle") === true) {
      imgUrl = "./pics/moto.jpg"
    } else if (mixmsg.includes("vegetable") === true) {
      imgUrl = "./pics/hinojo.jpg"
    } else if (mixmsg.includes("birthday") === true) {
      imgUrl = "./pics/birthday.jpg"
    } else if (mixmsg.includes("rock") === true) {
      imgUrl = "./pics/rock.jpg"
    } else if (mixmsg.includes("pond") === true) {
      imgUrl = "./pics/pond.jpg"
    }
    keywordImage.src = imgUrl;
    // img hidden by default until a message is generated
    keywordImage.classList.remove("hidden");
  }

button.addEventListener("click", assembleMessage)
/*
button.addEventListener("click", function () {
  const mixmsg = arrays.message();
  messageDisplay.innerHTML = mixmsg;
  if (mixmsg.includes("motorcycle") === true) {
    hideImg();
    dispImage("moto");
  } else if (mixmsg.includes("vegetable") === true) {
    hideImg();
    dispImage("vegetable");
  } else if (mixmsg.includes("birthday") === true) {
    hideImg();
    dispImage("birthday");
  } else if (mixmsg.includes("rock") === true) {
    hideImg();
    dispImage("rock");
  } else if (mixmsg.includes("pond") === true) {
    hideImg();
    dispImage("pond");
  }
});*/
