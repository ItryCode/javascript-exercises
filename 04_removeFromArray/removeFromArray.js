const removeFromArray = function(nums,...args) {
    let filteredArray=nums.filter(val=>!args.includes(val));
    return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
