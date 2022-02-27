function ValidateEmail()
{
let none = document.getElementById('none');
let email = document.getElementById('email')
// let nonetext = document.getElementById('nonetext');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
// document.form1.text1.focus();
none.style.display = 'none';
email.style.borderColor = 'var(--blue)';
// nonetext.style.display = 'none';

// return true;
}
else
{
    none.style.display= 'initial';
    email.style.borderColor = 'red';
// nonetext.style.display= 'inherit';
return false;
}

}
