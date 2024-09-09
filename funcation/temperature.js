// function tem()
// {
//     let c= prompt("Enter the celsius value");
//     let f=(9/5*c)+32;
//     return f;

// }

// result=tem();
// console.log("the value of fahrenheit is",result);


let choose=prompt("what do you want to convert (a)celsius to faherenheit (b)faherenheit to celsius");

if(choose==='a')
    {
        let c= prompt("Enter the celsius value");
            let result=(9/5*c)+32;
            console.log("The value of fahrenheit is",result);
}
else if (choose==='b')
{
    let f=prompt("Enter the fahrenheit value");
   let results = (f-32) * 5 / 9;

console.log("The valuse of celsius is",results);}
else{
    console.log("invalid number");
}