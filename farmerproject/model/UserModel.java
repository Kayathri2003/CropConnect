
package com.example.farmerproject.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Set;

@Entity
@Data
@Table(name="Users")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int userid;
    @Column(name="username")
    private String username;
    @Column(name="password")
    private  String password;
    @Column(name = "role")
    private String role;
    @Column(name="fullname")
    private String fullname;
    @Column(name="phonenumber")
    private long phonenumber;
    @Column(name="city")
    private String city;
    @Column(name="state")
    private String state;
    @Column(name="postalcode")
    private int postalcode;

    @CreationTimestamp
    @Column(updatable = false)
    Timestamp dateCreated;
    @UpdateTimestamp
    @Column
    Timestamp lastModified;

    @OneToOne(mappedBy = "usermodel")
    @JsonIgnore
    private Bidding bid;

    @OneToOne(mappedBy = "user")
    @JsonIgnore
    private Farmer_t1 farmer;

    @OneToMany(mappedBy = "usermodel")
    @JsonIgnore
    private Set<ReviewModel> reviewList;


}


