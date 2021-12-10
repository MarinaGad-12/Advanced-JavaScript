function getCookie(cookieName) {
  //console.log(cookieName);
  if (arguments.length == 0) {
    throw ("You should Enter Cookie Name");
  }
  var cName = cookieName + "=";
  var arr = document.cookie.split(';');
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].trim();
    if (temp.indexOf(cName) == 0)
      return temp.substring(cName.length, temp.length);
  }
  throw ("Enter Valid Cookies Name")
}
function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = cookieName + "=" + cookieValue + ";expires=Thu, 01 Jan 2970 00:00:01 GMT";
}


function Book(nam, pri) {
  this.Name = nam;
  this.Price = pri;
  this.author = function (_Aname, _mail) {
    this.AuthorName = _Aname;
    this.Mail = _mail;
  }
}
var title = document.getElementById('title');
var price = document.getElementById('price');
var writer = document.getElementById('auth');
var mail = document.getElementById('mail');
var myForm = document.getElementById('Form');
var num = document.getElementById('num');
var letters = /^[A-Za-z]+$/;
var x = 4;
var i = 0;
//var test = 2;
var test= getCookie("Books Num");
test= parseInt(test);
var obj = []
var table = document.getElementById('table');
var rows = document.getElementById('rows');
myForm.onsubmit = function (e) {
  e.preventDefault();
  x = 4;
  ///////TITLE VALIDATION/////////////////////
  if (title.value == "") {
    document.getElementById('sp1').innerText = "This Field is required";
    x--;
  }
  ////////PRICE VALIDATION////////////////////////////////
  if (price.value == "") {
    document.getElementById('sp2').innerText = "This Field is required";
    x--;
  } else if (isNaN(price.value)) {
    document.getElementById('sp2').innerText = "You Should Enter Numbers Only";
    x--;
  }
  ///////////AUTHOR NAME/////////////////////
  if (writer.value == "") {
    document.getElementById('sp3').innerText = "This Field is required";
    x--;
  } else if (!letters.test(writer.value)) {
    document.getElementById('sp3').innerText = "You Should Enter Characters Only";
    x--;
  }
  ///////////MAIL VALIDATION//////////////////////
  if (mail.value == "") {
    e.preventDefault();
    document.getElementById('sp4').innerText = "This Field is required";
    x--;
  } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value)) {
    e.preventDefault();
    document.getElementById('sp4').innerText = "You Should Valid Format";
    x--;
  }

  ////////////FILL ARRAY/////////////////////
  if (x == 4) {
    obj[i] = new Book(title.value, price.value);
    obj[i].author(writer.value, mail.value);
    i++
    //   var x=getCookie("Books Num");
    // x=parseInt(x);
    // x--;
    // setCookie("Books Num",x,date);
    test--;
    if (test != 0) {
      title.value = "";
      price.value = "";
      writer.value = "";
      mail.value = "";
    } else {
      ///////////TABLE CREATION//////////
      myForm.remove();
      table.style.display = "inline";
      document.getElementById('tablestyle').style.display = "block";
      for (var j = 0; j < obj.length; j++) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var butt = document.createElement('button');
        var butt2 = document.createElement('button');
        var butt3 = document.createElement('button');
        var butt4 = document.createElement('button');
        var inp1 = document.createElement('input');
        var inp2 = document.createElement('input');
        var inp3 = document.createElement('input');
        var inp4 = document.createElement('input');
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        var span3 = document.createElement('span');
        var span4 = document.createElement('span');
        inp1.style.display = "none";
        inp2.style.display = "none";
        inp3.style.display = "none";
        inp4.style.display = "none";
        span1.innerHTML = obj[j].Name;
        span2.innerHTML = obj[j].Price;
        span3.innerHTML = obj[j].AuthorName;
        span4.innerHTML = obj[j].Mail;
        butt.innerHTML = "Edit";
        butt.setAttribute("onclick", "editing('" + j + "')");
        butt2.innerHTML = "Delet";
        butt2.setAttribute("onclick", "Delet('" + j + "')");
        butt3.innerHTML = "Save";
        butt3.setAttribute("onclick", "Save('" + j + "')");
        butt3.style.display = "none";
        butt4.innerHTML = "Cancle";
        butt4.setAttribute("onclick", "Cancle('" + j + "')");
        butt4.style.display = "none";
        td.appendChild(inp1);
        td2.appendChild(inp2);
        td3.appendChild(inp3);
        td4.appendChild(inp4);
        td.appendChild(span1);
        td2.appendChild(span2);
        td3.appendChild(span3);
        td4.appendChild(span4);
        tr.append(td);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        td5.appendChild(butt);
        td5.appendChild(butt2);
        td5.appendChild(butt3);
        td5.appendChild(butt4);
        tr.appendChild(td5);
        tr.id = j;
        document.getElementById("rows").appendChild(tr);
      }

    }
  }
}
function editing(value) {
  //event.preventDefault();

  var row = document.getElementById(value);
  var data = row.childNodes;
  var x1 = data[0].textContent;
  var x2 = data[1].textContent;
  var x2 = data[2].textContent;
  var x2 = data[3].textContent;
  //console.log(row.childNodes);
  data[0].childNodes[0].style.display = "inline";
  data[0].childNodes[1].style.display = "none";
  data[1].childNodes[0].style.display = "inline";
  data[1].childNodes[1].style.display = "none";
  data[2].childNodes[0].style.display = "inline";
  data[2].childNodes[1].style.display = "none";
  data[3].childNodes[0].style.display = "inline";
  data[3].childNodes[1].style.display = "none";

  data[0].childNodes[0].value = data[0].textContent;
  data[1].childNodes[0].value = data[1].textContent;
  data[2].childNodes[0].value = data[2].textContent;
  data[3].childNodes[0].value = data[3].textContent;
  data[4].childNodes[0].style.display = "none";
  data[4].childNodes[1].style.display = "none";
  data[4].childNodes[2].style.display = "inline";
  data[4].childNodes[3].style.display = "inline";



}
function Delet(value) {
  document.getElementById(value).remove();
}
function Save(value) {
  var row = document.getElementById(value);
  var data = row.childNodes;
  data[0].childNodes[0].style.display = "none";
  data[0].childNodes[1].style.display = "inline";
  data[1].childNodes[0].style.display = "none";
  data[1].childNodes[1].style.display = "inline";
  data[2].childNodes[0].style.display = "none";
  data[2].childNodes[1].style.display = "inline";
  data[3].childNodes[0].style.display = "none";
  data[3].childNodes[1].style.display = "inline";
  data[4].childNodes[0].style.display = "inline";
  data[4].childNodes[1].style.display = "inline";
  data[4].childNodes[2].style.display = "none";
  data[4].childNodes[3].style.display = "none";

  data[0].childNodes[1].textContent = data[0].childNodes[0].value;
  data[1].childNodes[1].textContent = data[1].childNodes[0].value;
  data[2].childNodes[1].textContent = data[2].childNodes[0].value;
  data[3].childNodes[1].textContent = data[3].childNodes[0].value;
  //console.log(data[0].childNodes[1]);
}
function Cancle(value) {
  var row = document.getElementById(value);
  var data = row.childNodes;
  data[0].childNodes[0].style.display = "none";
  data[0].childNodes[1].style.display = "inline";
  data[1].childNodes[0].style.display = "none";
  data[1].childNodes[1].style.display = "inline";
  data[2].childNodes[0].style.display = "none";
  data[2].childNodes[1].style.display = "inline";
  data[3].childNodes[0].style.display = "none";
  data[3].childNodes[1].style.display = "inline";

  data[4].childNodes[0].style.display = "inline";
  data[4].childNodes[1].style.display = "inline";
  data[4].childNodes[2].style.display = "none";
  data[4].childNodes[3].style.display = "none";
}
