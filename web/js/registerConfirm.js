var user_Boolean = false;
var password_Boolean = false;
var confirm_Boolean = false;
var emaile_Boolean = false;
var mobile_Boolean = false;

// user
$('.user').blur(function(){
  if ((/^[a-zA-Z0-9_-]{4,8}$/).test($(".user").val())){
    $('.user_hint').html("✔").css("color","green");
    user_Boolean = true;
  }else {
    $('.user_hint').html("×").css("color","red");
    user_Boolean = false;
  }
});
// password
$('.password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".password").val())){
    $('.password_hint').html("✔").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("×").css("color","red");
    password_Boolean = false;
  }
});


// password_confirm
$('.confirm').blur(function(){
  if (($(".password").val())==($(".confirm").val())){
    $('.confirm_hint').html("✔").css("color","green");
    confirm_Boolean = true;
  }else {
    $('.confirm_hint').html("×").css("color","red");
    confirm_Boolean = false;
  }
});


// Email
$('.email').blur(function(){
  if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(".email").val())){
    $('.email_hint').html("✔").css("color","green");
    emaile_Boolean = true;
  }else {
    $('.email_hint').html("×").css("color","red");
    emaile_Boolean = false;
  }
});


// Mobile
$('.mobile').blur(function(){
  if ((/^1[34578]\d{9}$/).test($(".mobile").val())){
    $('.mobile_hint').html("✔").css("color","green");
    mobile_Boolean = true;
  }else {
    $('.mobile_hint').html("×").css("color","red");
    mobile_Boolean = false;
  }
});


$('.register_button').click(function(){
  if(user_Boolean == true && password_Boolean == true && confirm_Boolean == true
     && emaile_Boolean == true && mobile_Boolean == true){
       // 表单数据获取
       var user = $('.user').val();
       var password = $('.password').val();
       var email = $('.email').val();
       var mobile = $('.mobile').val();

       $.ajax({
         url : "Servlet/RegisterValadite",
         type : "post",
         data :{user: user,password: password,email: email,mobile: mobile},
         datatype : 'json',
         success : function(result) {
           if(result=="true") {
              alert("注册成功，点击返回按钮进行登录吧！");
            }
            else {
              alert("填写的用户名已存在！");
            }
         },
         error : function() {
           alert("抱歉，服务器出错!");
         }
       });

  }else {
    alert("请完善信息!");
  }
});

// click
$('.back_button').click(function(){
  window.location.href="login.jsp";
});
