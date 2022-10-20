var customerAge = 4;

var priceType;
var price;

if (customerAge <= 2)
{
    priceType = "Infant";
    price = 0;
}

if(customerAge <= 12)
{
    priceType = "Child"
    price = 9;
}

if (customerAge <= 59){
    priceType = "Adult"
    price = 12; 
}

priceType = "Senior"
price = 8;

console.log("This customer is eligable for " + priceType + " pricing, they should pay $" + price)