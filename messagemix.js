alert('Welcome! Press OK if you are not OK!');
const button = document.getElementById("click");
const messagedisp = document.getElementById("message");
let moto = document.getElementById('moto');
const arrays = {
  timeArray: [
    "Tommorrow",
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
  nounArray: ["motorcycle", "vegetable", "birthday party", "rock", "pond"],

  random: () => {
    return Math.floor(Math.random() * 5);
  },

  message: () => {
    return `${arrays.timeArray[arrays.random()]} ${
      arrays.verbArray[arrays.random()]
    } ${arrays.adjectiveArray[arrays.random()]} ${
      arrays.nounArray[arrays.random()]
    } `;
  },
};

console.log(arrays.message());

button.addEventListener("click", function () {
  const mixmsg = arrays.message();
  messagedisp.innerHTML = mixmsg;
  if(mixmsg.includes('motorcycle')===true){moto.style.display='block';vegetable.style.display='none';birthday.style.display='none';rock.style.display='none';pond.style.display='none'
}else if(mixmsg.includes('vegetable')===true){moto.style.display='none';vegetable.style.display='block';birthday.style.display='none';rock.style.display='none';pond.style.display='none'
}else if(mixmsg.includes('birthday')===true){moto.style.display='none';vegetable.style.display='none';birthday.style.display='block';rock.style.display='none';pond.style.display='none'
}else if(mixmsg.includes('rock')===true){moto.style.display='none';vegetable.style.display='none';birthday.style.display='none';rock.style.display='block';pond.style.display='none'
}else if(mixmsg.includes('pond')===true){moto.style.display='none';vegetable.style.display='none';birthday.style.display='none';rock.style.display='none';pond.style.display='block'
}
}
);



