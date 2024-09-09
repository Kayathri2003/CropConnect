import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Container } from 'react-bootstrap';
import './ProductBidding.css';
import { useLocation } from 'react-router-dom';

const ProductBidding = () => {
    const [bids, setBids] = useState([]);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const product_id = location.state; 

    const handleAccept = async (bid_id) => {
        try {
            await axios.patch(`http://localhost:8054/api/updatestatus/${bid_id}`, 'Accepted and Payment pending', {
                headers: { 'Content-Type': 'text/plain' } // Ensure the content type is set correctly
            });;

            // Update local state
            setBids(bids.map(bid => 
                bid.bid_id === bid_id ? { ...bid, status: 'Accepted and Payment pending' } : bid
            ));
        } catch (error) {
            console.error('Error accepting bid:', error);
            setError('An error occurred while accepting the bid.');
        }
    };

    const handleDeny = async (bid_id) => {
        try {
            await axios.patch(`http://localhost:8054/api/updatestatus/${bid_id}`, 'Denied', {
            headers: { 'Content-Type': 'text/plain' } // Ensure the content type is set correctly
        });

            // Update local state
            setBids(bids.map(bid =>
                bid.bid_id === bid_id ? { ...bid, status: 'Denied' } : bid
            ));
        } catch (error) {
            console.error('Error denying bid:', error);
            setError('An error occurred while denying the bid.');
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            if (!product_id) {
                setLoading(false);
                setError('Product ID is missing.');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8054/productdetail/productdetail/${product_id}`);
                const productData = response.data;
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('An error occurred while fetching product details.');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [product_id]);

    useEffect(() => {
        const fetchBids = async () => {
            if (!product_id) return; 

            try {
                const response = await axios.get(`http://localhost:8054/api/getbidbyproduct/${product_id}`);
                setBids(response.data);
            } catch (error) {
                console.error('Error fetching bids:', error);
                setError('An error occurred while fetching bids.');
            }
        };

        fetchBids();
    }, [product_id]);

    if (loading) {
        return <div>Loading....</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="background">
            <Container className="container">
                {product ? (
                    <div className="product-details">
                        <h2>Product Details</h2>
                        <div className="product-item">
                            <img src={product.product_image} alt={product.product_name} className="product-image" />
                            <ul>
                                <li><b>Name:</b> {product.product_name}</li>
                                <li><b>Description:</b> {product.description}</li>
                                <li><b>Quantity:</b> {product.stock_quantity}</li>
                                <li><b>Base Price:</b> {product.baseprice ? `$${product.baseprice}` : 'Not Available'}</li>
                                <li><b>Category:</b> {product.category?.category_name || 'Not Available'}</li>
                                <li><b>Status:</b> {product.status || 'Not Available'}</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <p>No product details available.</p>
                )}
                <div className="PB_">
                <h2 className="bid_text">Bidders</h2>
                {bids.length > 0 ? (
                    bids.map(bid => (
                        <div 
                            key={bid.bid_id} 
                            className={`bid-item ${bid.status.includes('Accepted') ? 'accepted' : bid.status.includes('Denied') ? 'denied' : ''}`}
                        >
                            <div>
                                <p className="bid-item-p"><b>Bid ID:</b>{bid.bid_id}</p>
                                <p className="bid-item_p"><b>Bidder Name:</b> {bid.usermodel.fullname}</p>
                                <p className="bid-item_p"><b>Bidder City:</b> {bid.usermodel.city}</p>
                                <p className="bid-item_p"><b>Bid Date:</b> {new Date(bid.bid_date).toLocaleDateString()}</p>
                                <p className="bid-item_p"><b>Bid Amount:</b> ₹{bid.bid_amount}</p>
                                <p className="bid-item_p"><b>Bid Status:</b> {bid.status}</p>
                                <button className="bid-button accept-button" onClick={() => handleAccept(bid.bid_id)}>Accept</button>
                                <button className="bid-button deny-button" onClick={() => handleDeny(bid.bid_id)}>Deny</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No bids available for this product.</p>
                )}
                </div>
            </Container>
        </div>
    );
};

export default ProductBidding;
