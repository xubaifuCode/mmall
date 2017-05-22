package com.mmall.test;

import org.junit.Test;

import java.math.BigDecimal;

/**
 * Created by alex on 17-5-22.
 * 关于浮点数运算丢失精度的问题
 */
public class BigDecimalTest {

    @Test
    public void test1() {
        //精度丢失
        System.out.println(0.05 + 0.01);
        System.out.println(1.0 - 0.42);
        System.out.println(4.014 * 100);
        System.out.println(123.3 / 100);
    }

    @Test
    public void test2() {
        //精度丢失
        BigDecimal b1 = new BigDecimal(0.05);
        BigDecimal b2 = new BigDecimal(0.01);
        System.out.println(b1.add(b2));
    }

    @Test
    public void test3() {
        BigDecimal b1 = new BigDecimal("0.05");
        BigDecimal b2 = new BigDecimal("0.01");
        System.out.println(b1.add(b2));
    }
}
