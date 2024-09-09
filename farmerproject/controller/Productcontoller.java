package com.example.farmerproject.controller;


import com.example.farmerproject.model.Product_t1;
import com.example.farmerproject.services.Productservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.beans.Transient;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productdetail")

@CrossOrigin("*")
public class Productcontoller {
    @Autowired
    private Productservice productservice;         //it call the product service to respond for given request

    @GetMapping
    public ResponseEntity<List<Product_t1>> getallproducts(){
        List<Product_t1> products = productservice.getallproduct();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/productdetail/{id}")
    public ResponseEntity<Product_t1> getbyids(@PathVariable int id){
        Product_t1 products = productservice.getbyid(id);
        return new ResponseEntity<>(products,HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Product_t1> addproduct(@RequestBody Product_t1 product){
        Product_t1 addedproduct = productservice.insert(product);
        HttpHeaders headers = new HttpHeaders();
        headers.add("product","/productdetail/"+addedproduct.getProduct_id());
        return new ResponseEntity<>(addedproduct,HttpStatus.CREATED);
    }

    @DeleteMapping ("/productdetail/{id}")
    public ResponseEntity<Product_t1> deleteproduct_id(@PathVariable int id){
        productservice.deletebyId(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

@GetMapping("/productdetailByCategory/{category_id}")
public ResponseEntity<List<Product_t1>> getallProductByCategory(@PathVariable int category_id) {
    List<Product_t1> products = productservice.getallProductByCategory(category_id);
    if (products.isEmpty()) {
        return ResponseEntity.noContent().build();
    }
    return ResponseEntity.ok(products);

}
@GetMapping("/productdetailByFarmer/{farmer_id}")
    public ResponseEntity<List<Product_t1>> getallProductByFarmer(@PathVariable int farmer_id){
        List<Product_t1> products = productservice.getallProductByFarmer(farmer_id);
        if(products.isEmpty()){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
}





}
