var paymentMethod = document.getElementById("payment-method")
// var itemName =getElementById("item name")
// var date = getElementById("date")
// var amount = getElementById("amount")
const addNewExpense = document.getElementById("button").addEventListener('click', add)

function add(){
  const tableBody = document.getElementById('tbody')
  const tableRow = document.createElement('tr')
  tableBody.appendChild(tableRow);

  const typeCell = document.createElement('td')
  typeCell.textContent = paymentMethod.value;

  tableRow.appendChild(typeCell)
  console.log(paymentMethod.value)
  

}   