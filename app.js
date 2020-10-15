
    var userid = document.registration.userid;
    var upass = document.registration.passid;
    var uname = document.registration.username;
    var uadd= document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;
 



function userid_validation(mx,my)
{
 userid_len = userid.value.length;
if (userid_len == 0 || userid_len >= my || userid_len < mx)
{
alert("User Id should not be empty / length must be between "+mx+" to "+my);
userid.focus();
return false;
}else{
    upass.focus()
return true;
}
};


// validate password
function passid_validation(mx, my){
    upass.value.length = pass_len;
if(pass_len == 0 || pass_len < mx || pass_len >= my){
    alert("password should not be empty / length must be between "+mx+" to "+my);
upass.focus();
return false;
}else{
    uname.focus()
return true;
};
}

function allLetter(){
    let allphabats = /^[A-Za-z]+$/;
    if(uname.value.match(allphabats)){
        uadd.focus()
        return true;
    }else{
        alert('names must have alphabets character only')
        uname.focus()
        return false;
    }
};

function alphanumeric(){
    let alphanums = /^[0-9A-Za-z]+$/;
    if(uadd.value.match(alphanums)){
        ucountry.focus()
        return true;
    }else{
        alert('address must have alphanumerics character only')
        ucountry.focus()
        return false;
    }
};

function selectCountry(){
    if(ucountry.value == "default"){
        alert('please select from the list of countries')
        ucountry.focus()
        return false;
    }else{
        uzip.focus()
    return true;
}
};


function allNumeric(){
    let numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers))
    {
    // Focus goes to next field i.e. email.
    uemail.focus();
    return true;
    }
    else
    {
    alert('ZIP code must have numeric characters only');
    uzip.focus();
    return false;
    }
    }
  

function email_validation(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)){
        document.registration.desc.focus()
        return true
    }else{
        alert("You have entered an invalid email address!")
        uemail.focus()
        return false;
    }
    
};

function gender_validation(umsex, ufsex){
    if(umsex.checked || ufsex.checked){
        document.registration.desc.focus()
        return true;
    }else{
        alert('please select Male/Female')
        umsex.focus()
        return false;
    }
}