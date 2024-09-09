let item={
    mango:250,
     orange:645,
     banana:300,
     apple:900,
}
let dis;
New_price;
// all the iteam have 10% of;
for(let offer=0; offer<item.length; offer++)
{
    dis = item/10;
    New_price= item-dis;

}
console.log(New_price);