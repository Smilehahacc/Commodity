package com.operation;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class InforModify extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String username_old = request.getSession().getAttribute("username").toString();
        String username_new = request.getParameter("username");
        String email = request.getParameter("email");
        String mobile = request.getParameter("mobile");

        // 进入数据库修改信息同时在页面上更新修改后的用户信息
        SqlOperation s = new SqlOperation();
        request.getSession().setAttribute("email", email);
        request.getSession().setAttribute("mobile", mobile);
        if (s.updateUser(username_old, email, mobile, username_new)) {
            request.getSession().setAttribute("username", username_new);
            out.write("true");
        }else{
            out.write("false");
        }

    }

}
