package com.example.farmerproject.repository;


import com.example.farmerproject.model.Farmer_t1;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FarmerRepository extends CrudRepository <Farmer_t1,Integer> {

}
