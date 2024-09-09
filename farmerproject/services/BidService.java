package com.example.farmerproject.services;




import com.example.farmerproject.model.Bidding;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.example.farmerproject.repository.BidRepository;


@Service
public class BidService {

    @Autowired
    private BidRepository bidRepository;

    public List<Bidding> getAll() {
        return (List<Bidding>) bidRepository.findAll();
    }

    public Optional<Bidding> getById(int bidId) {
        return bidRepository.findById(bidId);
    }

    public String deleteById(int bidId) {
        Optional<Bidding> bid=bidRepository.findById(bidId);
        if(bid.isPresent())
        {
            bidRepository.deleteById(bidId);
            return "Deleted successfully";
        }
        else
        {
            return "Given Id not Found";
        }
    }

    public Bidding addBidding(Bidding bidding)
    {
        return bidRepository.save(bidding);
    }

    public List<Bidding> sort(int product_id){
        return bidRepository.sort(product_id);
    }

    public List<Bidding> getallBidbyproduct(int product_id) {
        return bidRepository.getallBidByproduct(product_id);
    }

    public Optional<Bidding> update(String status, int bidId) {
        Optional<Bidding> optionalBid = bidRepository.findById(bidId);

        if (optionalBid.isPresent()) {
            Bidding bid = optionalBid.get(); // Retrieve the Bidding entity
            bid.setStatus(status); // Update the status
            bidRepository.save(bid); // Save the updated Bidding entity
            return Optional.of(bid); // Return the updated Bidding entity
        } else {
            return Optional.empty(); // Return an empty Optional if not found
        }
    }


    public List<Bidding> getbyuser(int userid) {
        return bidRepository.getbyuser(userid);
    }
}

