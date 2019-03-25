package com.data;

import com.connect.Commodities;
import com.operation.SqlOperation;
import com.oreilly.servlet.MultipartRequest;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Iterator;
import java.util.List;

/**
 * @author 景景
 *导入文件
 */
@SuppressWarnings("serial")
public class ImportExcelServlet extends HttpServlet {
    @Override
    public void service(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        MultipartRequest mr = null;
        //用来限制用户上传文件大小的
        int maxPostSize = 1 * 100 * 1024 * 1024;
        //第一个参数为传过来的请求HttpServletRequest，
        //第二个参数为上传文件要存储在服务器端的目录名称
        //第三个参数是用来限制用户上传文件大小
        //第四个参数可以设定用何种编码方式来上传文件名称，可以解决中文问题
        mr = new MultipartRequest(request, "F:\\", maxPostSize, "utf-8");
        //传回所有文件输入类型的名称
        Enumeration files = mr.getFileNames();
        files.hasMoreElements();
        String fileName = (String) files.nextElement();
        String filePath = mr.getFilesystemName(fileName);
        File file = mr.getFile(fileName);

        ImportExcel iEx = new ImportExcel();
        List clist = new ArrayList();
        clist = iEx.readExcel(file);

        SqlOperation s = new SqlOperation();
        //里面的对象都会自动提升为Object类
        Iterator it = clist.iterator();
        int count = 0;
        while(it.hasNext()) {
           Commodities c = (Commodities)it.next();
           String id = c.getId();
           String name = c.getName();
           double price = c.getPrice();
           String kind = c.getKind();
           int inventory = c.getInventory();
           if (s.insertCommodities(id, name, price, kind, inventory)) {
              count++;
           }
        }

        // // 将商品信息封装成List传回客户
        List<Commodities> c = s.selectCommodities();
        request.getSession().setAttribute("cList", c);
        System.out.println("成功导入"+count+"组数据！");
        out.print(count+"");
    }
}
