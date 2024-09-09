package com.example.farmerproject.repository;

import com.example.farmerproject.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Userrepository extends JpaRepository<UserModel,Integer>{
  UserModel findByUsername(String username);
}
