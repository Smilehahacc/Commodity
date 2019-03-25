package com.data;

import com.connect.Commodities;
import com.operation.SqlOperation;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

// 导出文件
public class ExportExcelServlet extends HttpServlet {
    public void service(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        String path = request.getParameter("path");

        SqlOperation s = new SqlOperation();
        List<Commodities> c = s.selectCommodities();

        List CommoditiesList = new ArrayList();
        List titles = new ArrayList();
        titles.add("商品ID");
        titles.add("商品名称");
        titles.add("单价");
        titles.add("类别");
        titles.add("库存");
        CommoditiesList.add(titles);

        for(int i = 0; i < c.size(); i++) {
          List varList = new ArrayList();
          varList.add(c.get(i).getId());
          varList.add(c.get(i).getName());
          varList.add(""+c.get(i).getPrice());
          varList.add(c.get(i).getKind());
          varList.add(""+c.get(i).getInventory());
          CommoditiesList.add(varList);
        }
        ExportExcel myexcel = new ExportExcel();

        // 传入文件路径正确，则进行后面的操作 否则返回错误
        if (path == "") {
            path = "f:";
        }
        File dir = new File(path);
        if(dir.isDirectory()) {
          String p = path.replace('\\', '/');
          p = p+"/CList.xls";
          try {
              myexcel.toExcel(CommoditiesList,p);
              out.print("true");
          } catch (Exception e) {
              // TODO Auto-generated catch block
              e.printStackTrace();
              out.print("false");
          }
        }else {
          out.print("false");
        }
    }
}
