package com.connect;

public class User {
    String username;
    String password;
    String email;
    String mobile;
    String portrait;
    int power;
    //用户名
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    //密码
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    //邮箱
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    //手机号
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    //权限
    public int getPower() {
        return power;
    }
    public void setPower(int power) {
        this.power = power;
    }

    //头像
    public String getPortrait() {
        return portrait;
    }
    public void setPortrait(String portrait) {
        this.portrait = portrait;
    }

}
