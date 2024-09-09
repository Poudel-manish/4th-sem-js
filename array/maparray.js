let arr=[
    {
        Fname: "manish", Lname: "poudel", Age: "20"
    }
]
let varnew = arr.map(result);
console.log(varnew);
function result (x){
    return x.Fname + " " + x.Lname +" "+ x.Age;
}