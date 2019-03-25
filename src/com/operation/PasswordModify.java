package com.operation;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class PasswordModify extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String username = request.getSession().getAttribute("username").toString();
        String password_old = request.getParameter("password_old");
        String password_new = request.getParameter("password_new");

        SqlOperation s = new SqlOperation();
        if (s.updatePassword(username,password_old,password_new)) {
            // 修改密码成功后删除对应的记住密码cookie信息
            Cookie[] cookies = request.getCookies();
            for (Cookie cookie : cookies) {
                if (username.equals(cookie.getName())) {
                    cookie.setMaxAge(0);
                    cookie.setPath("/");
                    response.addCookie(cookie);
                }
            }
            out.write("true");
        }else{
            out.write("false");
        }

    }

}
