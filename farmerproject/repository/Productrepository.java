package com.example.farmerproject.repository;


import com.example.farmerproject.model.Product_t1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface Productrepository extends JpaRepository<Product_t1,Integer> {

    @Query(value = "select * from product_t1 p join category_t1 c on c.category_id=p.category_id where p.category_id = ?1",nativeQuery = true)
    public List<Product_t1> getallProductByCategorya(int id);

    @Query(value = "  select * from product_t1 p join farmer_t1 f on f.farmer_id = p.farmer_id where p.farmer_id = ?1",nativeQuery = true)
    public List<Product_t1> getallProductByFarmera(int id);
}
