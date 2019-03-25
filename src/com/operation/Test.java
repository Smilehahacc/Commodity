package com.operation;

import com.connect.User;

import java.util.List;

/**
 * user表的连接
 */
public class Test {
    public static void main(String[] args) throws Exception {
        //
        // SessionFactory sf = new Configuration().configure().buildSessionFactory();
        // Session s = sf.openSession();
        // s.beginTransaction();
        // String username = "xiaopppp";
        // String password = "123456";
        // String email = "pp@qq.com";
        // String mobile = "18106983000";
        // String usernameNew = "xiaoppp";
        // String id = "";
        // String cId = "2018121201";
        // String name = "小米MIX3";
        // double price = 3599;
        // String kind = "手机";
        // int inventory = 78;
        // String username_new = "xiaopppp";
        //
        // String price1 = "4000";
        // String price2 = "";
        // String inventory1 = "";
        // String inventory2 = "30";
        // String oldId = "2018121299";
        SqlOperation s = new SqlOperation();
        List<User> u = s.selectUser("");
        for(int i = 0;i<u.size(); i++) {
          System.out.println(u.get(i).getUsername());
        }


    }
}
