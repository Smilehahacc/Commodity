<%@ page language="java" import="com.connect.Commodities" pageEncoding="utf-8"%>
<%@ page import="java.util.List" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/homepage.css">
  <script src="js/code/highcharts.js"></script>
  <script src="js/code/highcharts-3d.js"></script>

  <title>商品信息管理系统</title>
</head>

<!-- 登录信息的获取 -->
<%
  String username = request.getSession().getAttribute("username").toString();
  String email = request.getSession().getAttribute("email").toString();
  String mobile = request.getSession().getAttribute("mobile").toString();
  String headPortrait = request.getSession().getAttribute("headPortrait").toString();
  String clickwhat = request.getSession().getAttribute("clickwhat").toString();

%>
<body>
  <!-- 头部选项 -->
  <div class="head" tabindex="0contenteditable:true">
    <%-- 定义隐藏的a标签来存储当前左侧选项哪个被点击 --%>
    <a id='ClickWhat' style='display:none'><%=clickwhat %></a>
    <p>商品信息管理系统</p>
    <div class="head-menu">
      <ul>
        <!-- 主题修改下拉菜单 -->
        <li><a href="#">更换主题</a>
          <ul id="color">
            <li><a href="#"><img src="sprites/redTheme.png">红色</a></li>
            <li><a href="#"><img src="sprites/pinkTheme.png">粉色</a></li>
            <li><a href="#"><img src="sprites/blueTheme.png">蓝色</a></li>
            <li><a href="#"><img src="sprites/purpleTheme.png">紫色</a></li>
            <li><a href="#"><img src="sprites/defaultTheme.png">默认</a></li>
          </ul>
        </li>
        <!-- 主页-退出下拉菜单 -->
        <li><a href="#">用户</a>
          <ul id="user">
            <li><a href="homepage.jsp">进入主页</a></li>
            <li><a href="#">退出登录</a></li>
          </ul>
        </li>
      </ul>
    </div>

  </div><!-- 头部选项 -->

  <!-- 操作界面主体 -->
  <div class="main">
    <!-- 头像-用户名-账户管理 -->
    <div class="left">
      <div id="head-portrait">
        <div id='showHeadPortrait'>
          <img src=<%=headPortrait %> data-toggle="modal" data-target="#myModal-3"></img>
        </div>
        <p><%=username %></p>
        <a href="#">账户管理</a>
      </div>
    </div><!-- 头像-用户名-账户管理 -->

    <!-- 功能选项 -->
    <ul id="functionMenu">
      <li>商品查询</li>
      <li>进货</li>
      <li>出货</li>
      <li>库存单处理</li>
      <li>销售统计</li>
    </ul>

    <!-- 右边功能界面 -->
    <div class="right">
      <!-- 商品查询 -->
      <div id="lookup">
        <div class="find">
          <label>商品ID</label>
          <input type="text" placeholder="请输入商品ID" value="">
          <label>商品名称</label>
          <input type="text" placeholder="请输入商品名称" value="">
          <button type="button" id='find-ordinary'>查询</button>
          <button type="button" id='find-senior' data-toggle="modal" data-target="#myModal-1">高级查询</button>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">商品种类<span class="caret"></span></button>
          <input type="text" value="不选" readOnly id='kind'>
          <ul class="dropdown-menu" role="menu">
            <li><a href='javascript:'>不选</a></li>
            <li><a href='javascript:'>日用品</a></li>
            <li><a href='javascript:'>化妆品</a></li>
            <li><a href='javascript:'>食品</a></li>
            <li><a href='javascript:'>手机</a></li>
            <li><a href='javascript:'>家电</a></li>
          </ul>
        </div>
        <!-- 查询结果列表头 -->
        <div id='tableHead'>
          <div class='table-head'>商品ID</div>
          <div class='table-head'>商品名称</div>
          <div class='table-head'>单价</div>
          <div class='table-head'>类别</div>
          <div class='table-head'>库存</div>
        </div>
        <!-- 滚动列表展示商品信息 -->
        <div class='list' id='List' style="left:0px;overflow:scroll;overflow-x:hidden;min-height:500px;height:500px;width:100%">
          <%
            List<Commodities> list = (List<Commodities>)request.getSession().getAttribute("cList");
            for(int i=0;i<list.size();i++)
            {
               Commodities c = list.get(i);
          %>
          <div class="information">
            <div class='infor'><%=c.getId() %></div>
            <div class='infor'><%=c.getName() %></div>
            <div class='infor'><%=c.getPrice() %></div>
            <div class='infor'><%=c.getKind() %></div>
            <div class='infor'><%=c.getInventory() %></div>
            <div class='infor'><button class="change-button" style='visibility:visible' data-toggle="modal" data-target="#myModal-2">修改</button></div>
            <%-- <button class="ok-button" style='visibility:hidden'>确认</button> --%>
          </div>
          <%
            }
          %>
          <%-- <div class="information">
            <div class='infor'>2018101918</div>
            <div class='infor'>九阳豆浆机</div>
            <div class='infor'>299</div>
            <div class='infor'>家电</div>
            <div class='infor'>46</div>
            <div class='infor'><button class="change-button" style='visibility:visible'>修改</button></div>
            <button class="ok-button" style='visibility:hidden'>确认</button>
          </div>--%>
        </div>

      </div><!-- 商品查询 -->

      <!-- 进货 -->
      <div id="purchase">
        <div>
          <p>商品ID</p>
          <input type="text" placeholder="10位商品ID号码" value="">
          <p>商品名称</p>
          <input type="text" placeholder="请输入商品名称" value="">
          <p>商品单价</p>
          <input type="text" placeholder="1-11位数字（最多保留两位小数）" value="">
          <p>商品类别</p>
          <input type="text" placeholder="请输入商品种类" value="">
          <p>进货量</p>
          <input type="text" placeholder="1-11位整数" value="">
          <button>确认订单</button>
          <!-- 按钮触发模态框 -->
          <button class="additional" data-toggle="modal" data-target="#myModal">额外进货</button>

        </div>
      </div><!-- 进货 -->

      <!-- 出货 -->
      <div id="sellOut">
        <div>
          <p>商品ID</p>
          <input type="text" placeholder="10位商品ID号码" value="">
          <p>出货量</p>
          <input type="text" placeholder="1-11位整数" value="">
          <button>确定出货</button>
        </div>
      </div><!-- 出货 -->

      <!-- 库存单处理 -->
      <div id="inventory">
        <div>
          <form id="UploadForm" enctype="multipart/form-data" method="post" action="Servlet/u">
              <input type="file" name="import" size="20" maxlength="20" value="">
          </form>
          <button id='in' style="left:120px;">导入库存单</button>
          <input type="text" name="export" value="" placeholder="导出文件路径（不填则保存在默认路径）" >
          <button id='out' style="left:120px;">导出库存单</button>
        </div>
      </div><!-- 库存单处理 -->

      <!-- 销售统计 -->
      <div id="statistics">
        <div id="container1"></div>
        <div id="container2"></div>
      </div><!-- 销售统计 -->


      <!-- 账户管理 -->
      <div id="userManage">
        <!-- 菜单栏 -->
        <ul>
          <li><a href='javascript:' class="active">个人信息</a></li>
          <li><a href='javascript:'>权限申请</a></li>
          <li><a href='javascript:'>修改密码</a></li>
        </ul>
        <!-- 个人信息 -->
        <div id="information">
          <p>注册邮箱</p>
          <input type="text" readOnly placeholder="输入邮箱账号" value=<%=email %>>
          <button>修改邮箱</button>
          <p>手机号码</p>
          <input type="text" readOnly placeholder="请输入正确的手机号格式" value=<%=mobile %>>
          <button>更换号码</button>
          <p>用户名</p>
          <input type="text" readOnly placeholder="请输入4-16位用户名" value=<%=username %>>
          <button>更改昵称</button>
          <a href="#">保存更改</a>
        </div><!-- 个人信息 -->
        <!-- 权限申请 -->
        <div id="power">
          <p>请输入管理员提供的权限申请码</p>
          <input type="text" placeholder="24位权限申请码">
          <a href="#">提交</a>
        </div><!-- 权限申请 -->
        <!-- 修改密码 -->
        <div id="modifyPassword">
          <p>当前密码</p>
          <input type="password" placeholder="密码长度6-16位，包含数字和字母">
          <span class="tip passwordBefore"></span>
          <p>新密码</p>
          <input type="password" placeholder="新密码和当前密码不能相同">
          <span class="tip passwordNew"></span>
          <p>确认密码</p>
          <input type="password" placeholder="确认密码和新密码保持一致">
          <span class="tip passwordConfirm"></span>
          <button>修改密码</button>
        </div><!-- 修改密码 -->

      </div><!-- 账户管理 -->

    </div>
  </div>

  <!-- 界面底部 -->
  <div class="bottom">
    <p>Copyright © Lynn</p>
  </div>

  <!-- 模态框（Modal） -->
  <!-- 额外进货 -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">额外进货</h4>
        </div>
        <div class="modal-body">
          <p>商品ID</p>
          <input type="text" placeholder="10位商品ID号码" value="" id="additionalSid">
          <p>进货量</p>
          <input type="text" placeholder="1-11位整数" value="" id="additionalSnum">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" id='submitOrder'>提交订单</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
  <!-- 高级查询 -->
  <div class="modal fade" id="myModal-1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">高级查询</h4>
        </div>
        <div class="modal-body1">
          <div>
            <label>商品ID</label>
            <input type="text" placeholder="待查询商品ID" value="" id="find-Id">
          </div>
          <div>
            <label>商品名称</label>
            <input type="text" placeholder="商品名称" value="" id="find-Name">
          </div>
          <div>
            <label>商品种类</label>
            <input type="text" placeholder="商品种类" value="" id="find-Kind">
          </div>
          <div>
            <label>价格区间</label>
            <input type="text" value="" id="find-Price1">
            <a>～</a>
            <input type="text" value="" id="find-Price2">
          </div>
          <div>
            <label>剩余库存</label>
            <input type="text" value="" id="find-Inventory1">
            <a>～</a>
            <input type="text" value="" id="find-Inventory2">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" id='submitFind'>提交</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
  <!-- 修改商品信息 -->
  <div class="modal fade" id="myModal-2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">商品信息修改</h4>
        </div>
        <div class="modal-body1">
          <div>
            <label>商品ID</label>
            <input type="text" value="" id="modify-Id">
          </div>
          <div>
            <label>商品名称</label>
            <input type="text" value="" id="modify-Name">
          </div>
          <div>
            <label>价格</label>
            <input type="text" value="" id="modify-Price">
          </div>
          <div>
            <label>商品种类</label>
            <input type="text" value="" id="modify-Kind">
          </div>
          <div>
            <label>剩余库存</label>
            <input type="text" value="" id="modify-Inventory">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" id='submitModify'>确认修改</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>
  <!-- 修改用户头像 -->
  <div class="modal fade" id="myModal-3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="myModalLabel">修改头像</h4>
        </div>
        <div class="modal-body1">
          <div id='myportrait'>
            <label>选择图片</label>
            <div id="preview"><img src=<%=headPortrait %> onclick='UPortrait.click()'></div>
            <input type="file" id='UPortrait' onchange="preview(this)"/>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" id='UploadPortrait'>确认上传</button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal -->
  </div>

  <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  <script type="text/javascript" src="js/homepageOperation.js"></script>
  <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>

</html>
