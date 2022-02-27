function ValidateEmail()
{
let none = document.getElementById('none');
let email = document.getElementById('email')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
    none.style.display = 'none';
    email.style.borderColor = 'var(--blue)';
}
else
{
    none.style.display= 'initial';
    email.style.borderColor = 'red';
    // none.style.marginBottom = '5px';
}

}
