const form = document.getElementById('userForm');
const table = document.getElementById('orders');

form.addEventListener('submit', function(event){

  // Отримання даних
  var nameUser = form['nameUser'].value;
  var selectedAddress = form['address'].value;
  var typeReceiving = form['receiving'].value;
  var pizza = form['pizza'].value;

  var checkboxArray = form['extra'];
  var selectedExtra = [];

  for(let checkbox of checkboxArray){
    if(checkbox.checked){
      selectedExtra.push(checkbox.value);
    }
  }

  var instructions = form['instructions'].value;

  // Створення нового рядка

  var newRow = table.insertRow();

  var nameCell = newRow.insertCell();
  var addressCell = newRow.insertCell();
  var typeReceivingCell = newRow.insertCell();
  var pizzaCell = newRow.insertCell();
  var extraCell = newRow.insertCell();
  var instructionsCell = newRow.insertCell();

  nameCell.textContent = nameUser;
  addressCell.textContent = selectedAddress;
  typeReceivingCell.textContent = typeReceiving;
  pizzaCell.textContent = pizza;

  if(selectedExtra.length > 0){
    var text = "";
    for(var extra of selectedExtra){
      text = text + extra + " ";
    }
    extraCell.textContent = text;
  } else {
    extraCell.textContent = "";
  }

  instructionsCell.textContent = instructions;

  event.preventDefault();
});
