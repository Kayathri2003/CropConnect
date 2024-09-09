package com.example.farmerproject.services;


import com.example.farmerproject.model.ReviewModel;

import com.example.farmerproject.model.TransactionModel;
import com.example.farmerproject.repository.Reviewrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private Reviewrepository reviewrepository;

    public ReviewModel savereview(ReviewModel review){
        return reviewrepository.save(review);
    }

    public List<ReviewModel> getAll(){
        List<ReviewModel> reviewmodels= new ArrayList<>();
        reviewrepository.findAll().forEach(reviewmodels::add);
        return reviewmodels;
    }

    public ReviewModel getById(int id){
        return reviewrepository.findById(id).orElseThrow();
    }
    public void deletereview(int Id) {
        reviewrepository.deleteById(Id);
    }
}



