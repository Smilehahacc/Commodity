var a = 100;
var email_Boolean;
var mobile_Boolean;
var user_Boolean;
var usernameNew_Boolean;

var power_Boolean;

var passwordBefore_Boolean;
var passwordNew_Boolean;
var passwordConfirm_Boolean;

var purchaseId_Boolean;
var purchasePrice_Boolean;
var purchaseNum_Boolean;

var sellOutId_Boolean;
var sellOutNum_Boolean;
var additionalSid_Boolean;
var additionalSnum_Boolean;

var findPrice_Boolean;
var findInventory_Boolean;

var oldId;
var modifyId_Boolean;
var modifyPrice_Boolean;
var modifyInventory_Boolean;

var headPortrait;
var headPortrait_Boolean;
var portrait_path;
// 初始化
$(function() {
  // 加载完成后模拟点击，选择一个初始功能界面进行显示（这里默认是查询界面）
  var clickwhat = parseInt($('#ClickWhat').text());
  if(clickwhat==4) {
    $('#head-portrait a').click();
  }else {
    $('#functionMenu li').eq(clickwhat).click();
    // $('#functionMenu li:eq(0)').click();
  }
  addClick();
  email_Boolean = true;
  mobile_Boolean = true;
  user_Boolean = true;
  modifyId_Boolean = true;
  modifyPrice_Boolean = true;
  modifyInventory_Boolean = true;
});

//初始化-添加按钮点击事件
function addClick() {
  var b = $('.change-button');
  for(var i = 0; i < b.length; i++){
    $(b[i]).bind("click",{index:i},clickHandler);
  };
  // 点击修改按钮，弹出模态框，并更新模态框中的数据
  function clickHandler(s) {
    var i = s.data.index;
    var s = 7*i+1;
    $('#modify-Id').val($('#List div').eq(s).text());
    $('#modify-Name').val($('#List div').eq(s+1).text());
    $('#modify-Price').val($('#List div').eq(s+2).text());
    $('#modify-Kind').val($('#List div').eq(s+3).text());
    $('#modify-Inventory').val($('#List div').eq(s+4).text());
    // 记录修改前的Id
    oldId = $('#List div').eq(s).text();
    var e1 = $('#modal-overlay');
    e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
  }
}

// 点击更改主题按钮，更改界面外观
$('#color li:eq(0)').click(function() {
  $('.head').css('background-color', 'rgb(255, 0, 0)');
  $('#color li,#user li').css('background-color', 'rgba(255, 0, 0, 0.88)');
});
// 粉
$('#color li:eq(1)').click(function() {
  $('.head').css('background-color', 'rgb(255, 0, 179)');
  $('#color li,#user li').css('background-color', 'rgba(255, 0, 179, 0.88)');
});
// 蓝
$('#color li:eq(2)').click(function() {
  $('.head').css('background-color', 'rgb(38, 196, 255)');
  $('#color li,#user li').css('background-color', 'rgba(38, 196, 255, 0.88)');
});
// 紫
$('#color li:eq(3)').click(function() {
  $('.head').css('background-color', 'rgb(173, 56, 255)');
  $('#color li,#user li').css('background-color', 'rgba(173, 56, 255, 0.88)');
});
// 默认
$('#color li:eq(4)').click(function() {
  $('.head').css('background-color', 'rgb(0, 156, 147)');
  $('#color li,#user li').css('background-color', 'rgba(0, 156, 147, 0.88)');
});

