const removeFromArray = function(userArray, ...removeIndex) {
    const result = userArray.filter(item => !removeIndex.includes(item));
    return result;
    
}
// Do not edit below this line
module.exports = removeFromArray;