package com.example.farmerproject.services;

import com.example.farmerproject.model.Farmer_t1;
import java.util.List;
public interface FarmerService {
    List<Farmer_t1> getAll();
    Farmer_t1 getbyid(Integer id);
    Farmer_t1 insert (Farmer_t1 farmer_t1);
}
