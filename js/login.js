document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField = document.getElementById('email-field')
   const email = emailField.value;
   const passwordField = document.getElementById('password-field');
   const password =passwordField.value;
   if(email === 'nida@gmail.com' && password === 'ok'){
    console.log('Valid ');
    window.location.href = 'bank.html';
   }
   else{
    console.log('invalid');
   }
})
