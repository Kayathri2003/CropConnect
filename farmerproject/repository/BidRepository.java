package com.example.farmerproject.repository;


import com.example.farmerproject.model.Bidding;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BidRepository extends CrudRepository<Bidding,Integer> {

    @Query(value = "select * from bidding b join product_t1 p on p.product_id = b.product_id order by bid_amount desc;",nativeQuery = true)
    public List<Bidding> sort(int product_id);

    @Query(value = "select * from bidding b join product_t1 p on p.product_id = b.product_id where b.product_id = ?1",nativeQuery = true)
    public List<Bidding> getallBidByproduct(int product_id);


    @Query(value = "select * from bidding b join Users u on u.userid = b.userid join product_t1 p on p.product_id=b.product_id where u.userid = ?1",nativeQuery = true)
    public List<Bidding> getbyuser(int userid);

}
