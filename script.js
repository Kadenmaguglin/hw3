function generate(){
    var length = document.getElementById("slider").value,
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890!@#$%^&*()[]{}+=_-",
    password = "";
for (var i = 0, n = characters.length; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * n));
}

    document.getElementById("passwordField").value = password;
    console.log(password);
    console.log(document.getElementById("slider").value);
}


function copy(){

    var copyText=document.getElementById("passwordField");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
