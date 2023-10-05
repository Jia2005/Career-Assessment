var name="Codey", email="Codey@gmail.com", password="Codey@code"
interests=["Mathematics"," Science"," Coding"];

var sub1="maths",sub2="science",sub3,sub4;
var str1="coding",str2,str3;
var per1, per2, per3;
var val1,val2;



function READ()
{

  name = document.getElementById("NAME").value;
  email = document.getElementById("EMAIL").value;
  password = document.getElementById("PASSWORD").value;


  document.getElementById("res1").innerHTML = "You entered " + name;

  document.getElementById("res2").innerHTML = "You entered " + email;

  document.getElementById("res3").innerHTML = "You entered " + password;
  
  
}
var E="null",F="null",I="null";
function happy()
{
   E = document.getElementById('B');
   F = document.getElementById('good').value.trim();
   I = document.getElementById('bad').value.trim();
   
   
   
   console.log(F);
     if(F!=email){
   alert("Please enter either email or password");   
    }
    else if(I!=password)
    {
    alert("Please enter either email or password");
    }
    else
    {
    E.classList.remove('d-none'); 
    }
   
   
}





window.onload=function()
{
  var i=0;
  document.getElementById('Naamkaran').innerText=name;

    document.getElementById('details1').innerText=email;
    
    document.getElementById('details2').innerText=interests;
    
  if(sub1=="maths")
  {
    if(str1=="coding")
    {
      
      document.getElementById("PriorityName1").innerText="Engineering Field";
      document.getElementById("PriorityDescription1").innerText="An exciting field full of oppotunities that won't extinguish for years to come!! ";
      //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link></a>';
      
      document.getElementById("PriorityName2").innerText = "Medical Field";
      document.getElementById("PriorityDescription2").innerText = "Savings lives is humanities biggest value.";
     //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link></a>';
    }
    else if(str1=="problem-solving")
    {
      document.getElementById("PriorityName1").innerText = "Chartered Account";
      document.getElementById("PriorityDescription1").innerText = "An interesting field for finanace enthusuiasts out there!";
      //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link></a>';
      
      document.getElementById("PriorityName2").innerText = "Humanities";
      document.getElementById("PriorityDescription2").innerText = "Smthng about humanities";
      //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link></a>';
    }
  }
  else if(sub1=="science")
  {
    document.getElementById("PriorityName1").innerText = "Medical Field";
    document.getElementById("PriorityDescription1").innerText = "Savings lives is humanities biggest value.";
    //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link></a>';
    
    document.getElementById("PriorityName2").innerText = "Engineering Field";
    document.getElementById("PriorityDescription2").innerText = "An exciting field full of oppotunities that won't extinguish for years to come!! ";
    //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1prxxQReUe8X_ld692zgbKAPF8DSqxheF?usp=drive_link></a>';
  }
  else if(sub1=="english")
  {
    if(sub2=="social sciences")
    {
      document.getElementById("PriorityName2").innerText = "Buisness Management";
      document.getElementById("PriorityDescription2").innerText = "A management level position in the top companies";
      //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link></a>';
      
      document.getElementById("PriorityName2").innerText = "Humanities";
      document.getElementById("PriorityDescription2").innerText = "Smthng about humanities";
      //document.getElementById("PriorityLink1").innerHTML+="<br>"+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link+"<br>"+"<a href='+https://drive.google.com/drive/folders/1r3IwznLW1G-krXpTOK_q5YNsZ3nhuGz8?usp=drive_link></a>';
    }
    else if(sub2=="spoken-english/literature")
    {
      document.getElementById("PriorityName2").innerText = "Literature";
      document.getElementById("PriorityDescription2").innerText = "Dive into the amazing world of Shakespearean English.";
      //document.getElementById("PriorityLink1").innerHTML="<a href="#">Resources</a>"
    }
  }
}

/*function info()
{

  sub1 = document.getElementById("subject1").value;
  sub2 = document.getElementById("subject2").value;
  sub3 = document.getElementById("subject3").value;
  sub4 = document.getElementById("subject4").value;


  str1 = document.getElementById("strenght1").value;
  str2 = document.getElementById("strenght2").value;
  str3 = document.getElementById("strenght3").value;


  per1 = document.getElementById("personal1").value;
  per2 = document.getElementById("personal2").value;
  per3 = document.getElementById("personal3").value;


  val1 = document.getElementById("value1").value;
  val2 = document.getElementById("value2").value;

  document.getElementById("test").innerHTML = "You entered "
  value2;


}*/
