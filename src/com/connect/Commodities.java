package com.connect;

public class Commodities {
    String id;
    String name;
    double price;
    String kind;
    int inventory;
    //商品Id
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    //商品名称
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    //商品价格
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }

    //商品种类
    public String getKind() {
        return kind;
    }
    public void setKind(String kind) {
        this.kind = kind;
    }

    //库存
    public int getInventory() {
        return inventory;
    }
    public void setInventory(int inventory) {
        this.inventory = inventory;
    }

}
