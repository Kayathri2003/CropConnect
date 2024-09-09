import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Category.css';

export const Category = () => {
    const navigate = useNavigate();

    const location=useLocation();
    const user_id=location.state;
    
    const handleCategoryClick = (category_id) => {
        navigate(`/products/${category_id}`,{state : user_id});
    };

    return (
        <section className="background">
            <div className="header">
                <h2>All Categories...</h2>
            </div>
            <div className="image-row">
                <div className="image-container" onClick={() => handleCategoryClick(1)}>
                    <div className="viewcategory photo1"></div>
                    <h2 className="h3_down_text">GRAINS AND PULSES</h2>
                </div>
                <div className="image-container" onClick={() => handleCategoryClick(2)}>
                    <div className="viewcategory photo2"></div>
                    <h2 className="h3_down_text">VEGGIES</h2>
                </div>
                <div className="image-container" onClick={() => handleCategoryClick(3)}>
                    <div className="viewcategory photo6"></div>
                    <h2 className="h3_down_text">DAIRY AND POULTRY</h2>
                </div>
            </div>
        </section>
    );
};

