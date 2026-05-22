let button1=document.getElementById("button1");
let whereBox=document.getElementById("whereBox");
let submitBtn=
document.getElementById("submitBtn");
button1.addEventListener("click", function(){
  whereBox.style.display= "block";});
submitBtn.addEventListener("click", function(){
  whereBox.style.display= "none"; alert("Details Sent")});
