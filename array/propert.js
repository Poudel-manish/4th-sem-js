// Given an array of objects where each object has a name property, use map to create an array of just the names.
// Example: Input: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }], Output: ["Alice", "Bob", "Charlie"].
let arr=[
    {
        name:"manish", cast:"poudel", address:"itahari-09", contact:"9825320404"
    }
]


let update=arr.map(result);

    console.log(update);
    function result(up){
        return up.name +" "+cast+" "+address+" "+contact;

    }


