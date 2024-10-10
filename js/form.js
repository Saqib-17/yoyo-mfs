document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNum = document.getElementById('phone-num').value;
    const pinNum = document.getElementById('pin-num').value;
    
    if(phoneNum === '0' && pinNum === '1234'){
        console.log('You are logged in');
        window.location.href = '/home.html';
    }
    else
    {
        alert('wrong phone number or pin!');

    }
})