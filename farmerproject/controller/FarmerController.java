package com.example.farmerproject.controller;

import com.example.farmerproject.model.Farmer_t1;
import com.example.farmerproject.services.FarmerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/farmers")
public class FarmerController {

    @Autowired
    FarmerService farmerService;

    @GetMapping
    public ResponseEntity<List<Farmer_t1>> getAll() {
        List<Farmer_t1> farmers = farmerService.getAll();
        return new ResponseEntity<>(farmers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Farmer_t1> getbyid(@PathVariable int id) {
        Farmer_t1 farmers = farmerService.getbyid(id);
        return new ResponseEntity<>(farmers, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<Farmer_t1> saveFarmer(@RequestBody Farmer_t1 farmer_t1) {
        Farmer_t1 farmer_t11 = farmerService.insert(farmer_t1);
//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.add("farmer_t1", "/api" + farmer_t11.getFarmer_id());
//        return new ResponseEntity<>(farmer_t11, httpHeaders, HttpStatus.CREATED);
        return new ResponseEntity<>(farmer_t11,HttpStatus.OK);
    }
}

