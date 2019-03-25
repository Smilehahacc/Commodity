package com.operation;

import com.connect.User;
import com.connect.Commodities;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class LoginValadite extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String number = request.getParameter("number");
        String password = request.getParameter("password");
        String isCookie = request.getParameter("isCookie");

        SqlOperation s = new SqlOperation();
        if (s.loginVerify(number, password)) {

            // 记住密码按钮选中，则创建cookie
            if ("true".equals(isCookie)) {
                //创建Cookie对象
                Cookie userCookie = new Cookie(number, password);
                //设置Cookie的有效期为7天
                userCookie.setMaxAge(60 * 60 * 24 * 7);
                userCookie.setPath("/");
                response.addCookie(userCookie);
            } else {
                Cookie[] cookies = request.getCookies();
                for (Cookie cookie : cookies) {
                    if (number.equals(cookie.getName())) {
                        cookie.setMaxAge(0);
                        cookie.setPath("/");
                        response.addCookie(cookie);
                    }
                }
            }
            // 更新用户信息到页面上
            out.write("true");
            List<User> us = s.selectUser(number);
            String email = us.get(0).getEmail();
            String mobile = us.get(0).getMobile();
            String headPortrait = us.get(0).getPortrait();
            request.getSession().setAttribute("username", number);
            request.getSession().setAttribute("email", email);
            request.getSession().setAttribute("mobile", mobile);
            request.getSession().setAttribute("headPortrait", headPortrait);

            // 将商品信息封装成List传回客户端
            List<Commodities> c = s.selectCommodities();
            request.getSession().setAttribute("cList", c);
            // 设置进入首页之后的默认点击的选项
            request.getSession().setAttribute("clickwhat", "0");
        } else {
            out.write("false");
        }

    }

}
