package com.operation;

import com.connect.Commodities;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

// 高级查询
public class FindCommodityS extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String id = request.getParameter("id");
        String name = request.getParameter("name");
        String kind = request.getParameter("kind");
        String price1 = request.getParameter("price1");
        String price2 = request.getParameter("price2");
        String inventory1 = request.getParameter("inventory1");
        String inventory2 = request.getParameter("inventory2");

        SqlOperation s = new SqlOperation();
        List<Commodities> c = s.selectCommoditiesXS(id,name,price1,price2,kind,inventory1,inventory2);
        if (c.size()!=0) {
            // 将商品信息封装成List传回客户
            request.getSession().setAttribute("cList", c);
            out.write("true");
        } else {
            out.write("false");
        }

    }
}
