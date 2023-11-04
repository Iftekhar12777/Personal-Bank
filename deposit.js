document.getElementById('btn-deposit').addEventListener('click', function(){

const depositField = document.getElementById('deposit-field')

const newDepositAmountString = depositField.value ;
const newDepositAmount = parseFloat(newDepositAmountString)

depositField.value = "";

// nan solve for newdeposit sector...........///////

if(isNaN(newDepositAmount)){
  alert('invalid number')
  return;
}

const totalDeposited = document.getElementById('deposited');

const preDepositedString = totalDeposited.innerText;
const preDeposited = parseFloat(preDepositedString)

const currentDeposit = preDeposited + newDepositAmount;

totalDeposited.innerText = currentDeposit;




const totalBalace = document.getElementById('total-balance')

const currentBalanceString = totalBalace.innerText;

const currentBalance = parseFloat(currentBalanceString)

const currentTotalBalance = currentBalance + newDepositAmount;

totalBalace.innerText = currentTotalBalance;

})