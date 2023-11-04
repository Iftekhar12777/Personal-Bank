document.getElementById('btn-withdraw').addEventListener('click', function(){

const withdrawField = document.getElementById('Withdraw-field');

const newWithdrawAmountString = withdrawField.value ;

const newWithdrawAmount = parseFloat(newWithdrawAmountString);

withdrawField.value = '';

// newwithdraw amount nan solve............../////////

if(isNaN(newWithdrawAmount)){
  alert('invalid number')
  return;
}


const totalWithdraw = document.getElementById('withdraw-total');

const totalWithdrawAmountString = totalWithdraw.innerText;
const totalWithdrawAmount = parseFloat(totalWithdrawAmountString)

const totalBalace = document.getElementById('total-balance')

const currentBalanceString = totalBalace.innerText;

const currentBalance = parseFloat(currentBalanceString)



if(newWithdrawAmount > currentBalance){
  alert('Insufficient balance')
  return;
}

const crntTotalWithdraw = totalWithdrawAmount + newWithdrawAmount;

totalWithdraw.innerText = crntTotalWithdraw;



const currentTotalBalance = currentBalance - newWithdrawAmount;

totalBalace.innerText = currentTotalBalance;

})