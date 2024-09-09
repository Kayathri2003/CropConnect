import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ActiveBidding.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ActiveBidding = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const farmer_id = location.state; 
    console.log(farmer_id);// Assuming farmer_id is passed through state

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:8054/productdetail/productdetailByFarmer/${farmer_id}`);
                const products = response.data;
                setProductList(products);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('An error occurred while fetching products.');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [farmer_id]);

    const handleSubmit = (product_id) => {
        navigate('/product-bidding', { state: product_id }); // Pass product_id as state
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="AB_container">
            {productList.length > 0 ? (
                productList.map(product => (
                    <div key={product.product_id} className="AB_card"> {/* Updated class */}
                        <div className="AB_image-container">
                            <img src={product.product_image} alt={product.product_name} />
                        </div>
                        <div className="AB_details-container">
                            <ul>
                                <li><b>Name:</b> {product.product_name}</li>
                                <li><b>Description:</b> {product.description}</li>
                                <li><b>Quantity:</b> {product.stock_quantity}</li>
                                <li><b>Base Price:</b> {product.baseprice ? `₹${product.baseprice}` : 'Not Available'}</li>
                                <li><b>Category:</b> {product.category.category_name}</li>
                                <li><b>Status:</b> {product.status}</li>
                            </ul>
                            <div className="AB_price-button-container">
                                <button type="button" onClick={() => handleSubmit(product.product_id)}>View</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available for this farmer.</p>
            )}
        </div>
    );
};

export default ActiveBidding;
