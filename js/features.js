//show Cash out
document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    //hidden Add money
    document.getElementById('add-money-form').classList.add('hidden');
});

//show Add money
document.getElementById('add-money-form-button').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});



