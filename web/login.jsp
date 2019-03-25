<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">

    <title>登录系统</title>

  	<meta http-equiv="pragma" content="no-cache">
  	<meta http-equiv="cache-control" content="no-cache">
  	<meta http-equiv="expires" content="0">
  	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
  	<meta http-equiv="description" content="This is my page">

  	<link rel="stylesheet" type="text/css" href="css/login.css">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/loginConfirm.js"></script>

    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/jquery-ui.min.css">

  </head>

  <body>

    <div class="main">
    	<div class="top"></div>
      <div class="down">
          <div class="powered">Powered by Lynn</div>
      </div>

    	<%-- <form action="Servlet/loginValadite" action="POST" name="lValadite"> --%>
        <div class="login-main">

          <div class="login-title">商品信息管理 | 登录</div>

          <input type="text" id="number" name="login-number" placeholder="请输入账号"
          onfocus="cleanDisplay()" onblur="cleanDisplayS()">
          <img src="sprites/number.png" class="icon"/>
          <img src="sprites/numberClean.png" id="clean" onclick="numberClean()" style="display:none"/>

          <p id="number-error" style="visibility:hidden">请输入正确的账号格式</p>
          <!-- 请输入正确的账号格式 -->
          <input type="password" id="password" name="login-password" placeholder="请输入密码"
          onfocus="eyesDisplay()" onblur="eyesDisplayS()">
          <img src="sprites/password.png" class="icon"/>
          <img src="sprites/eyesfalse.png" id="eyes" onclick="passwordEyes()" style="display:none"/>

          <p id="password-error" style="visibility:hidden">密码输入错误！</p>
          <!-- 密码输入错误！ -->
          <p class="login-remember">记住密码
            <input type="checkbox" id="remember" name="isRemember" value="false" onchange="cookieConfirm()"/>
            <a href="register.jsp" class="login-register">注册账号</a>
          </p>
          <button type="button" id="login-button" onclick="loginConfirm()">登 录</button>

        </div>

        <div class="login-complete" id="loginComplete" name="success" style="display:none">
          <img src="sprites/complete.png">
          <p>登录成功！</p>
        </div>

      <%-- </form> --%>
    </div>

  </body>
</html>
