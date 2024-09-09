package com.example.farmerproject.services;


import com.example.farmerproject.model.UserModel;
import com.example.farmerproject.repository.Userrepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private Userrepository userrepository;

    public UserModel findByUsername(String username){
        return userrepository.findByUsername(username);
    }
//public UserModel findByUsername(String username){
//
//    return userrepository.findByUsername(username);
//
//}


    public UserModel saveuser(UserModel user){
        return userrepository.save(user);
    }

    public List<UserModel> getAll(){
        List<UserModel> usermodels= new ArrayList<>();
        userrepository.findAll().forEach(usermodels::add);
        return usermodels;
    }

    public UserModel getById(int id){
        return userrepository.findById(id).orElseThrow();
    }

    public void updateTodo(int id, UserModel user) {
        UserModel userFromDb = userrepository.findById(id).get();

        userFromDb.setFullname(user.getFullname());
        userFromDb.setPhonenumber(user.getPhonenumber());
        userFromDb.setCity(user.getCity());
        userFromDb.setState(user.getState());
        userFromDb.setPostalcode(user.getPostalcode());
        userrepository.save(userFromDb);
    }

    public void deleteuser(int Id) {
        userrepository.deleteById(Id);
    }



}

