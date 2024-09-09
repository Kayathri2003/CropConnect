package com.example.farmerproject.services;

import com.example.farmerproject.model.TransactionModel;
import com.example.farmerproject.repository.Transactionrepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private Transactionrepository transactionrepository;

    public TransactionModel savetransaction(TransactionModel transaction){
        return transactionrepository.save(transaction);
    }

    public List<TransactionModel> getAll(){
        List<TransactionModel> transactionmodels= new ArrayList<>();
        transactionrepository.findAll().forEach(transactionmodels::add);
        return transactionmodels;
    }

    public TransactionModel getById(int id){
        return transactionrepository.findById(id).orElseThrow();
    }
    public void deletetransaction(int Id) {
        transactionrepository.deleteById(Id);
    }
}

