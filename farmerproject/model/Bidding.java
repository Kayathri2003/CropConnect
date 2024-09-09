package com.example.farmerproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor

public class Bidding {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bid_id;
    @OneToOne
    @JoinColumn(name = "userid")
    private UserModel usermodel;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product_t1 product;
    @Column(nullable = false)
    private double bid_amount;
    @Column
    private String status;
    @CreationTimestamp
    @Column(updatable = false)
    Timestamp dateCreated;
    @UpdateTimestamp
    @Column
    Timestamp lastModified;

    @OneToOne(mappedBy = "bidding")
    @JsonIgnore
    private TransactionModel transactionList;
}

