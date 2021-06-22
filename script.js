document.getElementById("add-expense-button")
  .addEventListener('click', displayExpense);

function displayExpense(){
  const paymentMethod = document.getElementById("payment-method")
  const itemName = document.getElementById("item-name")
  const date = document.getElementById("date")
  const amount = document.getElementById("amount")

  if (isEmpty(paymentMethod) || isEmpty(itemName) || isEmpty(date) || isEmpty(amount)){
    alert("Please fill out all fields!")
  } else {
    const tableBody = document.getElementById('tbody');
    const expenseTableRow = createExpenseRow(paymentMethod,itemName, date, amount);
    tableBody.appendChild(expenseTableRow)

    clearInput(itemName);
    clearInput(date);
    clearInput(amount);
  }
}

function isEmpty(input){
  return !input.value;
}

function createExpenseRow(paymentMethod,itemName, date, amount){
  const tableRow = document.createElement('tr');
  const typeCell = createTableData(paymentMethod);
  const nameCell = createTableData(itemName);
  const dateCell = createTableData(date);
  const amountCell = createTableData(amount);
  const deleteButton = createDeleteButton(tableRow)

  tableRow.appendChild(typeCell)
  tableRow.appendChild(nameCell)
  tableRow.appendChild(dateCell)
  tableRow.appendChild(amountCell)
  tableRow.appendChild(deleteButton)

  return tableRow;
};

function createTableData(input){
  const tableData = document.createElement('td');
  tableData.textContent = input.value;

  return tableData;
}

function createDeleteButton(tableRow){
  const deleteButton = document.createElement('button')
  deleteButton.textContent = "delete"
  deleteButton.addEventListener('click', ()=> {
    tableRow.remove();
  });

  return deleteButton;
}

function clearInput(input){
  input.value = '';
}

