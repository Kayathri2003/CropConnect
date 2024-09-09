// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import './Registration.css';

// const roles = [
//   { value: 'Farmer', label: 'Farmer' },
//   { value: 'Customer', label: 'Customer' }
// ];

// const RegistrationForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const onSubmit = async (data) => {
//     const { username, password, role, fullname, phonenumber, city, state, postalcode } = data;

//     try {
//       const response = await fetch('http://localhost:8054/api/v1/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password, role, fullname, phonenumber, city, state, postalcode }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setMessage('Register successful!');
//         sessionStorage.setItem('user', JSON.stringify(result));
//         if (result.role === "Farmer") {
//           navigate('/farmer-details');
//         } else {
//           navigate('/');
//         }
//       } else {
//         setMessage('Registration failed. Username already exists.');
//       }
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="L_container">
//       <div className="L_navbar">
//         <div className="L_logo">
//           <p><img src="\src\assets\logo2.png" alt="logo" className="logo" /></p>
//         </div>
//         <p className="N_title">𝐂𝐫𝐨𝐩𝐂𝐨𝐧𝐧𝐞𝐜𝐭</p>
//         <div className="L_profile">
//           <img src="src\assets\profile.png" alt="Profile" className="profile-img" />
//         </div>
//       </div>
      
//       <h3 className="L_h3">-Register Here!-</h3>
//       <div className="form_box">
//       <h3 id="reg">Registration Form</h3>
//         <form onSubmit={handleSubmit(onSubmit)} className="R_form">
//           {message && <p id="R_invalid">{message}</p>}
//           <div className="R_form-box">
//             <div className="R_box-left">
//               <div className="R_input-box">
//                 <input
//                   type="email"
//                   {...register('username', {
//                     required: 'Username is required',
//                   })}
//                 />
//                 <label>Username</label>
//                 {errors.username && <span className="error">{errors.username.message}</span>}
//               </div>
//               <div className="R_input-box">
//                 <input
//                   type="password"
//                   {...register('password', {
//                     required: 'Password is required',
//                     minLength: {
//                       value: 6,
//                       message: 'Password must be at least 6 characters',
//                     },
//                   })}
//                 />
//                 <label>Password</label>
//                 {errors.password && <span className="error">{errors.password.message}</span>}
//               </div>
//               <div className="R_input-box">
//                 <select
//                   {...register('role', { required: 'Role is required' })}
//                   defaultValue=""
//                 >
//                   <option value="" disabled>Select your role</option>
//                   {roles.map(role => (
//                     <option key={role.value} value={role.value}>{role.label}</option>
//                   ))}
//                 </select>
//                 <label>Role</label>
//                 {errors.role && <span className="error">{errors.role.message}</span>}
//               </div>
//               <div className="R_input-box">
//                 <input
//                   type="text"
//                   {...register('fullname', {
//                     required: 'Full Name is required',
//                     minLength: {
//                       value: 6,
//                       message: 'Full Name must be at least 6 characters',
//                     },
//                   })}
//                 />
//                 <label>Full Name</label>
//                 {errors.fullname && <span className="error">{errors.fullname.message}</span>}
//               </div>
//             </div>




//             <div className="R_box-right">
              
//               <div className="R_input-box">
//                 <input
//                   type="text"
//                   {...register('phonenumber', {
//                     required: 'Phone Number is required',
//                     pattern: {
//                       value: /^[0-9]{10}$/,
//                       message: 'Phone Number must be 10 digits',
//                     },
//                   })}
//                 />
//                 <label>Phone Number</label>
//                 {errors.phonenumber && <span className="error">{errors.phonenumber.message}</span>}
//               </div>
//               <div className="R_input-box">
//                 <input
//                   type="text"
//                   {...register('city', {
//                     required: 'City is required',
//                   })}
//                 />
//                 <label>City</label>
//                 {errors.city && <span className="error">{errors.city.message}</span>}
//               </div>
//               <div className="R_input-box">
//                 <input
//                   type="text"
//                   {...register('state', {
//                     required: 'State is required',
//                   })}
//                 />
//                 <label>State</label>
//                 {errors.state && <span className="error">{errors.state.message}</span>}
//               </div>
//               <div className="R_input-box">
//                 <input
//                   type="text"
//                   {...register('postalcode', {
//                     required: 'Postal Code is required',
//                     pattern: {
//                       value: /^[0-9]{6}$/,
//                       message: 'Postal Code must be 6 digits',
//                     },
//                   })}
//                 />
//                 <label>Postal Code</label>
//                 {errors.postalcode && <span className="error">{errors.postalcode.message}</span>}
//               </div>
//             </div>
//           </div>
//           <input type="submit" value="Submit" className="R_btn" />
//           <p id="R_ab">Already have an account? <a href="/login">Login</a></p>
//         </form>
//         </div>