// 控制右侧功能区域的显示和隐藏及左侧功能栏样式
$('#functionMenu li:eq(0)').click(function() {
  $('#lookup').css({
    'z-index': a++
  });
  $(this).addClass("choice").siblings().removeClass("choice");
});
$('#functionMenu li:eq(1)').click(function() {
  $('#purchase').css({
    'z-index': a++
  });
  $(this).addClass("choice").siblings().removeClass("choice");
});
$('#functionMenu li:eq(2)').click(function() {
  $('#sellOut').css({
    'z-index': a++
  });
  $(this).addClass("choice").siblings().removeClass("choice");
});
$('#functionMenu li:eq(3)').click(function() {
  $('#inventory').css({
    'z-index': a++
  });
  $(this).addClass("choice").siblings().removeClass("choice");
});
$('#functionMenu li:eq(4)').click(function() {
  $('#statistics').css({
    'z-index': a++
  });
  $(this).addClass("choice").siblings().removeClass("choice");
});
$('#head-portrait a').click(function() {
  $('#userManage').css({
    'z-index': a++
  });
  $('#functionMenu>li').removeClass("choice");
});
// 控制账户管理菜单栏样式
$('#userManage ul li:eq(0)').click(function() {
  $('#information').css({
    'z-index': a++
  });
  $('#userManage ul li:eq(0) a').addClass("active");
  $('#userManage ul li:eq(1) a').removeClass("active");
  $('#userManage ul li:eq(2) a').removeClass("active");
});
$('#userManage ul li:eq(1)').click(function() {
  $('#power').css({
    'z-index': a++
  });
  $('#userManage ul li:eq(1) a').addClass("active");
  $('#userManage ul li:eq(0) a').removeClass("active");
  $('#userManage ul li:eq(2) a').removeClass("active");
});
$('#userManage ul li:eq(2)').click(function() {
  $('#modifyPassword').css({
    'z-index': a++
  });
  $('#userManage ul li:eq(2) a').addClass("active");
  $('#userManage ul li:eq(0) a').removeClass("active");
  $('#userManage ul li:eq(1) a').removeClass("active");
});
// 控制修改框的输入状态 不可点击，按钮变灰
$('#information button:eq(0)').click(function() {
  $('#information input:eq(0)').removeAttr("readOnly");
  $('#information input:eq(0)').css('cursor', 'auto');
  $(this).attr('disabled', true);
  $(this).css('background-color', 'rgba(198, 198, 198, 0.3)');
});
$('#information button:eq(1)').click(function() {
  $('#information input:eq(1)').removeAttr("readOnly");
  $('#information input:eq(1)').css('cursor', 'auto');
  $(this).attr('disabled', true);
  $(this).css('background-color', 'rgba(198, 198, 198, 0.3)');
});
$('#information button:eq(2)').click(function() {
  $('#information input:eq(2)').removeAttr("readOnly");
  $('#information input:eq(2)').css('cursor', 'auto');
  $(this).attr('disabled', true);
  $(this).css('background-color', 'rgba(198, 198, 198, 0.3)');
  usernameNew_Boolean = true;
});


