package com.mmall.dao;

import com.mmall.pojo.Shipping;
import com.mmall.pojo.ShippingExample;

public interface ShippingMapper {
    int deleteByExample(ShippingExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Shipping record);

    int insertSelective(Shipping record);

    Shipping selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Shipping record);

    int updateByPrimaryKey(Shipping record);
}