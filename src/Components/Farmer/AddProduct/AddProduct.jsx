import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProductsForm = () => {
  const location = useLocation();
  
  const navigate = useNavigate();
  const farmerId = location.state; 
  console.log("add"+farmerId);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    product_name: '',
    category: { category_id: '' }, // Nested object to match the backend
    description: '',
    stock_quantity: '',
    baseprice: '',
    status: 'active',
    farmer: { farmer_id: farmerId }, // Nested object to match the backend
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8054/categorydetail/all');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category_id') {
      setFormData(prevData => ({
        ...prevData,
        category: { category_id: value }
      }));
    } else if (name === 'farmer_id') {
      setFormData(prevData => ({
        ...prevData,
        farmer: { farmer_id: value }
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);

    try {
      const response = await axios.post('http://localhost:8054/productdetail/add', formData);
      console.log('Response:', response.data);
      alert('Product added successfully!');
      navigate('/active-bidding', { state: farmerId });
    } catch (error) {
      // Handle errors more gracefully and ensure error handling
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="AP_container">
      
      <h3 className="L_h3">-Adding Products Here!-</h3>
     
      {loading ? (
        <p>Loading categories...</p>
      ) : (
        <form onSubmit={handleSubmit} className="AP_AddProducts-form">
          <div className="AP_form-group">
            <label htmlFor="product_name">Product Name</label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="AP_form-group">
            <label htmlFor="category_id">Category</label>
            <select
              id="category_id"
              name="category_id"
              value={formData.category.category_id}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                  {category.category_name}
                </option>
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
            <label htmlFor="stock_quantity">Stock Quantity</label>
            <input
              type="number"
              id="stock_quantity"
              name="stock_quantity"
              value={formData.stock_quantity}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
          <div className="AP_form-group">
            <label htmlFor="baseprice">Base Price</label>
            <input
              type="number"
              id="baseprice"
              name="baseprice"
              value={formData.baseprice}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
          <button type="submit" className="AP_submit-button">Submit</button>
          
        </form>
      )}
    </div>
  );
};

export default AddProductsForm;
