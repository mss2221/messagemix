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
