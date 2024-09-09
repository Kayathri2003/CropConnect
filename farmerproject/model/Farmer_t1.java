package com.example.farmerproject.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "farmer_t1")
public class Farmer_t1 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "farmer_id")
    private int farmerId;

    @OneToOne
    @JoinColumn(name = "userid")
    private UserModel user;

    @Column(name = "identification_number")
    private String identificationNumber;

    @Column(name = "farmland_location")
    private String farmlandLocation;

    @Column(name = "acres")
    private Integer acres; // Changed from int to Integer

    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp dateCreated;

    @UpdateTimestamp
    @Column
    private Timestamp lastModified;

    @OneToMany(mappedBy = "farmer")
    @JsonIgnore
    private Set<Product_t1> productList;

    @OneToMany(mappedBy = "farmer")
    @JsonIgnore
    private Set<ReviewModel> reviewList;
}
