const shippingCosts = {
  Australia: 170,
  China: 100,
  Chile: 250,
  Jamaica: 120,
};

function getShippingCost(country) {
    switch (country) {
        case "Australia":
            return `Shipping to ${country} will cost ${shippingCosts.Australia} credits`
            break;
        case "China":
            return `Shipping to ${country} will cost ${shippingCosts.China} credits`
            break;
        case "Chile":
            return `Shipping to ${country} will cost ${shippingCosts.Chile} credits`
            break;
        case "Jamaica":
            return `Shipping to ${country} will cost ${shippingCosts.Jamaica} credits`
            break;
        default:
            return "Sorry, there is no delivery to your country"
    }
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"