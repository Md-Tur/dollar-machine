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

                alert("Your cost can't be greater than your earning");
            }

        }
        else {
            alert("Please enter any positive value here");
        }

    }
    else {
        alert("Please don't input any string type value here");
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

    if (!isNaN(saved) && saved > 0) {
        const finalSaving = (totalIncome * saved) / 100;
        if (remainingBalance >= finalSaving) {
            const afterSaving = remainingBalance - finalSaving;
            const savingsText = document.getElementById('after-savings');
            savingsText.innerText = afterSaving;
            let moneySaved = document.getElementById('savings');
            moneySaved.innerText = finalSaving;
        }
        else {
            alert("You have not enough balance to save");
        }

    }
    else {
        alert("Please enter any positive value here");
    }

})