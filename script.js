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
  if (e.ctrlKey && e.which == 81){
    quit()
  }
}
document.onkeydown = function(e) {
  if (e.ctrlKey && e.which == 68){
    location.href='https://dpla-s.github.io/assets/DPLA.pdf'
  }
}

function clearcode(){
  if (window.confirm('Are you sure you want to clear your code? You will lose your work if you dont save.')){
    document.getElementById("codearea").value = "";
  }
}

function soon(){
  alert('Failed to run:\ncoming soon.')
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
  location.href='https://dpla-s.github.io/Beta-Editor-CSS/run#'+hrefValue+''
}

