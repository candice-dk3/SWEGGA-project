function calculateFemaleTotal() {
    let quantity = parseInt(document.getElementById('femaleQuantity').value);
    const price = 150.95;
    let total = quantity * price;
    document.getElementById('femaleTotal').innerHTML = "R" + total.toFixed(2);
}

function calculateMaleTotal() {
    let quantity = parseInt(document.getElementById('maleQuantity').value);
    const price = 180.95; 
    let total = quantity * price;
    document.getElementById('maleTotal').innerHTML = "R" + total.toFixed(2);
}

function calculateTotal() {
    let femaleQuantity = parseInt(document.getElementById('femaleQuantity').value);
    let maleQuantity = parseInt(document.getElementById('maleQuantity').value);
    const femalePrice = 150.95;
    const malePrice = 180.95;
    let femaleTotal = femaleQuantity * femalePrice;
    let maleTotal = maleQuantity * malePrice;
    let overallTotal = femaleTotal + maleTotal;
    document.getElementById('overallTotal').innerHTML = "R" + overallTotal.toFixed(2);
}