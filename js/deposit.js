// console.log('deposit kaj hocche')

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositTotal= getInputFieldTotal('deposit-field');
    const previousDepositTotal= getDisplayFieldTotal('deposit-total');
    const inputDepositTotal= previousDepositTotal+newDepositTotal;
 
    showTotalValue('deposit-total', inputDepositTotal);
 
    const previousBalanceTotal=getDisplayFieldTotal('balance-total');
 
    const getBalanceTotal= previousBalanceTotal+newDepositTotal;
 
    showTotalValue('balance-total', getBalanceTotal);
})