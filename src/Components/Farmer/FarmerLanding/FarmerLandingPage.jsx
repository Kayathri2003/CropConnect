import React from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import './FarmerLandingPage.css'


const FarmerLandingPage = () => {
    
    const location=useLocation();
    const farmer_id=location.state;
    console.log("landing"+farmer_id);

    const navigate =  useNavigate();
    const handleViewBids = (farmer_id) =>
    {
        navigate('/active-bidding', {state : farmer_id});  
    };

    const handleAddProduct = (farmer_id) =>
    {
        navigate('/farmer-addproduct', {state : farmer_id});
    }

    return (
    <div className="FL_container">
        
        
        <section className="FL_background">
        <h3 className="FL_h3">-Farmer Home!-</h3>
        <div className="FL_image-row">
            <div className="FL_image-container">
            <div className="FL_addfunction"></div>
            <div className="FL_down_text">
            
                <button className="FL_button-buy" onClick = {()=> handleAddProduct(farmer_id)}>Add Products</button>
                
                <p className="FL_text">join us to connect with the buyers and enhance your agricultural productivity</p>
            </div>
            </div>

            <div className="FL_image-container">
            <div className="FL_viewbid"></div>
            <div className="FL_down_text">
            
                <button className="FL_button-buy" onClick={()=>handleViewBids(farmer_id)}>View Bids</button>

            <p className="FL_text">check current market bids for your crops and connect with buyers offering competitive prices</p></div>
            </div>

            
        </div>
    
    
        </section>
        </div>
    )
}

export default FarmerLandingPage
