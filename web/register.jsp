<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
  <base href="<%=basePath%>">

  <meta http-equiv="pragma" content="no-cache">
  <meta http-equiv="cache-control" content="no-cache">
  <meta http-equiv="expires" content="0">
  <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
  <meta http-equiv="description" content="This is my page">

  <!-- 重置文件 -->
  <link rel="stylesheet" href="css/register.css">
  <title>用户注册</title>
</head>

<body>
  <%-- <form action="Servlet/registerValadite" name="rValadite" method="post"> --%>
    <div class="reg_div">
      <p>商品信息管理 | 用户注册</p>
      <ul class="reg_ul">
        <li>
            <span>用户名：</span>
            <input type="text" name="user" value="" placeholder="4-8位用户名" class="user">
            <span class="tip user_hint"></span>
        </li>
        <li>
            <span>密码：</span>
            <input type="password" name="password" value="" placeholder="6-16位密码" class="password">
            <span class="tip password_hint"></span>
        </li>
        <li>
            <span>确认密码：</span>
            <input type="password" name="confirm" value="" placeholder="确认密码" class="confirm">
            <span class="tip confirm_hint"></span>
        </li>
        <li>
            <span>邮箱：</span>
            <input type="text" name="email" value="" placeholder="邮箱" class="email">
            <span class="tip email_hint"></span>
        </li>
        <li>
            <span>手机号码：</span>
            <input type="email" name="mobile" value="" placeholder="手机号" class="mobile">
            <span class="tip mobile_hint"></span>
        </li>
        <li>
          <button type="button" name="back" class="back_button">返 回</button>
          <button type="button" name="register" class="register_button">注 册</button>
        </li>
      </ul>
    </div>
  <%-- </form> --%>

  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="js/registerConfirm.js"></script>

</body>
</html>
