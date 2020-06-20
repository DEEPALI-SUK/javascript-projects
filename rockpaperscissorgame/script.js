const output= document.querySelector(".output");
function myf(){
    var x =document.createElement("img");
    x.setAttribute("src","win.gif");
    x.setAttribute("height","150px");
    document.querySelector(".output").appendChild(x);
}
function myf1(){
    var x =document.createElement("img");
    x.setAttribute("src","losee.gif");
    x.setAttribute("height","150px");
    document.querySelector(".output").appendChild(x);
}
function calculate1(){
   output.innerHTML=" ";
   var r=1;
   var num= ranNumber(1,3);
   if(num==2){
       output.innerHTML="<h1>You Lose</h1>";
       myf1();
       
   }
   if(num==3){
    output.innerHTML="<h1>You Win</h1>";
    myf();
   }
   if(num==1){
    output.innerHTML="<h1>Tie</h1>";
   }
   
}
function calculate2(){
    output.innerHTML=" ";
    var r=2;
    var num= ranNumber(1,3);
    if(num==1){
        output.innerHTML="<h1>You Win</h1>";
        myf();
    }
    if(num==2){
     output.innerHTML="<h1>Tie</h1>"
    }
    if(num==3){
     output.innerHTML="<h1>You Lose</h1>";
     myf1();
    }
    
 }
 function calculate3(){
    output.innerHTML=" ";
    var r=3;
    var num= ranNumber(1,3);
    if(num==1){
        output.innerHTML="<h1>You Lose</h1>";
        myf1();
    }
    if(num==2){
     output.innerHTML="<h1>You Win</h1>";
     myf();
    }
    if(num==3){
     output.innerHTML="<h1>Tie</h1>";
    }
    
 }
 function ranNumber(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
 }
 document.getElementById("rockb").onclick=function(){calculate1();};
 document.getElementById("paperb").onclick=function(){calculate2();};
 document.getElementById("scissorb").onclick=function(){calculate3();};
 output.innerHTML="Choose your weapon";
