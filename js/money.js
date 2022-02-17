// total cost calculation function

function expenseCalculation(foodExpense, rentExpense, clotheExpense) {
    const food = document.getElementById(foodExpense);
    const foodCost = parseFloat(food.value);

    const rent = document.getElementById(rentExpense);
    const rentCost = parseFloat(rent.value);

    const clothes = document.getElementById(clotheExpense);
    const clothesCost = parseFloat(clothes.value);

    if (foodCost > 0 && rentCost > 0 && clothesCost > 0) {
        return foodCost + rentCost + clothesCost;
    }
    else {
        return -1;
    }
}

// total expense & new balance value set

document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('total-income');
    const totalIncome = parseFloat(income.value);
    let totalCost = expenseCalculation('food-cost', 'rent-cost', 'clothes-cost');
    if (!isNaN(totalIncome) && !isNaN(totalCost)) {
        if (totalIncome > 0 && totalCost != -1) {
            if (totalIncome >= totalCost) {
                const remainingBalance = totalIncome - totalCost;
                const expenses = document.getElementById('expenses');
                expenses.innerText = totalCost;
                const balance = document.getElementById('balance');
                balance.innerText = remainingBalance;
            }
            else {
                console.log("big")
                alert("big");
            }

        }
        else {
            alert("negative");
            console.log("negative");
        }

    }
    else {
        alert("string");
        console.log("string");
    }

})

// save part calculation

document.getElementById('save-button').addEventListener('click', function () {
    let totalCost = expenseCalculation('food-cost', 'rent-cost', 'clothes-cost');
    const income = document.getElementById('total-income');
    const totalIncome = parseFloat(income.value);
    const remainingBalance = totalIncome - totalCost;
    const savingsPercent = document.getElementById('savings-percent');
    const saved = parseFloat(savingsPercent.value);
    const finalSaving = (totalIncome * saved) / 100;
    let moneySaved = document.getElementById('savings');
    moneySaved.innerText = finalSaving;
    const afterSaving = remainingBalance - finalSaving;
    const savingsText = document.getElementById('after-savings');
    savingsText.innerText = afterSaving;
})