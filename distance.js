let totalKm = 19.5;
let price = 0;

if (totalKm <= 4) {
    price = 30;
} else if (totalKm <= 9) {
    price = 30 + 10;
} else if (totalKm <= 19) {
    price = 30 + 10 + 15;
} else {
    let extraKm = totalKm - 19;
    price = 30 + 10 + 15 + (extraKm * 20);
}

console.log("Total fare: ₹" + price);