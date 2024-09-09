package com.example.farmerproject.controller;



import com.example.farmerproject.model.TransactionModel;
import com.example.farmerproject.services.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionservice;

    //http://localhost:8080/api/v1/transaction/get
    @GetMapping("/get")
    public ResponseEntity<List<TransactionModel>> getAll() {
        List<TransactionModel> transactionmodels = transactionservice.getAll();
        return new ResponseEntity<>(transactionmodels, HttpStatus.OK);
    }
    //http://localhost:8080/api/v1/transaction/get/
    @GetMapping("/get/{transactionid}")
    public ResponseEntity<TransactionModel> getById(@PathVariable int transactionid) {
        TransactionModel transactionmodels = transactionservice.getById(transactionid);
        return new ResponseEntity<>(transactionmodels, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<TransactionModel> adduser(@RequestBody TransactionModel usermodels) {
        TransactionModel user=transactionservice.savetransaction(usermodels);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("UserModel","/addusers/"+user.getTransactionid());
        return new ResponseEntity<>(user,httpHeaders,HttpStatus.CREATED);
    }
}

