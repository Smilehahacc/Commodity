var nError = false;
var pError = false;
// var isLogin = false;
var isRemember = false;

var pEyes = false;
var pFocus = false;

var _numberError;
var _passwordError;
var number;
var password;

// 账户名自动补全
$(function() {
  var userTags = new Array();
  var i = 0;
  $.ajax({
    url : "Servlet/GetUserServlet",
    type : "post",
    data :{username:'lynn'},
    datatype : 'json',
    success : function(json) {
      $.each(JSON.parse(json),function(idx,obj) {
        userTags[i++]=obj.username;
      });
    },
    error : function() {
      alert("抱歉，服务器出错!");
    }
  });
  $("#number").autocomplete({
    source: userTags
  });
});

//登录验证步骤
function loginConfirm() {
  getInput();
  Confirm();
  numberError();
  passwordError();
  // loginState();
}

//获取输入内容
function getInput() {
  _numberError =  document.getElementById("number-error");
  _passwordError =  document.getElementById("password-error");
  number = document.getElementById("number").value;
  password =  document.getElementById("password").value;
}

//显示和隐藏清除按钮
function cleanDisplay() {
  var c = document.getElementById("clean");
  var n = document.getElementById("number");
  n.placeholder="";
  if(n.value!="") {
    c.style.display="";
  }
}
function cleanDisplayS() {
  setTimeout(function(){
    var c = document.getElementById("clean");
    var n = document.getElementById("number");
    n.placeholder="请输入账号/邮箱";
    c.style.display="none";},150);
}

//显示和隐藏眼睛按钮
function eyesDisplay() {
  var e = document.getElementById("eyes");
  var p = document.getElementById("password");
  p.placeholder="";
  e.style.display="";
}
function eyesDisplayS() {
  setTimeout(function(){
    var e = document.getElementById("eyes");
    var p = document.getElementById("password");
    p.placeholder="请输入密码";
    e.style.display="none";},150);
}

//清空账号输入
function numberClean() {
  var n = document.getElementById("number");
  var c = document.getElementById("clean");
  n.value="";
  c.style.display="";
}

//改变密码显示状态
function passwordEyes() {
  var e = document.getElementById("eyes");
  var p = document.getElementById("password");
  p.focus();
  pFocus = false;
  e.style.display="";
  if(pEyes == false) {
    p.type="text";
    e.src="sprites/eyestrue.png";
    pEyes = true;
  }
  else{
    p.type="password";
    e.src="sprites/eyesfalse.png";
    pEyes = false;
  }
}

//验证账号和密码格式
function Confirm() {

  //判断账号是否正确
  if(number.length>3) {
    nError = false;

    //判断密码格式是否正确
    if(password.length>5) {
      pError = false;
      isLogin = true;
    }
    else {
      pError = true;
    }

  }
  else {
    nError = true;
  }

  //格式都没错误,确认登录状态
  if(nError==false&&pError==false){
    loginState();
  }

}

//账号输入错误
function numberError() {
  if(nError == true) {
    _numberError.style.visibility="visible";
  }
  else {
    _numberError.style.visibility="hidden";
  }
}

//密码错误
function passwordError() {
  if(pError == true) {
    _passwordError.style.visibility="visible";
  }
  else {
    _passwordError.style.visibility="hidden";
  }
}

//记住密码验证
function cookieConfirm() {
  var r = document.getElementById("remember");

  //启用cookie记录密码数据
  if(r.checked) {
    r.value = true;
    isRemember = "true";
  }
  else {
    r.value = false;
    isRemember = "false";
  }

}

// ajax提交表单信息
function loginState() {
  		// 利用ajax将数据提交到后台
      $.ajaxSetup({ cache: false });
      $.ajax({
        url : "Servlet/LoginValadite",
        type : "post",
        data :{number:number,password:password,isCookie:isRemember},
        datatype : 'json',

        success : function(result) {
          if(result=="true") {
            var c = document.getElementById("loginComplete");
            c.style.display="";
            setTimeout("jump()",800);  //xx秒后跳转
          }
          else {
            alert("账号或密码输入错误！");
          }
        },
        error : function() {
          alert("抱歉，服务器出错!");
        }
      });
}

// 获取Cookie值
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

// 记住密码功能，检查cookie，匹配则自动输入密码
$('#number').blur(function(){
  var user = $('#number').val();
  var s = getCookie(user);
  if(user=="") {
    s="";
  }
  if (s!="") {
    // 自动输入密码并且将记住密码置为选中状态
    $('#password').val(s);
    $('#remember').prop("checked",true);
    isRemember = "true";
  }
});

//跳转页面，提交表单数据
function jump() {
  window.location.href="homepage.jsp";
}
