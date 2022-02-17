// expense part calculation

function expenseCalculation() {

}

document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('total-income');
    const totalIncome = parseFloat(income.value);
    console.log(totalIncome);

    const food = document.getElementById('food-cost');
    const foodCost = parseFloat(food.value);
    console.log(foodCost);

    const rent = document.getElementById('rent-cost');
    const rentCost = parseFloat(rent.value);
    console.log(rentCost);

    const clothes = document.getElementById('clothes-cost');
    const clothesCost = parseFloat(clothes.value);
    console.log(clothesCost);
})

// save part calculation

document.getElementById('save-button').addEventListener('click', function () {
    console.log('click');
})