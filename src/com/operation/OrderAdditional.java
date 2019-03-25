package com.operation;

import com.connect.Commodities;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

public class OrderAdditional extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String id = request.getParameter("id");
        int purchase = Integer.parseInt(request.getParameter("purchase"));

        SqlOperation s = new SqlOperation();
        if (s.updateCommodities(id, 0, purchase)) {
            List<Commodities> c = s.selectCommodities();
            request.getSession().setAttribute("cList", c);
            out.write("true");
        } else {
            out.write("false");
        }

    }
}
