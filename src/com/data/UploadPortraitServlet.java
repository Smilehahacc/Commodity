package com.data;

import com.operation.SqlOperation;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
// 头像上传
public class UploadPortraitServlet extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();

        // 获取上传的头像文件名
        String headPortrait = request.getParameter("headPortrait");
        headPortrait = "portrait/"+headPortrait;
        String username = request.getSession().getAttribute("username").toString();
        SqlOperation s = new SqlOperation();
        if (s.updateHeadPortrait(username, headPortrait)) {
            request.getSession().setAttribute("headPortrait", headPortrait);
            out.write("true");
        }else{
            out.write("false");
        }
    }
}
