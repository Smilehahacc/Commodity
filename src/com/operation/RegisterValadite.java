package com.operation;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class RegisterValadite extends HttpServlet{
    public void service(HttpServletRequest request,HttpServletResponse response)
        throws IOException,ServletException
    {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String user = request.getParameter("user");
        String password = request.getParameter("password");
        String email = request.getParameter("email");
        String mobile = request.getParameter("mobile");

        SqlOperation s = new SqlOperation();
        if(s.insertUser(user,  password, email, mobile)) {
          out.write("true");
        }else {
          out.write("false");
        }

    }
}
