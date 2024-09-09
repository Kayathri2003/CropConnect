package com.example.farmerproject.services;

import com.example.farmerproject.model.Farmer_t1;
import com.example.farmerproject.repository.FarmerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class FarmerServiceImpl implements FarmerService{

    @Autowired
    FarmerRepository FarmerRepo;

    @Override
    public List<Farmer_t1> getAll()
    {
        return (List<Farmer_t1>) FarmerRepo.findAll();
    }

    @Override
    public Farmer_t1 getbyid(@PathVariable Integer id)
    {
        return  FarmerRepo.findById(id).orElseThrow();
    }

    @Override
    public Farmer_t1 insert(Farmer_t1 farmer_t1) {
        return FarmerRepo.save(farmer_t1);
    }

}
