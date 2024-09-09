package com.example.farmerproject.repository;


import com.example.farmerproject.model.ReviewModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Reviewrepository extends JpaRepository<ReviewModel,Integer> {
}

