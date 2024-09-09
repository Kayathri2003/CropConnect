package com.example.farmerproject.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Set;

@Entity
@Table(name="product_t1")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Product_t1 {
    @Id
    @GeneratedValue
    private int product_id;
    @Column
    private String product_name ;
    @Column
    private String description ;
    @Column
    private BigDecimal stock_quantity;
    @Column
    private BigDecimal baseprice;
    @ManyToOne
    @JoinColumn(name = "farmer_id")
    private  Farmer_t1  farmer;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category_t1 category;
    @Column
    private String product_image ;
    @Column
    private Date expiry_date;
    @Column
    private String status ;

    @CreationTimestamp
    @Column(updatable = false)
    Timestamp dateCreated;
    @UpdateTimestamp
    @Column
    Timestamp lastModified;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    private Set<Bidding> bidList;
}
