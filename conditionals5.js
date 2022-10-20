var customerAge = 4;

var priceType;
var price;

// Infant Pricing Ages 2 or less
if (customerAge <= 2) {
    priceType = "Infant";
    price = 0;
}

// Child Pricing 
else if(customerAge > 2 && customerAge <= 12) {
    priceType = "Child"
    price = 9;
}
// Adult Pricing
else if (customerAge > 12 && customerAge <= 59) {
    priceType = "Adult"
    price = 12; 
}

// Senior Pricing
else if (customerAge > 59) {
    priceType = "Senior"
    price = 8; 
}


console.log("This customer is eligable for " + priceType + " pricing, they should pay $" + price)