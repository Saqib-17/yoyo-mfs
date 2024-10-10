document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload
    event.preventDefault();
    
    //get added money
    const addedMoney = document.getElementById('input-add-money').value;
    console.log(addedMoney);
    //get added pin
    const pinNum = document.getElementById('input-pin-num').value;
    console.log(pinNum);

    
    
});