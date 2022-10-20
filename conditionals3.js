var customerAge = 24;

var priceType;
var price;

if (customerAge <= 2)
{
    priceType = "Infant";
    price = 0;
}
else
{
    if(customerAge <= 12)
    {
        priceType = "Child"
        price = 9;
    }
    else
    {
        if (customerAge <= 59)
        {
            priceType = "Adult"
            price = 12; 
        }
        else
        {
            priceType = "Senior"
            price = 8;  
        }
    }
}

console.log("This customer is eligable for " + priceType + " pricing, they should pay $" + price)