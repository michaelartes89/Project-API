// setting variables//
var char ="abcdefghijklmnop";
var num ="123456789";
var sym = "!@#$%^&*";
var cap = "ABCDEFGHIJKLMNOP";

var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var capBox =document.getElementById("cap")
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    var characters = char;
    (numBox.checked) ? characters += num : "";
    (symBox.checked) ? characters += sym : "";
    (capBox.checked) ? characters += cap : "";
    yourPw.value = password(charNum.value, characters);
});

function password(l,characters){
    var pwd = "";
    for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
