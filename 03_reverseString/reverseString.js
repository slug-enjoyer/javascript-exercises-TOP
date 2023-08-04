const reverseString = function(usrString) {

    // const usrString = prompt("Enter a string to be reversed: ");
    const stringCounterInit = usrString.length;
    let stringCounter = usrString.length;
    let newString = "";

    for (let i = 1; i <= (stringCounterInit+1); i++){
        newString = newString+usrString.charAt(stringCounter);
        stringCounter--;
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
