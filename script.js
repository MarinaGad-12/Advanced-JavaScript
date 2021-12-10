function getCookie(cookieName) {
  //console.log(cookieName);
  if (arguments.length==0)
  {
    throw("You should Enter Cookie Name");
  }
  var cName= cookieName+"=";
  var arr= document.cookie.split(';');
  for(var i=0; i<arr.length; i++)
            {
              var temp = arr[i].trim();
              if (temp.indexOf(cName)==0)
              return temp.substring(cName.length,temp.length);
         	  }
            throw("Enter Valid Cookies Name")
}
function setCookie(cookieName,cookieValue,expiryDate) {
          document.cookie = cookieName + "=" + cookieValue+";expires=Thu, 01 Jan 2970 00:00:01 GMT";
}

function Book(nam,pri,auth)
{
    this.Name=nam;
    this.price=pri;
    this.author=function(_Aname,_mail)
    {
        this.AuthorName=_Aname;
        this.Mail=_mail;
    }
}
var inp= document.getElementById('num');
var myForm= document.getElementById('Form');
myForm.onsubmit= function(e)
{
    e.preventDefault();
    if(inp.value=="")
  {
    document.getElementById('sp1').innerText="This Field is required";
  }else if(isNaN(inp.value))
  {
    document.getElementById('sp1').innerText="You Should Enter Numbers Only";
  } else {
    var date = new Date("2021/11/11");
    setCookie("Books Num",num.value,date)
    window.location.replace("form.html");
    ////////////////////////////////////////////////////

  }
    //console.log(inp.value);
}