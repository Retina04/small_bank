document.getElementById('btn-withdraw').addEventListener('click',function(){
   
     const withdrawAmount = document.getElementById('withdraw-field');
   
     const withdrawAmountString = withdrawAmount.value;
    
    const withdrawAmountInt =parseFloat(withdrawAmountString);
    
    withdrawAmount.value = '';
    const totalWithdrawFiled = document.getElementById('withdraw-total');
    const totalWithdrawFiledString = totalWithdrawFiled.innerText;
    const totalWithdrawFiledInt = parseFloat(totalWithdrawFiledString);
    const totalWithdraw = totalWithdrawFiledInt + withdrawAmountInt;
    totalWithdrawFiled.innerText = totalWithdraw;
    console.log(totalWithdraw);
    const balanceField = document.getElementById('balance-total');
    const balanceFieldString = balanceField.innerText;
    const balanceFieldInt = parseFloat(balanceFieldString);
    const totalBalance = balanceFieldInt -  withdrawAmountInt;
     balanceField.innerText = totalBalance;
     


})