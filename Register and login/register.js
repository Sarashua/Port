window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var firstname = document.forms["myForm"]["firstname"];
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var bday = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];
    var repassword = document.forms["myForm"]["repassword"];
// console.log(password.value);
// console.log(repassword.value);
    if(password.value == repassword.value){
        return true;
    }
    else{
        var text = document.getElementById("errormsg");
        text.innerHTML = "Password and Retype Password doesn't match";
        return false;
    }
    
}