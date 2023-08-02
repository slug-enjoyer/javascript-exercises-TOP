const repeatString = function(string,num) {

    let stringHolder = ''

    if (num >= 0){
        for (let i=1; i <= num; i++){
        stringHolder += string;
        }
        return stringHolder;
    }


    else if (num < 0){
        return 'ERROR';
    }

}
// Do not edit below this line
module.exports = repeatString;
