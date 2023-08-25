const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[\p{P}\p{Z}]/gu, '');
    const revString = string.split("").reverse().join("");
    if (revString === string){
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
