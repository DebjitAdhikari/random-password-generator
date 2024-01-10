const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const specials = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
let theResult=[];
let isResult=false;
let copyExist=false;
const resultArea=document.querySelector(".result");
let copyBtn;
const generateBtn=document.querySelector(".generate");
let outputArea;

generateBtn.addEventListener("click",function(){
  const numOfA = Number(document.querySelector(".alphabet").value)
  const numofN = Number(document.querySelector(".num").value)
  const numofS = Number(document.querySelector(".spec").value)
  if((numOfA==0 && numofN==0 && numofS==0)||(numOfA<0 || numofN<0 || numofS<0)){
    alert("Invalid input.")
  }else{
    theResult=[];
    if(!isResult){
      resultArea.insertAdjacentHTML("afterbegin",`<input class="output"type="text">
      <button class="copy">Copy</button>`);
      isResult=true;
      addingEventToCopyButton();
    }
    copyBtn.textContent="Copy";
    numOfA>0 && generateLetters(numOfA);
    numofN>0 && generateNumber(numofN);
    numofS>0 && generateSpecial(numofS);
    shuffle();
    let finalPassword=theResult.join("");
    outputArea.value=finalPassword;
  }
})
function addingEventToCopyButton(){
  copyBtn=document.querySelector(".copy");
  outputArea=document.querySelector(".output")
  copyBtn.addEventListener("click",function(){
        outputArea.select();
        document.execCommand("copy");
        copyBtn.textContent="Copied!✅";
      });
}
function generateLetters(n){
  for(let i = 0;i<n;i++){
    let l= letters[Math.floor(Math.random()*letters.length)];
    theResult.push(l)
  }
}
function generateNumber(n){
  for(let i = 0;i<n;i++){
    let l= numbers[Math.floor(Math.random()*numbers.length)];
    theResult.push(l)
  }
}
function generateSpecial(n){
  for(let i = 0;i<n;i++){
    let l= specials[Math.floor(Math.random()*specials.length)];
    theResult.push(l)
  }
}

function shuffle(){
  theResult.sort((a,b)=>Math.random()-0.5);
}