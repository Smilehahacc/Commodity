package com.data;

import com.connect.User;
import com.operation.SqlOperation;
import net.sf.json.JSONArray;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

// 获取用户名集合
public class GetUserServlet extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        // 获取上传的头像文件名
        SqlOperation s = new SqlOperation();
        List<User> u = s.selectUser("");

        JSONArray UserList = JSONArray.fromObject(u);
        out.print(UserList.toString());
    }
}
