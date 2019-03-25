package com.operation;

import com.connect.Commodities;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

// 普通查询
public class ModifyCommodity extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String id = request.getParameter("id");
        String name = request.getParameter("name");
        double price = Double.parseDouble(request.getParameter("price"));
        String kind = request.getParameter("kind");
        int inventory = Integer.parseInt(request.getParameter("inventory"));
        String oldId = request.getParameter("oldId");
    
        SqlOperation s = new SqlOperation();
        if (s.updateCommoditiesX(id,name,price,kind,inventory,oldId)) {
            List<Commodities> c = s.selectCommodities();
            request.getSession().setAttribute("cList", c);
            out.write("true");
        } else {
            out.write("false");
        }

    }
}
