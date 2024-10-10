document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
    // prevent page reload
    event.preventDefault();
    
    //get added money
    const addedMoney = document.getElementById('cash-out-money').value;
    
    //get added pin
    const pinNum = document.getElementById('cash-out-pin-num').value;
    

    //match the pin
    if(pinNum==='1234'){
        console.log("Adding money to your account");

        //get the current balance
        const prevMoney = document.getElementById('account-money').innerText;

        //update the balance

        const addedBalance = parseFloat(addedMoney);
        const addedPrevBalance = parseFloat(prevMoney);
        const updateBalance =  addedPrevBalance-addedBalance;
        console.log(updateBalance);

        //add the updated balance to original balance
        document.getElementById('account-money').innerText=updateBalance;

    }
    else
    {
        alert("Failed to add money! Please try again ");
    }
});