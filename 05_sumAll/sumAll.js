const sumAll = function(num1,num2) {
    let sumTotal = num1;
    let carrierNum;
    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) || 
    typeof num1 === 'string' || typeof num2 === 'string'){
        return "ERROR";
    }
    
    else if (num1 > num2){
        sumTotal = num2;
        for (let i = num2+1; i < num1+1; i++){
            sumTotal = sumTotal + i;
        }
    }

    else{
        
        for (let i = num1+1; i < num2+1; i++){
           sumTotal = sumTotal + i;
        } 
    }
    return sumTotal;
};

// Do not edit below this line
module.exports = sumAll;
