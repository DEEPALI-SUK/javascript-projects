const copyTxt=document.querySelector(".copyTxt");
const finalTxt=document.querySelector(".finalTxt");
const moverBtn=document.querySelector(".moverBtn");
const copyBtn=document.querySelector(".copyBtn");
const output=document.querySelector(".output");
moverBtn.addEventListener("click",moveText);
copyBtn.addEventListener("click",copyText);

function copyText(){
    var temp=copyTxt.value;
    copytoclipboard(temp);
}
function copytoclipboard(str){
    const textarea=document.createElement("textarea");
    textarea.value=str;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    output.innerHTML="<h3>Copied content</h3>"+textarea.value;
}
function moveText(){
    var t=copyTxt.value;
    finalTxt.value=t;
}
