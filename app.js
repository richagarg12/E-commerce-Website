//SIGN UP


let signupName = document.getElementById('username');
let signupEmail = document.getElementById('useremail');
let signupPass = document.getElementById('userpassword');


function signup()
{
    if(signupName.value !== '' && signupEmail.value !== '' && signupPass !== '')
        {
            localStorage.setItem('name' ,signupName.value);
            localStorage.setItem('mail' ,signupEmail.value);
            localStorage.setItem('password' ,signupPass.value);


            window.location.href = 'login.html';
        }
        else{
            alert("Please Fill Out All Fields")
        }
}

//LOGIN


let loginEmail = document.getElementById('useremail');
let loginPass = document.getElementById('userpassword');

function  login()
{
    let storeMail = localStorage.getItem('mail')
    let storePass = localStorage.getItem('password')
    if(loginEmail.value == storeMail && loginPass.value == storePass)
        {
            alert("Welcome");
            window.location.href = "test.html"
        }
    else
    {
        alert("Please Enter Valid Email/Password")
    }
}