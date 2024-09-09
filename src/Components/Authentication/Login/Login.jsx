import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed and imported
import './Login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { username, password } = data;

    try {
      const response = await fetch('http://localhost:8054/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      setMessage('Login successful!');
      sessionStorage.setItem('user', JSON.stringify(result));

      if (result.role === "Farmer") {
        const user = result.userid;
        console.log("user"+user);
        const farmerResponse = await axios.get(`http://localhost:8054/api/farmers/getfarmerbyuser/${user}`);
        console.log("response", farmerResponse.data.farmer_id);
        navigate('/farmer-landing', { state:  farmerResponse.data.farmer_id  });
      } else {
        navigate('/', { state: result.userid });
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="L_container">
     
      <h3 className="L_h3">- Login Here! -</h3>
      <div className="L_box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Login</h3>
          {message && <p>{message}</p>}
          <div className="L_input-box">
            <input
              type="email"
              {...register('username', { required: 'Username is required' })}
            />
            <label>Username</label>
            {errors.username && <span className="error">{errors.username.message}</span>}
          </div>
          <div className="L_input-box">
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            <label>Password</label>
            {errors.password && <span className="error">{errors.password.message}</span>}
          </div>
          <input type="submit" value="Submit" className="L_btn" />
        </form>
        <p id="L_ab">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  );
};

export default Login;
