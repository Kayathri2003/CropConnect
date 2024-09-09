import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Bidding.css';

function Bidding() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user_id } = useParams(); // Get user_id from URL parameters
    const productData = location.state?.product; // Safely extract productData from location.state
 
    console.log(productData);
    const [bPrice, setBPrice] = useState('');
    const [error, setError] = useState(''); // State for error message

    const handleSubmit = async (event) => {
        event.preventDefault();

        const bidAmount = parseFloat(bPrice);

        // Check for valid bid amount
        if (isNaN(bidAmount) || bidAmount <= 0) {
            setError(`Bid amount must be above ${productData.baseprice}`);
            return;
        }

        if (bidAmount < parseFloat(productData.baseprice)) {
            setError(`Bid price must be above ${productData.baseprice}`);
            return;
        }

        setError('');

        try {
            await axios.post('http://localhost:8054/api/add-bid', {
                product: { product_id: productData.product_id },
                bid_amount: bPrice,
                status: 'not started',
                usermodel: { userid: user_id }
            });

            navigate('/vendorview', { state: user_id });
        } catch (error) {
            console.error("Error submitting bid:", error);
            setError("There was an error submitting your bid. Please try again.");
        }
    };

    if (!productData) {
        return <div>Error: Product data not found.</div>;
    }

    return (
        <div className="b_container">
            <div className="b_card">
                <div className="b_header">
                    <button className="b_back-button" onClick={() => navigate(-1)}>{'<'}</button>
                    <h2>Bidding</h2>
                </div>
                <div className="b_content">
                    <form onSubmit={handleSubmit}>
                        <h3>Product Details</h3>
                        <div className="b_product-image">
                            {/* If you have an image URL, add it here */}
                        </div>
                        <p>Product ID: {productData.product_id}</p>
                        <p>Product Name: {productData.product_name}</p>
                        <p>Price: ₹{productData.baseprice}</p>
                        <p>Quantity: {productData.stock_quantity}</p>
                        <p>Description: {productData.description}</p>
                        
                        <input
                            type="number"
                            value={bPrice}
                            onChange={(e) => setBPrice(e.target.value)}
                            placeholder="Enter your bid price"
                        />
                        {error && <p className="error-message">{error}</p>}
                        <button className="b_payment-button" type="submit">Bid</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Bidding;
