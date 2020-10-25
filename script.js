"use strict";
$('#menu').load('parts/toolber.html');
let indentSize = Number(localStorage.getItem("DPLA_EDITOR_INDENT_SIZE")) || 2;
$('#editor-file-input').on('change', function(e) {
  const file = $(this).files[0];
  const fileReader = new FileReader();
  fileReader.onload = function() {
    codeArea.val(fileReader.result);
  }
  fileReader.readAsText(file);
});

function myFunction() {
  return "null";
}

document.getElementById("codearea").value = 'Lang[“DPLA”]\nEvent[onLaunch]:(\n command_print[“Hello world!”]\n)';

function quit(){
  if (window.confirm('Are you sure you want to quit? You will lose your work if you dont save.')){
  javascript:window.open('','_self').close();
  }
}
document.onkeydown = function(e) {
  if (e.ctrlKey && e.which == 81){ //q
    quit()
  }
}
document.onkeydown = function(e) {
  if (e.ctrlKey && e.which == 68){ //d
    window.open('https://dpla-s.github.io/assets/DPLA.pdf','_newtab');
  }
}

document.onkeydown = function(e) {
  if (e.ctrlKey && e.which == 82){ //r
    runcode()
  }
}

function clearcode(){
  if (window.confirm('Are you sure you want to clear your code? You will lose your work if you dont save.')){
    document.getElementById("codearea").value = "";
  }
}

function soon(){
  alert('Coming soon, but thanks for your curiosity.')
}

function textsize(){
  var size=prompt('Number')
  document.head.innerHTML+="<style>#codearea{font-size:"+size+"px;}</style>"
}
/*Null*/
function download(){
    var name = prompt('Name the File')
    var text = document.getElementById("codearea").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = ""+name+".dpla";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }
/*End of Null*/
function runcode(){
  var hrefValue = document.getElementById("codearea").value;
  window.open('https://dpla-s.github.io/Beta-Editor-CSS/run#'+hrefValue+'', '_newtab');
}

function hidesplash(){
  document.getElementById('splash').style.display = 'none';
}
