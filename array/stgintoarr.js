// Given an array of numbers, use map to convert each number to a string.
// Example: Input: [1, 2, 3, 4], Output: ["1", "2", "3", "4"].

let num=[1,2,3,4];

function stg(result){
 return result.toString();
}
let update =num.map(stg);
{
    console.log(update);
}