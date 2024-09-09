package com.example.farmerproject.services;

import com.example.farmerproject.model.Product_t1;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface Productservice {

    List<Product_t1> getallproduct();
    Product_t1 getbyid(Integer id);
    Product_t1 insert(Product_t1 product_t1);
    void deletebyId(Integer id);

 List<Product_t1> getallProductByCategory(int category_id);

    List<Product_t1> getallProductByFarmer(int farmer_id);
}
