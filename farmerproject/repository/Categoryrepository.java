package com.example.farmerproject.repository;


import com.example.farmerproject.model.Category_t1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Categoryrepository extends JpaRepository<Category_t1,Integer> {

}
