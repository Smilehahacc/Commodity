package com.data;

import com.connect.Commodities;
import jxl.Sheet;
import jxl.Workbook;
import jxl.read.biff.BiffException;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class ImportExcel {

    List CommoditiesList = new ArrayList();
    // 去读Excel的方法readExcel，该方法的入口参数为一个File对象
    public List readExcel(File file) {
        try {
            // 创建输入流，读取Excel
            InputStream is = new FileInputStream(file.getAbsolutePath());
            // jxl提供的Workbook类
            Workbook wb = Workbook.getWorkbook(is);
            // Excel的页签数量
            int sheet_size = wb.getNumberOfSheets();
            for (int index = 0; index < sheet_size; index++) {
                // 每个页签创建一个Sheet对象
                Sheet sheet = wb.getSheet(index);
                // sheet.getRows()返回该页的总行数
                for (int i = 1; i < sheet.getRows(); i++) {
                    // sheet.getColumns()返回该页的总列数
                    // 创建对象，存储对应的数据
                    Commodities c = new Commodities();
                    c.setId(sheet.getCell(0, i).getContents());
                    c.setName(sheet.getCell(1, i).getContents());
                    c.setPrice(Double.parseDouble(sheet.getCell(2, i).getContents()));
                    c.setKind(sheet.getCell(3, i).getContents());
                    c.setInventory(Integer.parseInt(sheet.getCell(4, i).getContents()));
                    CommoditiesList.add(c);
                }
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (BiffException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return CommoditiesList;
    }
}
