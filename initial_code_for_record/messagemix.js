
const arrays = {
    timeArray : ['time1', 'time2', 'time3', 'time4'],
    verbArray : ['verb1', 'verb2', 'verb3', 'verb4'],
    adjectiveArray : ['adjective1', 'adjective2', 'adjective3', 'adjective4'],
    nounArray : ['noun1', 'noun2', 'noun3', 'noun4'],

    random : () => {
        return Math.floor(Math.random()*4)
    },

    message:()=>{
        return `${arrays.timeArray[arrays.random()]} ${arrays.verbArray[arrays.random()]} ${arrays.adjectiveArray[arrays.random()]} ${arrays.nounArray[arrays.random()]} `
    }
}

console.log(arrays.message())