/*--------------------输入验证--------------------*/
// 邮箱
$('#information input:eq(0)').blur(function() {
  if (!(/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($(this).val())) {
    alert("请输入正确的邮箱地址！");
    email_Boolean = false;
    $('.head').focus();
  } else {
    email_Boolean = true;
  }
});
// 手机号
$('#information input:eq(1)').blur(function() {
  if (!(/^1[34578]\d{9}$/).test($(this).val())) {
    alert("手机号输入错误，请重新输入！");
    mobile_Boolean = false;
    $('.head').focus();
  } else {
    mobile_Boolean = true;
  }
});
// 用户名
$('#information input:eq(2)').blur(function() {
  if (!(/^[a-z0-9_-]{4,16}$/).test($(this).val())) {
    alert("请输入正确的用户名格式！");
    user_Boolean = false;
    $('.head').focus();
  } else {
    user_Boolean = true;
  }
});

// 申请码
$('#power input').blur(function() {
  if (!(/^[a-z0-9_-]{24}$/).test($(this).val())) {
    alert("请输入格式正确的申请码！");
    power_Boolean = false;
    $('.head').focus();
  } else {
    power_Boolean = true;
  }
});

// 修改前密码
$('#modifyPassword input:eq(0)').blur(function() {
  if ((/^[a-z0-9_-]{6,16}$/).test($(this).val())) {
    $('.passwordBefore').html("✔").css("color", "green");
    passwordBefore_Boolean = true;
  } else {
    $('.passwordBefore').html("×").css("color", "red");
    passwordBefore_Boolean = false;
  }
});
// 新密码
$('#modifyPassword input:eq(1)').blur(function() {
  if ((/^[a-z0-9_-]{6,16}$/).test($(this).val()) &&
    ($(this).val()) != ($('#modifyPassword input:eq(0)').val())) {
    $('.passwordNew').html("✔").css("color", "green");
    passwordNew_Boolean = true;
  } else {
    $('.passwordNew').html("×").css("color", "red");
    passwordNew_Boolean = false;
  }
});
// 密码确认
$('#modifyPassword input:eq(2)').blur(function() {
  if (($('#modifyPassword input:eq(1)').val()) == ($(this).val()) &&
    ($('#modifyPassword input:eq(1)').val()) != '') {
    $('.passwordConfirm').html("✔").css("color", "green");
    passwordConfirm_Boolean = true;
  } else {
    $('.passwordConfirm').html("×").css("color", "red");
    passwordConfirm_Boolean = false;
  }
});

// 商品查询
// 更改下拉选择框的值
$('.dropdown-menu > li').on('click', function() {
  $('#kind').val($(this).text());
});
// 查询
$('#find-ordinary').on('click', function() {
  var commodities = {
    id:$(".find input:eq(0)").val(),
    name:$(".find input:eq(1)").val(),
    kind:$("#kind").val()
  };
  // 利用ajax将数据提交到后台
  $.ajax({
    url : "Servlet/FindCommodity",
    type : "post",
    data : commodities,
    datatype : 'json',
    async: false,
    success : function(result) {
      if(result=="true") {
        // $(".right").load(location.href+".right");
        // window.location.reload();
      }
      else {
        alert("抱歉，无查询结果！");
      }
      // 刷新页面
      window.location.reload();
    },
    error : function(){
      alert("抱歉，服务器出错!");
    }
  });

});
// 高级查询
$('#find-senior').on('click', function() {
  var e1 = $('#modal-overlay');
  e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
});
// 高级查询-商品种类选择按钮样式
//自动展开
$('.btn-group button').mouseenter(function() {
  $(".btn-group button").click();
  $('#lookup ul').addClass('open');
});
//自动关闭
$('.btn-group button').mouseleave(function() {
  $(".btn-group button").blur();
  $('#lookup ul').removeClass('open');
});

// 高级查询-提交表单
$('#submitFind').click(function () {
  var findPrice1 = $('#find-Price1').val();
  var findPrice2 = $('#find-Price2').val();
  var findInventory1 = $('#find-Inventory1').val();
  var findInventory2 = $('#find-Inventory2').val();
  findPrice_Boolean = false;
  findInventory_Boolean = false;
  if(findPrice1=='' && findPrice2=='') {
      findPrice_Boolean = true;
  }else if(findPrice1==''||findPrice2=='') {
    if((/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findPrice1)
    || (/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findPrice2)) {
      findPrice_Boolean = true;
    }else{
      findPrice_Boolean = false;
    }
  }else if ((/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findPrice1)
  && (/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findPrice2)) {
    if(parseFloat(findPrice1) < parseFloat(findPrice2)) {
      findPrice_Boolean = true;
    }else{
      findPrice_Boolean = false;
    }
  }

  if(findInventory1=='' && findInventory2=='') {
      findInventory_Boolean = true;
  }else if(findInventory1==''||findInventory2=='') {
    if((/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findInventory1)
    || (/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findInventory2)) {
      findInventory_Boolean = true;
    }else{
      findInventory_Boolean = false;
    }
  }else if ((/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findInventory1)
  && (/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test(findInventory2)) {
    if(parseFloat(findInventory1) < parseFloat(findInventory2)) {
      findInventory_Boolean = true;
    }else{
      findInventory_Boolean = false;
    }
  }

  //输入价格区间正确-提交表单开始查询
  if(findPrice_Boolean && findInventory_Boolean) {
    findSenior();
    $('.btn-default').click();
  }else {
    alert('请输入正确的价格区间！');
  }
});

// 高级查询-表单提交
function findSenior() {
  var commodities = {
    id:$("#find-Id").val(),
    name:$("#find-Name").val(),
    kind:$("#find-Kind").val(),
    price1:$("#find-Price1").val(),
    price2:$("#find-Price2").val(),
    inventory1:$("#find-Inventory1").val(),
    inventory2:$("#find-Inventory2").val()
  };
  // 利用ajax将数据提交到后台
  $.ajax({
    url : "Servlet/FindCommodityS",
    type : "post",
    data : commodities,
    datatype : 'json',
    success : function(result) {
      if(result!="true") {
        alert("抱歉，无查询结果！");
      }
      // 刷新页面
      window.location.reload();
    },
    error : function(){
      alert("抱歉，服务器出错!");
    }
  });
}

// 商品信息修改-条件约束
// 商品ID
$('#modify-Id').blur(function() {
  if (!(/^[a-zA-Z0-9_-]{10}$/).test($(this).val())) {
    alert("请输入正确的商品ID！");
    modifyId_Boolean = false;
    $('.head').focus();
  } else {
    modifyId_Boolean = true;
  }
});
// 单价
$('#modify-Price').blur(function() {
  if (!(/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test($(this).val())) {
    alert("商品单价必须为数字（最多保留两位小数）");
    modifyPrice_Boolean = false;
    $('.head').focus();
  } else {
    modifyPrice_Boolean = true;
  }
});
// 库存
$('#modify-Inventory').blur(function() {
  if (!(/^[1-9_-][0-9_-]{0,10}$/).test($(this).val())) {
    alert("商品库存必须为整数！");
    modifyInventory_Boolean = false;
    $('.head').focus();
  } else {
    modifyInventory_Boolean = true;
  }
});

// 商品信息修改-确认修改（提交表单）
$('#submitModify').click(function() {
  if(modifyId_Boolean && modifyPrice_Boolean && modifyInventory_Boolean) {
    var modifyInforation = {
      id:$('#modify-Id').val(),
      name:$('#modify-Name').val(),
      price:$('#modify-Price').val(),
      kind:$('#modify-Kind').val(),
      inventory:$('#modify-Inventory').val(),
      oldId: oldId
    };
    // 利用ajax将数据提交到后台
    $.ajax({
      url : "Servlet/ModifyCommodity",
      type : "post",
      data : modifyInforation,
      datatype : 'json',
      success : function(result) {
        if(result=="true") {
          alert("商品信息修改成功！");
          // 刷新页面
          window.location.reload();
        }else {
          alert("抱歉，商品ID重复，修改失败！");
        }
      },
      error : function(){
        alert("抱歉，服务器出错!");
      }
    });
  }else {
    alert('请输入正确的商品信息！');
  }
});

// 进货ID
$('#purchase input:eq(0)').blur(function() {
  if (!(/^[a-zA-Z0-9_-]{10}$/).test($(this).val())) {
    alert("请输入正确的商品ID");
    purchaseId_Boolean = false;
    $('.head').focus();
  } else {
    purchaseId_Boolean = true;
  }
});
// 单价
$('#purchase input:eq(2)').blur(function() {
  if (!(/^([1-9]\d{0,10}(\.\d{1,2})|0(\.\d{1,2})|[1-9]\d{0,10})$/).test($(this).val())) {
    alert("单价必须为1-11位数字（最多保留两位小数）");
    purchasePrice_Boolean = false;
    $('.head').focus();
  } else {
    purchasePrice_Boolean = true;
  }
});
// 进货量
$('#purchase input:eq(4)').blur(function() {
  if (!(/^[1-9_-][0-9_-]{0,10}$/).test($(this).val())) {
    alert("进货量必须为1-11位整数");
    purchaseNum_Boolean = false;
    $('.head').focus();
  } else {
    purchaseNum_Boolean = true;
  }
});
// 额外进货ID
$('#additionalSid').blur(function() {
  if (!(/^[a-zA-Z0-9_-]{10}$/).test($(this).val())) {
    alert("请输入正确的商品ID");
    additionalSid_Boolean = false;
    $('.head').focus();
  } else {
    additionalSid_Boolean = true;
  }
});
// 额外进货量
$('#additionalSnum').blur(function() {
  if (!(/^[1-9_-][0-9_-]{0,10}$/).test($(this).val())) {
    alert("进货量必须为1-11位整数");
    additionalSnum_Boolean = false;
    $('.head').focus();
  } else {
    additionalSnum_Boolean = true;
  }
});

// 出货ID
$('#sellOut input:eq(0)').blur(function() {
  if (!(/^[a-zA-Z0-9_-]{10}$/).test($(this).val())) {
    alert("请输入正确的商品ID");
    sellOutId_Boolean = false;
    $('.head').focus();
  } else {
    sellOutId_Boolean = true;
  }
});
// 出货量
$('#sellOut input:eq(1)').blur(function() {
  if (!(/^[1-9_-][0-9_-]{0,10}$/).test($(this).val())) {
    alert("出货量必须为1-11位整数");
    sellOutNum_Boolean = false;
    $('.head').focus();
  } else {
    sellOutNum_Boolean = true;
  }
});

/*--------------------按钮提交验证--------------------*/
// 修改个人信息
$('#information a').click(function() {
  if (email_Boolean == true && mobile_Boolean == true && user_Boolean == true) {
    var user = {
      username:$("#information input:eq(2)").val(),
      email:$("#information input:eq(0)").val(),
      mobile:$("#information input:eq(1)").val()
     };
    // 利用ajax将数据提交到后台
    $.ajax({
      url : "Servlet/InforModify",
      type : "post",
      data : user,
      datatype : 'json',
      success : function(result) {
        if(result=="true") {
          alert('个人信息修改成功！');
        }
        else {
          if(usernameNew_Boolean) {
            alert("用户名未修改,其他信息保存成功！");
          }else {
            alert('信息修改成功！');
          }
        }
        // 刷新页面
        window.location.reload();
      },
      error : function(xhr){
        alert(xhr.responseText);
        alert("抱歉，服务器出错!");
      }
    });
  } else {
    alert('对不起，个人信息输入有误！');
  }
});

// 实时显示上传头像
function preview(file) {
  // 判断格式是否正确
  headPortrait = file.files[0].name;
  var img = ['.png', '.jpeg', '.jpg'];
  var headPortraitSuffix  = headPortrait.slice(headPortrait.indexOf("."));
  if(img.indexOf(headPortraitSuffix ) > -1){
    filename_Boolean = true;
  }else{
    filename_Boolean = false;
    alert("文件类型错误，请选择正确的图片文件！");
  }

  // 在页面上更新刚选择的头像文件
  var prevDiv = document.getElementById('preview');
  if (file.files && file.files[0]) {
      var reader = new FileReader();
      reader.onload = function(evt) {
      prevDiv.innerHTML = '<img' +' src="' + evt.target.result + '" />';
  }
  reader.readAsDataURL(file.files[0]);
  }else {
      prevDiv.innerHTML = '<div class="PortraitImg" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + file.value + '\'"></div>';
  }
  portrait_path = $('#UPortrait').val();
  $('#UPortrait').replaceWith('<input id="UPortrait" type="file" onchange="preview(this)" />');
}

// 上传头像
$('#UploadPortrait').click(function(){
  if(filename_Boolean == true) {
    $.ajax({
      url : "Servlet/UploadPortraitServlet",
      type : "post",
      data : {headPortrait:headPortrait},
      datatype : 'json',
      cache: false,
      success : function(result) {
        if(result=="true") {
          alert('头像上传成功！');
          $('.btn-default').click();
          var showHeadPortrait = document.getElementById('showHeadPortrait');
          var str = '<img' +' src="portrait/' + headPortrait + '" data-toggle="modal" data-target="#myModal-3"/>';
          // str+='<p><%=username %></p><a href="#">账户管理</a>';
          showHeadPortrait.innerHTML = str;
        }
        else {
          alert("头像上传失败,请勿重复上传！");
        }
      },
      error : function(){
       alert("抱歉，服务器出错!");
     }
    });
  }else {
    alert("头像上传失败，请重新选择文件！");
  }
});

// 权限申请
$('#power a').click(function() {
  if (power_Boolean == true) {
    var user = {
      username:$("#information input:eq(2)").val(),
      id:$("#power input").val()
     };
    // 利用ajax将数据提交到后台
    $.ajax({
      url : "Servlet/PowerModify",
      type : "post",
      data : user,
      datatype : 'json',
      cache: false,
      success : function(result) {
        if(result=="true") {
            alert('权限申请码提交成功！');
        }
        else {
            alert("申请码输入错误，提交失败！");
        }
      },
      error : function(){
       alert("抱歉，服务器出错!");
     }
    });
  } else {
    alert('权限申请码输入错误！');
  }
});
// 修改密码
$('#modifyPassword button').click(function() {
  if (passwordBefore_Boolean == true && passwordNew_Boolean == true &&
    passwordConfirm_Boolean == true) {
    var user = {
       password_old:$("#modifyPassword input:eq(0)").val(),
       password_new:$("#modifyPassword input:eq(1)").val()
     };
      // 利用ajax将数据提交到后台
     $.ajax({
       url : "Servlet/PasswordModify",
       type : "post",
       data : user,
       datatype : 'json',
       cache: false,
       success : function(result) {
         if(result=="true") {
            alert('密码修改成功！');
            window.location.reload();
          }
          else {
            alert("原密码输入错误，修改失败！");
          }
        },
        error : function(){
          alert("抱歉，服务器出错!");
       }
    });
  } else {
    alert('密码信息输入错误，请重新输入！');
  }
});
// 确认订单
$('#purchase button:eq(0)').click(function() {
  if (purchaseId_Boolean == true && purchasePrice_Boolean == true &&
    purchaseNum_Boolean == true) {

    var commodity = {
        id:$("#purchase input:eq(0)").val(),
        name:$("#purchase input:eq(1)").val(),
        price:$("#purchase input:eq(2)").val(),
        kind:$("#purchase input:eq(3)").val(),
        inventory:$("#purchase input:eq(4)").val()
      };
      $.ajax({
        url : "Servlet/OrderConfirmation",
        type : "post",
        data : commodity,
        datatype : 'json',
        cache: false,
        success : function(result) {
          if(result=="true") {
             alert('确认订单成功！');
             window.location.reload();
           }
           else {
             alert('商品ID或进货量输入错误，提交订单失败！');
           }
         },
         error : function(){
           alert("抱歉，服务器出错!");
        }
     });
  } else {
    alert('订单信息有误，请核对后再试！');
  }
});
// 额外进货
$('#purchase button:eq(1)').click(function() {
  var e1 = $('#modal-overlay');
  e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
});
$('#submitOrder').click(function() {
  if (additionalSid_Boolean == true && additionalSnum_Boolean == true) {
    var commodity = {
        id:$("#additionalSid").val(),
        purchase:$("#additionalSnum").val()
      };
      $.ajax({
        url : "Servlet/OrderAdditional",
        type : "post",
        data : commodity,
        datatype : 'json',
        cache: false,
        success : function(result) {
          if(result=="true") {
             alert('额外订单已提交！');
             window.location.reload();
             $('.btn-default').click();
           }
           else {
             alert('商品ID或出货量输入错误，提交订单失败！');
           }
         },
         error : function(){
           alert("抱歉，服务器出错!");
        }
     });
  } else {
    alert('订单信息有误，请核对后再试！');
  }
});

// 确定出货
$('#sellOut button').click(function() {
  if (sellOutId_Boolean == true && sellOutNum_Boolean == true) {
    var commodity = {
        id:$("#sellOut input:eq(0)").val(),
        sellout:$("#sellOut input:eq(1)").val()
      };
      $.ajax({
        url : "Servlet/SelloutAdditional",
        type : "post",
        data : commodity,
        datatype : 'json',
        cache: false,
        async: false,
        success : function(result) {
          if(result=="true") {
             alert('商品出货成功！');
             window.location.reload();
           }
           else {
             alert('出货失败！');
           }
         },
         error : function(){
           alert("抱歉，服务器出错!");
        }
     });
  } else {
    alert('商品出库信息有误，请核对后在试！');
  }
});

// 导入库存单
$('#in').click(function() {
  if($("input[name='import']").val()!='') {
    var form = new FormData(document.getElementById("UploadForm"));
    // 利用ajax将数据提交到后台
    $.ajax({
        url:"Servlet/ImportExcelServlet",
        type:"post",
        data:form,
        processData:false,
        contentType:false,
        success:function(result){
          if(parseInt(result)>0) {
            alert('成功，一共导入'+result+'组商品数据！');
          }else {
            alert('导入失败，文件格式错误或无可用信息！');
          }
        },
        error:function(e){
          alert('抱歉，服务器出错!');
        }
    });
  }else {
      alert('抱歉，未选择文件！');
  }
});

// 导出库存单
$('#out').click(function() {
      var path = $("input[name='export']").val();
      $.ajax({
        url : "Servlet/ExportExcelServlet",
        type : "post",
        data : {path:path},
        datatype : 'json',
        cache: false,
        async: false,
        success : function(result) {
          if(result=="true") {
            if(path=="") {
                alert('文件导出成功，可在F盘目录下查看！');
            }else {
                alert('文件导出成功，请在输入的路径下查看！');
            }
           }
           else {
             alert('导出失败，请检查文件夹路径！');
           }
         },
         error : function(xhr){
           alert(xhr.responseText+"抱歉，服务器出错!");
        }
     });
});

// 销售额统计
Highcharts.chart('container1', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: '商品销售额分类统计'
    },
    // subtitle: {
    //     text: '图形统计'
    // },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: '销售额(￥)',
        data: [
            ['日用品', 12357],
            ['化妆品', 8888],
            ['食品', 15000],
            ['手机', 36788],
            ['家电', 26888],
        ]
    }]
});

// Set up the chart
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container2',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: '商品销量统计'
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        // data: [345, 234, 324, 67, 44]
        name: '销量(件)',
        data: [
            ['日用品', 345],
            ['化妆品', 234],
            ['食品', 324],
            ['手机', 67],
            ['家电', 44],
        ]
    }]
});

// 确认退出登录
$('#user li:eq(1)').click(function() {
  alert('退出成功！');
  jump();
});

// 跳转页面
function jump() {
  window.location.href = "login.jsp";
}
