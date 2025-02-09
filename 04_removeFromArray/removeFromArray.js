// take an array of numbers and a number to remove from the array
// return the array without the number removed

// Set up arguments including the ability to add multiple arguments
// find the index of the number to be removed and then use splice to cut that item out
function removeFromArray(array, ...removes) {
   for (remove of removes) {
    while (array.includes(remove)) {
        let index = array.indexOf(remove);
        array.splice(index,1);
    } 
}
    return array
};
// function getArray() {
//     let numArray = prompt('Please enter the numbers you want in the array seperated by a space.').split(' ');
//     console.log(numArray); 
//     return numArray;
// }

// function numToRemove() {
//     let num = prompt('What numbers do you want to remove. List them seperated by a space if multiple.')
//     let numberToRemove = num.split(' ');
//     console.log(numberToRemove);
//     return numberToRemove;

// }
// let array = getArray();
// let remove = numToRemove();
// let newArray = removeFromArray(array,remove);
// let newArray = removeFromArray()

// Do not edit below this line
module.exports = removeFromArray;
