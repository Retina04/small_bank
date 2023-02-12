document.getElementById('btn-deposit').addEventListener('click',function(){
  
   const depositField = document.getElementById('deposit-field')
    const depositAmountString = depositField.value;
    const newDepositAmountInt = parseFloat(depositAmountString);
    console.log(newDepositAmountInt);


    const depositTotalField = document.getElementById('deposit-total');
    const depositTotalString = depositTotalField.innerText;
    const oldDepositTotalInt = parseFloat(depositTotalString);
     const totalDepositAmount = newDepositAmountInt + oldDepositTotalInt;
     depositTotalField.innerText = totalDepositAmount;
     depositField.value ='';

     const balanceField = document.getElementById('balance-total')
     const balanceFieldString = balanceField.innerText;
     const balanceFieldInt = parseFloat(balanceFieldString);
     const totalBalance = balanceFieldInt + newDepositAmountInt;
     balanceField.innerText = totalBalance;
     
    
})