

function validationlogin(){

  var onlyLetters = /^(?=.{2,15}$)[a-zA-Z]+$/;

  if (document.myform.name.value == ""){
    alert("please write your name");
  }
  else if (!document.myform.name.value.match(onlyLetters)){
    alert("please write your name in only letters");

  }
  else if(document.myform.password.value == ""){
    alert("please write your password");

  }
  
  else if(document.myform.password.value<=7){
    alert("password must be more than 8 digits");
}

    
 
}







function validationsignup(){
  var onlyLetters = /^(?=.{2,15}$)[a-zA-Z]+$/;
  var correctEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}/;

  if(document.signupform.name1.value == "" ){
    alert("please write your name in only letters");
  }
  else if (!document.signupform.name1.value.match(onlyLetters)){
    alert("please write your name in only letters");

  }

  else if (document.signupform.email1.value==""||!document.signupform.email1.value.match(correctEmail)){
    alert("please enter your email in correct format");
  }

  else if(document.signupform.password.value<=7){
    alert("password must be more than 8 digits");
}




  

    
 
}


function start(){
  document.hero.myform.sumb.addEventListener("click" , validationlogin(), false);
  document.myform.subbutton.addEventListener("click" , validationlogin(), false);
  
  
  var clearButton = document.getElementById("reset");
  clearButton.addEventListener("click" , clear, false);

}   

window.addEventListener("load" , start , false);