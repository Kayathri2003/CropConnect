package com.example.farmerproject.controller;


import com.example.farmerproject.model.UserModel;
import com.example.farmerproject.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//import org.apache.catalina.User;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userservice;


    @GetMapping("/get")
    public ResponseEntity<List<UserModel>> getAll()
    {
        List<UserModel> usermodels=userservice.getAll();
        return new ResponseEntity<>(usermodels, HttpStatus.OK);
    }

    @GetMapping("/get/{userid}")
    public ResponseEntity<UserModel> getById(@PathVariable int userid){
        UserModel usermodels=userservice.getById(userid);
        return new ResponseEntity<>(usermodels,HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<UserModel> adduser(@RequestBody UserModel usermodels) {
        UserModel user=userservice.saveuser(usermodels);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("UserModel","/addusers/"+user.getUserid());
        return new ResponseEntity<>(user,httpHeaders,HttpStatus.CREATED);
    }

    
    //http://localhost:8080/api/v1/users/
    @PutMapping({"/{userid}"})
    public ResponseEntity<UserModel> updateuser(@PathVariable("userid") int userid, @RequestBody UserModel usermodels) {
        userservice.updateTodo(userid, usermodels);
        return new ResponseEntity<>(userservice.getById(userid), HttpStatus.OK);
    }
    //http://localhost:8080/api/v1/users/delete/
    @DeleteMapping({"/delete/{userid}"})
    public ResponseEntity<UserModel> deleteTodo(@PathVariable int userid) {
        userservice.deleteuser(userid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/login")
    public UserModel login(@RequestBody UserModel user) {
        UserModel foundUser = userservice.findByUsername(user.getUsername());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return foundUser;
        }
        return null;
//        else {
//            return "Invalid username or password.";
//        }
    }

    @PostMapping("/register")
    public ResponseEntity<UserModel> register(@RequestBody UserModel user) {

        UserModel existingUser = userservice.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getUsername().equals(user.getUsername())) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
//            return existingUser;
            return new ResponseEntity<>(new UserModel(), HttpStatus.BAD_REQUEST);
        }

        // Save the new user
        return new ResponseEntity<>(userservice.saveuser(user), HttpStatus.OK);
    }

}

