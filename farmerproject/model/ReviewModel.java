package com.example.farmerproject.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Data
@Table(name="Review")
public class ReviewModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private  int reviewid;
    @Column
    private int ratings;
    @Column
    private String comments;
    @ManyToOne
    @JoinColumn(name = "userid")
    private UserModel usermodel;
    @ManyToOne
    @JoinColumn(name = "farmer_id")
    private  Farmer_t1 farmer;

    @CreationTimestamp
    @Column(updatable = false)
    Timestamp dateCreated;
    @UpdateTimestamp
    @Column
    Timestamp lastModified;

}

