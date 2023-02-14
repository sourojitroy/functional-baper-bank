
document.getElementById('btn-withdraw').addEventListener('click',function(){
   const newWithdrawTotal= getInputFieldTotal('withdraw-field');
   const previousWithdrawTotal= getDisplayFieldTotal('withdraw-total');
   const inputWithdrawTotal= previousWithdrawTotal+newWithdrawTotal;

   showTotalValue('withdraw-total', inputWithdrawTotal);

   const previousBalanceTotal=getDisplayFieldTotal('balance-total');

   const getBalanceTotal= previousBalanceTotal-newWithdrawTotal;

   showTotalValue('balance-total', getBalanceTotal);
})