import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const FarmerDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const user_id = location.state; 

  const onSubmit = async (data) => {
    
    const formData = { ...data, user_id }; 
    console.log('Submitting data:', formData);

    try {
      const response = await axios.post('http://localhost:8054/api/farmers', formData);

      if (response.status === 200) {
        const result = response.data;

        
        if (result && result.farmer_id) {
          setMessage('Details submitted successfully!');
          sessionStorage.setItem('farmer', JSON.stringify(result));
          navigate('/farmer-landing', { state: { farmer_id: result.farmer_id } });
        } else {
          setMessage('Unexpected response structure.');
        }
      } else {
        setMessage(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting details:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="L_box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Farmer Details</h3>
        {message && <p>{message}</p>}
        
        <div className="L_input-box">
          <input
            type="text"
            {...register('identification_number', { required: 'Identification Number is required' })} 
          />
          <label>Identification Number</label>
          {errors.identification_number && <span className="error">{errors.identification_number.message}</span>}
        </div>
        
        <div className="L_input-box">
          <input
            type="text"
            {...register('farmland_location', { required: 'Farmland Location is required' })} 
          />
          <label>Farmland Location</label>
          {errors.farmland_location && <span className="error">{errors.farmland_location.message}</span>}
        </div>
        
        <div className="L_input-box">
          <input
            type="number"
            {...register('acres', { required: 'Number of Acres is required', min: { value: 0, message: 'Acres must be a positive number' } })} 
          />
          <label>Number of Acres</label>
          {errors.acres && <span className="error">{errors.acres.message}</span>}
        </div>

        <div className="L_buttons">
          <input type="button" value="Skip" className="L_btn" onClick={() => navigate('/some-other-route')} />
          <input type="submit" value="Submit" className="L_btn" />
        </div>
      </form>
    </div>
  );
};

export default FarmerDetails;
