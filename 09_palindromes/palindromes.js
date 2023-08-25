const palindromes = function (string) {
    string = string.toLowerCase();
    const revString = string.split("").reverse().join("");
    if (revString === string){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
