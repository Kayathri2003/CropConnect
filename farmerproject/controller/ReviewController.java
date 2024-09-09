package com.example.farmerproject.controller;

import com.example.farmerproject.services.ReviewService;
import com.example.farmerproject.model.ReviewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//import  com.example.farmerproject.model.TransactionService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {
    @Autowired
    private ReviewService reviewservice;

    //http://localhost:8080/api/v1/transaction/get
    @GetMapping("/get")
    public ResponseEntity<List<ReviewModel>> getAll() {
        List<ReviewModel> reviewmodels = reviewservice.getAll();
        return new ResponseEntity<>(reviewmodels, HttpStatus.OK);
    }
    //http://localhost:8080/api/v1/transaction/get/
    @GetMapping("/get/{reviewid}")
    public ResponseEntity<ReviewModel> getById(@PathVariable int reviewid) {
        ReviewModel reviewmodels = reviewservice.getById(reviewid);
        return new ResponseEntity<>(reviewmodels, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<ReviewModel> adduser(@RequestBody ReviewModel reviewmodel) {
        ReviewModel user=reviewservice.savereview(reviewmodel);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("UserModel","/addusers/"+user.getReviewid());
        return new ResponseEntity<>(user,httpHeaders,HttpStatus.CREATED);
    }
}
