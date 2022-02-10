// handle deposit button event 
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update Account Balance 
    // const balanceTotal = document.getElementById('balance-total');

    // const balanceTotalText = balanceTotal.innerText;
    // console.log(balanceTotalText);
    // // console.log(balanceTotalText);
    // // const previousBalanceTotal = parseFloat(balanceTotalText);
    // // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // // balanceTotal = newBalanceTotal.innerText;


    // clear the deposit input field 

    depositInput.value = '';

})