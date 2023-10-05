var email=null;
var title=null;
var para=null;
var A=document.getElementById('Done');
function says()
{
  A.classList.remove("d-none");
  
  
  email=document.getElementById("EMAIL").value;
  title=document.getElementById("TITLE").value;
 para=document.getElementById("PARA").value;
 
    document.getElementById("ThePost").innerText=para;
    
    document.getElementById("post-title").innerText=title;
    
    document.getElementById("WhoSaid").innerText=email+" says:";
}
