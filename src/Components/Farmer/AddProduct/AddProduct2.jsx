import React, { useState } from 'react';
import './AddProduct.css';


const categories = ['Vegetables', 'grains', 'Diary']; 

const AddProductsForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '', 
    description: '',
    stockQuantity: '',
    basePrice: '',
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleStockQuantityChange = (e) => {
    const newValue = e.target.value.replace(/^0+/, '');
    setFormData({ ...formData, stockQuantity: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="AP_container">
      <div className="AP_navbar">
        <div className="AP_logo">
          <p><img src="\src\assets\Media.png" alt="logo" className="logo" ></img></p>
        </div>
        <div className="AP_profile">
          <img src="src\assets\profile.png" alt="Profile" className="profile-img" />
        </div>
      </div>
      <h3 className="AP_h3">-Add Products-</h3>
      <div className="AP_form-container">
        <form onSubmit={handleSubmit} className="AP_AddProducts-form">
          <div className="AP_form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="AP_form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="AP_form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="AP_form-group">
            <label htmlFor="stockQuantity">Stock Quantity</label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              value={formData.stockQuantity}
              onChange={handleStockQuantityChange}
              min="0"
              required
            />
          </div>
          <div className="AP_form-group">
            <label htmlFor="basePrice">Base Price</label>
            <input
              type="text"
              id="basePrice"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className="AP_form-group">
            <label htmlFor="productImage">Product Image</label>
            <input
              type="file"
              id="productImage"
              name="productImage"
              onChange={handleChange}
              accept="image/*"
              required
            />
          </div>
          <button type="submit" className="AP_submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductsForm;
