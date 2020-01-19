     
    function setCaps(){
        console.log("add caps");
        capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(capitals);
        document.getElementById("capsButton").style.backgroundColor = "lightgreen";
        document.getElementById("capsButton").style.color = "black";
        
    }
    function setLows(){
        console.log("add lows");
        lowercases = "abcdefghijklmnopqrstuvwxyz";
        console.log(lowercases);
        document.getElementById("lowsButton").style.backgroundColor = "lightgreen";
        document.getElementById("lowsButton").style.color = "black";
    }
    function setNums(){
        console.log("add nums");
        numbers = "1234567890";
        console.log(numbers);
        document.getElementById("numsButton").style.backgroundColor = "lightgreen";
        document.getElementById("numsButton").style.color = "black";
    }
    function setSymbs(){
        console.log("add symbs");
        symbols ="!@#$%^&*()[]{}+=_-"
        console.log(symbols);
        document.getElementById("symbsButton").style.backgroundColor = "lightgreen";
        document.getElementById("symbsButton").style.color = "black";
    } 
     
     function generate(){

       if(typeof capitals === 'undefined'){
            c="";
        }else if(capitals === "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
            c="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            console.log(c);
        }else{
            return;
        }
      

        if(typeof lowercases === 'undefined'){
         l="";
        }else if(lowercases === "abcdefghijklmnopqrstuvwxyz"){
            l="abcdefghijklmnopqrstuvwxyz";
            console.log(l);
        }else{
            return;
        }

        if(typeof numbers === 'undefined'){
            n="";
        }else if(numbers === "1234567890"){
            n="1234567890";
            console.log(n);
        }else{
            return;
        }

        if(typeof symbols ==='undefined'){
            s="";
        }else if(symbols === "!@#$%^&*()[]{}+=_-"){
            s="!@#$%^&*()[]{}+=_-";
            console.log(s);
        }else{
            return;
        }

        var length = document.getElementById("slider").value,

        characters = (c + l + n + s),
        password = "";
    for (var i = 0, n = characters.length; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }

        document.getElementById("passwordField").value = password;
        console.log(password);
        console.log(document.getElementById("slider").value);
        console.log(capitals + lowercases + numbers + symbols);
    }


    function copy(){
   
        var copyText=document.getElementById("passwordField");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }
