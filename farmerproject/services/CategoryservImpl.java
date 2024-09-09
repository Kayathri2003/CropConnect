package com.example.farmerproject.services;


import com.example.farmerproject.model.Category_t1;
import com.example.farmerproject.repository.Categoryrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryservImpl implements Categoryservice{
    @Autowired
    Categoryrepository categoryrepository;
    public CategoryservImpl (Categoryrepository categoryrepository){
        this.categoryrepository = categoryrepository ;
    }

    @Override
    public List<Category_t1> getall(){
        List<Category_t1> category_t1s = new ArrayList<>();
        categoryrepository.findAll().forEach(category_t1s::add);
        return category_t1s;
    }
    @Override
    public  Category_t1 getbyid(@PathVariable int id){
        Category_t1 categories = categoryrepository.findById(id).orElseThrow();
        return categories;
    }
    @Override
    public Category_t1 insert(Category_t1 category){
     return categoryrepository.save(category);

    }
    @Override
    public void delbyid(@PathVariable Integer id){
        categoryrepository.deleteById(id);
    }


}
