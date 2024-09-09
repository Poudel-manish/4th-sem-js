let score = prompt("Enter you have score");

if(score>=90 && score<=100)
{
    console.log('You have score A+');
}
else if(score>=101 && score<1000)
    {
        console.log('not valid');
    }
else if(score>=80 && score<89)
{
    console.log('you have score A');
}
else if(score>=70 && score<=79)
{
    console.log('you have score B+');
}
else (score>=0 && score<= 69)
{
    console.log('you have fail in the exam');
}
