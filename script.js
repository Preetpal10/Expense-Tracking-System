const expenseName = document.getElementById("Name");
const expenseAmount = document.getElementById("Amount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");


let totalExpense = 0;


addBtn.addEventListener("click", function () {

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);

    
    if (name === "" || amount === 0) {
        alert("Please enter valid details");
        return;
    }


    const li = document.createElement("li");
    li.classList.add("expense-item");

    
    li.innerHTML = `
        <span>${name} - ₹${amount}</span>
        <button class="delete-btn">Delete</button>
    `;

    
    expenseList.appendChild(li);

    
    totalExpense += amount;
    total.textContent = totalExpense;

    
    expenseName.value = "";
    expenseAmount.value = "";

    
    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {

    
        totalExpense -= amount;
        total.textContent = totalExpense;


        li.remove();
    });

});