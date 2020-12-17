document.getElementById("button1").addEventListener("click", callback);

function callback(){
  var usn=document.getElementById("username1").value;
  var pwd=document.getElementById("password1").value;
  
    if(usn=="admin"&&pwd=="1234"){
        validate();
    }
   if(usn.trim()==""|| pwd.trim()==""){
        alert("Username or Password Empty");
    }
    if(!(usn=="admin"&&pwd=="1234")&&!(usn.trim()==""|| pwd.trim()=="")){
       alert("Username or Password Incorrect!!");
      
    }
  }


function  validate(){
      document.getElementById("form1").removeAttribute("onsubmit"); 
      document.getElementById("form1").addEventListener("submit");
    }