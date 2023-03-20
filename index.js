// ArrayArray.prototype.reduce
// The reduce() method executes a user-supplied "reducer" callback function
//  on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of r
// unning the reducer across all elements of the array is a single value.

// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the
//  reducer across all elements of the array is a single value.


//The reducer walks through the array element-by-element, at each
// step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — 
//until there are no more elements to add
const array1 = [1,2,3,4,5,6,7,8,9,];

// 0+1+2+3+4+5+6+7+8+9 = 45

const initialValue = 0;
const sumWithinitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithinitial);

//Return value
//The value that results from running the "reducer" callback function to completion over the entire array.