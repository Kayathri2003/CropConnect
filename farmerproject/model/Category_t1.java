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
import java.util.Set;

@Entity
@Table(name="category_t1")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Category_t1 {
    @Id
    @GeneratedValue
    private int category_id;
    @Column
    private String category_name;

    @CreationTimestamp
    @Column(updatable = false)
    Timestamp dateCreated;
    @UpdateTimestamp
    @Column
    Timestamp lastModified;

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private Set<Product_t1> productList;



}