//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const roles = [
  { value: 'Farmer', label: 'Farmer' },
  { value: 'Customer', label: 'Customer' }
];

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { username, password, role, fullname, phonenumber, city, state, postalcode } = data;

    try {
      const response = await fetch('http://localhost:8054/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, role, fullname, phonenumber, city, state, postalcode }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('Registration successful!');
        console.log(result.userid);
        sessionStorage.setItem('user', JSON.stringify(result));
        if (result.role === "Farmer") {
          navigate('/farmer-details', { state: result.userid });
        } else {
          navigate('/', { state: result.userid  });
        }
      } else {
        setMessage('Registration failed. Username already exists.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="L_container">
      <h3>Registration Form</h3>
      <div className="form_box">
        <form onSubmit={handleSubmit(onSubmit)} className="R_form">
          {message && <p id="R_invalid">{message}</p>}
          <div className="R_form-box">
            <div className="R_box-left">
              <div className="R_input-box">
                <input
                  type="email"
                  {...register('username', { required: 'Username is required' })}
                />
                <label>Username</label>
                {errors.username && <span className="error">{errors.username.message}</span>}
              </div>
              <div className="R_input-box">
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                  })}
                />
                <label>Password</label>
                {errors.password && <span className="error">{errors.password.message}</span>}
              </div>
              <div className="R_input-box">
                <select
                  {...register('role', { required: 'Role is required' })}
                  defaultValue=""
                >
                  <option value="" disabled>Select your role</option>
                  {roles.map(role => (
                    <option key={role.value} value={role.value}>{role.label}</option>
                  ))}
                </select>
                <label>Role</label>
                {errors.role && <span className="error">{errors.role.message}</span>}
              </div>
              <div className="R_input-box">
                <input
                  type="text"
                  {...register('fullname', {
                    required: 'Full Name is required',
                    minLength: { value: 6, message: 'Full Name must be at least 6 characters' }
                  })}
                />
                <label>Full Name</label>
                {errors.fullname && <span className="error">{errors.fullname.message}</span>}
              </div>
            </div>

            <div className="R_box-right">
              <div className="R_input-box">
                <input
                  type="text"
                  {...register('phonenumber', {
                    required: 'Phone Number is required',
                    pattern: { value: /^[0-9]{10}$/, message: 'Phone Number must be 10 digits' }
                  })}
                />
                <label>Phone Number</label>
                {errors.phonenumber && <span className="error">{errors.phonenumber.message}</span>}
              </div>
              <div className="R_input-box">
                <input
                  type="text"
                  {...register('city', { required: 'City is required' })}
                />
                <label>City</label>
                {errors.city && <span className="error">{errors.city.message}</span>}
              </div>
              <div className="R_input-box">
                <input
                  type="text"
                  {...register('state', { required: 'State is required' })}
                />
                <label>State</label>
                {errors.state && <span className="error">{errors.state.message}</span>}
              </div>
              <div className="R_input-box">
                <input
                  type="text"
                  {...register('postalcode', {
                    required: 'Postal Code is required',
                    pattern: { value: /^[0-9]{6}$/, message: 'Postal Code must be 6 digits' }
                  })}
                />
                <label>Postal Code</label>
                {errors.postalcode && <span className="error">{errors.postalcode.message}</span>}
              </div>
            </div>
          </div>
          <input type="submit" value="Submit" className="R_btn" />
          <p id="R_ab">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
