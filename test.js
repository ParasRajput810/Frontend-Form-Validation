let a = document.getElementById("fullname");
let b = document.getElementById("email");
let c = document.getElementById("password");
let d = document.getElementById("submit");
function newfunc(event){
   if(namechecker() == false ){
        let a1 = document.getElementById("x");
        a1.innerHTML = "Invalid Input !!"
        event.preventDefault();
   }
   else if(emailchecker()==false){
    let a1 = document.getElementById("y");
    a1.innerHTML = "Invalid Input !!";
    event.preventDefault();
   }
   else if(passwordchecker()==false){
    let a1 = document.getElementById("z");
    a1.innerHTML = "Invalid Password !!";
    event.preventDefault();
   }
    
}

function namechecker(){
    if(a.value.length ==0 || startsWithNumber(a.value)){
        
        return false
    }
    else{
        return true
    }
}

function startsWithNumber(str) {
    return /^\d/.test(str);
}

function emailchecker(){
    let emails = b.value;
    let sym1 = 0;
    let sym2 = 0;
    for(let i in emails){
        if(emails[i] == "@"){
            sym1 = sym1+1;
        }
    }

    if(sym1 == 1 && emails.includes(".com")){
        return true;
    }
    else{
        return false;
    }
}

function passwordchecker(){
    let password = c.value;
    let uppercheck = false;
    let numcheck = false;
    for(let i in password){
        if(password[i] == password[i].toUpperCase()){
            uppercheck =true;
        }
        else if(parseInt(password[i])!= NaN){
            numcheck =true;
        }

    }

    const specialChars = /[`!@#$%^&*]/;
    if(uppercheck == true && numcheck == true && specialChars.test(password) == true){
        return true;
    }
    return false;
    
}