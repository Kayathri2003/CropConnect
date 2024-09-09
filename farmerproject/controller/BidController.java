package com.example.farmerproject.controller;

import com.example.farmerproject.model.Bidding;
import com.example.farmerproject.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class BidController {

    @Autowired
    private BidService bidService;

    // Add a new bid
    @PostMapping("/add-bid")
    public ResponseEntity<Bidding> addBid(@RequestBody Bidding bidding) {
        Bidding newBidding = bidService.addBidding(bidding); // Ensure this method name matches with your service class
        return new ResponseEntity<>(newBidding, HttpStatus.CREATED);
    }

    // Get all bids
    @GetMapping("/getAll")
    public ResponseEntity<List<Bidding>> getAll() {
        List<Bidding> biddings = bidService.getAll();
        return new ResponseEntity<>(biddings, HttpStatus.OK);
    }

    // Get a bid by ID
    @GetMapping("/getBidById/{bidId}")
    public ResponseEntity<Bidding> getById(@PathVariable("bidId") int bidId) {
        Optional<Bidding> bidOptional = bidService.getById(bidId);

        return bidOptional
                .map(bidding -> ResponseEntity.ok(bidding))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/getbidbyuserId/{userid}")
    public List<Bidding> getbyuserId(@PathVariable int userid){
        return bidService.getbyuser(userid);
    }
    // Delete a bid by ID
    @DeleteMapping("/deleteById/{bidId}")
    public ResponseEntity<String> deleteById(@PathVariable("bidId") int bidId) {
        String result = bidService.deleteById(bidId);
        if ("Success".equals(result)) {
            return new ResponseEntity<>(result, HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
    }

    // Get bids by farmer ID
    @GetMapping("/get/top/{farmerId}")
    public ResponseEntity<List<Bidding>> getBidsByFarmer(@PathVariable int farmerId) {
        List<Bidding> biddings = bidService.sort(farmerId);
        return new ResponseEntity<>(biddings, HttpStatus.OK);
    }

    // Get bids by product ID
    @GetMapping("/getbidbyproduct/{productId}")
    public ResponseEntity<List<Bidding>> getBidsByProduct(@PathVariable("productId") int productId) {
        List<Bidding> biddings = bidService.getallBidbyproduct(productId);
        return new ResponseEntity<>(biddings, HttpStatus.OK);
    }

    @PatchMapping("/updatestatus/{bidId}")
    public Optional<Bidding> updateStatus(@RequestBody String status, @PathVariable int bidId)
    {
        return bidService.update(status,bidId);
    }

}
