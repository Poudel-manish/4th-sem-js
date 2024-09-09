let num= [85,97,44,37,36,60];
let sum=0;
let mean;
for(val of num)
{
    sum+=val;
}
mean=sum/num.length;

console.log("the avg student of marks is",mean);