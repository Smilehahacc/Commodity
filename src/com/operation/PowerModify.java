package com.operation;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class PowerModify extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String username = request.getSession().getAttribute("username").toString();
        String id = request.getParameter("id");

        SqlOperation s = new SqlOperation();
        if (s.updateUserPower(username, id)) {
            // 设置进入首页之后的默认点击的选项
            request.getSession().setAttribute("clickwhat", "4");
            out.write("true");
        }else{
            out.write("false");
        }

    }

}
