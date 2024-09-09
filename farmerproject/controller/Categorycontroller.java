package com.example.farmerproject.controller;


import com.example.farmerproject.model.Category_t1;
import com.example.farmerproject.services.Categoryservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/categorydetail")
public class Categorycontroller {

    @Autowired
    private Categoryservice categoryservice;
    @GetMapping("/all")
    public ResponseEntity<List<Category_t1>> getallcat(){
        List<Category_t1> categories = categoryservice.getall();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping("/categorydetail/{id}")
    public ResponseEntity<Category_t1> getbid(@PathVariable int id){
        Category_t1 categories = categoryservice.getbyid(id);
        return  new ResponseEntity<>(categories,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Category_t1> addcategory(@RequestBody  Category_t1 category){
        Category_t1 addedcategory = categoryservice.insert(category);
        HttpHeaders headers = new HttpHeaders();
        headers.add("category","/categorydetail/"+addedcategory.getCategory_id());
        return new ResponseEntity<>(addedcategory,HttpStatus.CREATED);
    }

    @DeleteMapping("/categorydetail/{id}")
    public ResponseEntity<Category_t1> deletebyid(@PathVariable int id){
        categoryservice.delbyid(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
