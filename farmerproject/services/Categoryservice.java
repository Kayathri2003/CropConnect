package com.example.farmerproject.services;

import com.example.farmerproject.model.Category_t1;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface Categoryservice {

    List<Category_t1> getall();

    Category_t1 getbyid( int id);

    Category_t1 insert(Category_t1 category_t1);

    void delbyid(Integer id);


}
