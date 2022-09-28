// 1... input value for depo and withdraw
function inputField(inputId){
    const depoInput = document.getElementById( inputId);
    const depoInputText = depoInput.value;
    const depoInputNumber = parseFloat(depoInputText);
    depoInput.value = ' ';
    return depoInputNumber;
} 

function getInnerTextValue(fieldId){ // from 2 and 3 no. function 
    const fieldText = document.getElementById(fieldId);
    const fieldInnerText = fieldText.innerText;
    const fieldValue = parseFloat(fieldInnerText);
    return fieldValue;

}
// 2... total input value for depo and withdraw
function totalInput(totalId,depoInputNumber){
    // const depoTotal = document.getElementById(totalId);
    // const depositTotalText = depoTotal.innerText;
    // const depositTotalNumber = parseFloat(depositTotalText);
    const depositTotalNumber = getInnerTextValue(totalId) ;
    const newTotal = depositTotalNumber + depoInputNumber;
    document.getElementById(totalId).innerText = newTotal;
    return newTotal;
    // depoTotal.innerText = depositTotalNumber + depoInputNumber;
}
// 3... active balance after depo or withdraw
function activeBalance(depoInputNumber,isAdd){
    // const bankBalance = document.getElementById("balance-total");
    // const bankBalanceText = bankBalance.innerText;
    // const bankBalanceNumber = parseFloat(bankBalanceText);
    const bankBalanceNumber = getInnerTextValue("balance-total");
    exactBalance()
    if(isAdd == true &&  isAdd <= bankBalanceNumber){
        document.getElementById("balance-total").innerText = bankBalanceNumber + depoInputNumber;
    }
    else{
        document.getElementById("balance-total").innerText = bankBalanceNumber - depoInputNumber;
    }
}
// 4,,,,,, when transaction by withdraw upto balance
function exactBalance(){
    const bankBalance = document.getElementById("balance-total");
    const bankBalanceText = bankBalance.innerText;
    const bankBalanceNumber = parseFloat(bankBalanceText);
    return bankBalanceNumber;
}
// deposit input
document.getElementById("deposit-button").addEventListener("click",function(){
    // deposit input 
    // const depoInput = document.getElementById("deposit-input");
    // const depoInputText = depoInput.value;
    // const depoInputNumber = parseFloat(depoInputText);
    // const depoInputNumber = inputField("deposit-input")
     // deposit total
    // const depoTotal = document.getElementById("deposit-Total");
    // const depositTotalText = depoTotal.innerText;
    // const depositTotalNumber = parseFloat(depositTotalText);
    // depoTotal.innerText = depositTotalNumber + depoInputNumber;
    // totalInput("deposit-Total",depoInputNumber) 

    // update balance 
    // const bankBalance = document.getElementById("balance-total");
    // const bankBalanceText = bankBalance.innerText;
    // const bankBalanceNumber = parseFloat(bankBalanceText);
    // bankBalance.innerText = bankBalanceNumber + depoInputNumber;
    const depoInputNumber = inputField("deposit-input")
    if( depoInputNumber > 0){
        totalInput("deposit-Total",depoInputNumber) 
        activeBalance(depoInputNumber,true)
        
    }
 
}) 
// withdraw input 
document.getElementById("withdraw-button").addEventListener("click",function(){
    // withdraw input 
    // const withdInput = document.getElementById("withdraw-input");
    // const withdrawText = withdInput.value;
    // const withdInputNumber = parseFloat(withdrawText);
    // const withdInputNumber = inputField("withdraw-input")
    // withdraw total
    // const withdrawTotal = document.getElementById("withdraw-total");
    // const withdrawTotalText = withdrawTotal.innerText;
    // const withdrawNumber = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText = withdInputNumber + withdrawNumber;
    //  totalInput("withdraw-total",withdInputNumber) 

    // update balance
    // const bankBalanceDepo = document.getElementById("balance-total");
    // const bankBalanceText = bankBalanceDepo.innerText;
    // const bankBalanceNumber = parseFloat(bankBalanceText);
    // bankBalanceDepo.innerText = bankBalanceNumber - withdInputNumber;
    const withdInputNumber = inputField("withdraw-input")
    const uptoBalance = exactBalance()
    if(withdInputNumber > 0 && withdInputNumber < uptoBalance){
        totalInput("withdraw-total",withdInputNumber) 
        activeBalance(withdInputNumber,false)
    }
    
})