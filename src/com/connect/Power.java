package com.connect;

public class Power {
    String id;
    int power;
    // 授权码Id
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    // 权限等级
    public int getPower() {
        return power;
    }
    public void setPower(int power) {
        this.power = power;
    }
}
