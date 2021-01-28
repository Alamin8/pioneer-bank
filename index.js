// Log in Button event handler
const loginbtn = document.getElementById('login');
loginbtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area')
    transactionArea.style.display = 'block'
})
// deposit submit button event handler
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function () {
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount)
    //Deposit section
    // const currentDeposit=document.getElementById('current-deposit').innerText;
    // const currentDepositNumber=parseFloat(currentDeposit);
    // const totalDeposit=(depositNumber+currentDepositNumber)
    // document.getElementById('current-deposit').innerText=totalDeposit;
    //balance section-without function
    // const currentBalance=document.getElementById('current-balance').innerText;
    // const currentBalanceNumber=parseFloat(currentBalance);
    // const totalBalance=currentBalanceNumber+totalDeposit;
    // document.getElementById('current-balance').innerText=totalBalance;
    //balance section -just call a function
    // updateSpanText("current-balance",depositNumber)


    const depositNumber = getInputNumber("depositAmount")
    updateSpanText("current-deposit", depositNumber);
    document.getElementById('depositAmount').value="";
    updateSpanText("current-balance",depositNumber)

})
const withdrawBtn=document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    // const withdrawAmount=document.getElementById('withdraw-amount').value;
    // const withdrawNumber=parseFloat(withdrawAmount);
    // withdraw status
    // const currentWithdraw=document.getElementById('current-withdraw').innerText;
    // const currentWithdrawNumber=parseFloat(currentWithdraw);
    // const totalWithdraw=withdrawNumber+currentWithdrawNumber;
    // document.getElementById('current-withdraw').innerText=totalWithdraw;
    // document.getElementById('withdraw-amount').value="";


    const withdrawAmount=getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawAmount)
    document.getElementById('withdraw-amount').value="";//input value add hoiye jauyar por jeno input value ager moto hoiye jay tar jonno
    updateSpanText("current-balance", -1* withdrawAmount) // -1 dara gun kora hoyeche jeno withdraw ta main balance theke bad jay
})
// For any input value received
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount)
    return amountNumber;
}

//input value er opor depand kore first row er value guli komano barano
function updateSpanText(id,depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount=currentNumber+depositNumber;
    document.getElementById(id).innerText=totalAmount;
}
