package com.example.farmerproject.services;


import com.example.farmerproject.model.Product_t1;
import com.example.farmerproject.repository.Productrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class ProductservImpl implements Productservice {
    @Autowired
    private  Productrepository productrepository;

    public ProductservImpl(Productrepository productrepository){
        this.productrepository = productrepository;
    }
    @Override
    public List<Product_t1> getallproduct() {
        return productrepository.findAll();
    }

    @Override
    public Product_t1 getbyid(@PathVariable Integer id) {
        return productrepository.findById(id).orElseThrow();
    }

    @Override
    public Product_t1 insert(Product_t1 product) {
        return productrepository.save(product);
    }

    @Override
    public void  deletebyId(@PathVariable Integer id){  productrepository.deleteById(id);}
//
//    @Override
//    public Optional<List<Product_t1>> getallProductByCategory(int category_id){
//        return productrepository.getallProductByCategorya(category_id);
//    }
@Override
public List<Product_t1> getallProductByCategory(int category_id) {
    return productrepository.getallProductByCategorya(category_id);
}
@Override
    public List<Product_t1> getallProductByFarmer(int farmer_id){
        return productrepository.getallProductByFarmera(farmer_id);
}


}
