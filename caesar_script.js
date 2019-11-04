const messageContainer = document.getElementById("message");

const messageOutput = document.createElement("textarea");
messageOutput.id = "messageOutput";
messageOutput.disabled = true;

///text encrypt and key for encryption
const textBox = document.getElementById("textBox");
const keyBox = document.getElementById("keyBox");

const caesar = function(text, key) {
///make open result string
  let msgCode = "";

/// encrypt the capital letters into charCode in a loop 65 - 90
  for(let i = 0; i < text.length; i++){
    let textCode = text.charCodeAt(i);
    if (textCode >= 65 && textCode <= 65 + 26 - 1){
      textCode -= 65;
      textCode = (textCode + key) % 26;
      if (textCode <0){
        textCode += 91;
      } else {
        textCode += 65;
      }
/// encrypt the lowercase letters into charCode in a loop 97 - 122
    } else if (textCode >= 97 && textCode <= 97 + 26 - 1){
      textCode -= 97;
      textCode = (textCode + key) % 26;
      if (textCode <0){
        textCode += 123;
      } else {
        textCode += 97;
      } 
    }
    /// turn charcode back to string of letters
    msgCode += String.fromCharCode(textCode);
  }
  return msgCode;  
}

messageOutput.textContent = "Coded message appear here";

let btnE = document.getElementById("encryptBtn");
  btnE.addEventListener("click", () => {
    text = textBox.value;
    keyString = keyBox.value;
    key = Number(keyString);
    messageOutput.textContent = caesar(text,key);
});

const reverseCaesar = function(text, key) {
///make open result string
  let msgCode = "";
  
/// encrypt the capital letters into charCode in a loop 65 - 90
  for(let i = 0; i < text.length; i++){
    let textCode = text.charCodeAt(i);
    if (textCode >= 65 && textCode <= 65 + 26 - 1){
      textCode -= 65;
      textCode = (textCode - key) % 26;
      if (textCode <0){
        textCode += 91;
      } else {
        textCode += 65;
      }
/// encrypt the lowercase letters into charCode in a loop 97 - 122
    } else if (textCode >= 97 && textCode <= 97 + 26 - 1){
      textCode -= 97;
      textCode = (textCode - key) % 26;
      if (textCode <0){
        textCode += 123;
      } else {
        textCode += 97;
      } 
    }
    /// turn charcode back to string of letters
    msgCode += String.fromCharCode(textCode);
  }
  return msgCode;  
}

let btnD = document.getElementById("decryptBtn");
  btnD.addEventListener("click", () => {
    text = textBox.value;
    keyString = keyBox.value;
    key = Number(keyString);
    messageOutput.textContent = reverseCaesar(text,key);
});

messageContainer.appendChild(messageOutput)