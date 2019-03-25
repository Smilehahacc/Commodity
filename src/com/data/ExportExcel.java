package com.data;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
public class ExportExcel {

    public void toExcel(List resultList, String path) throws IOException {
        //创建一个EXCEL
        Workbook wb = new HSSFWorkbook();
        //创建一个SHEET
        Sheet sheet1 = wb.createSheet("商品信息表");
        List CommoditiesList = new ArrayList();
        if(resultList!=null){
            for (int i = 0; i < resultList.size(); i++) {
                //创建一行
                Row row = sheet1.createRow(i);
                List rowList=(List)resultList.get(i);
                for (int j = 0; j < rowList.size(); j++) {
                    Cell cell = row.createCell(j);
                    String cellLiString=(String)rowList.get(j);
                    cell.setCellValue(cellLiString );
                }
            }
        }

        FileOutputStream fileOut = new FileOutputStream(path);
        wb.write(fileOut);
        fileOut.close();
    }
}
