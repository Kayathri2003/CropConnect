

// // import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
// // import FarmerDetails from './Components/Authentication/FarmerForm/FarmerForm'
// // import Login from './Components/Authentication/Login/Login'
// // import RegistrationForm from './Components/Authentication/Registration/Registration'
// // import AddProductsForm from './Components/Farmer/AddProduct/AddProduct'
// // import FarmerLandingPage from './Components/Farmer/FarmerLanding/FarmerLandingPage'
// // import ProductBidding from './Components/Farmer/ProductBidding/ProductBidding'
// // import ActiveBidding from './Components/Farmer/ViewActiveBidding/ActiveBidding'


// // function App() {

// //   return (
// //     <>
// //       <Router>
// //         <Routes>
// //           <Route path="/login" element={<Login/>}/>
// //           <Route path="/register" element={<RegistrationForm/>}/>
// //           <Route path="/farmer-details" element={<FarmerDetails/>}/>
          
// //           <Route path="/farmer-landing" element={<FarmerLandingPage/>}/>
// //           <Route path="/farmer-addproduct" element={<AddProductsForm/>}/>
// //           <Route path="/product-bidding" element={<ProductBidding/>}/>
// //           <Route path="/active-bidding" element={<ActiveBidding/>}/>
// //         </Routes>
// //       </Router>
// //     </>
// //   )
// // }

// // export default App;
// import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
// import FarmerDetails from './Components/Authentication/FarmerForm/FarmerForm'
// import Login from './Components/Authentication/Login/Login'
// import RegistrationForm from './Components/Authentication/Registration/Registration'
// import AddProductsForm from './Components/Farmer/AddProduct/AddProduct'
// import FarmerLandingPage from './Components/Farmer/FarmerLanding/FarmerLandingPage'
// import ProductBidding from './Components/Farmer/ProductBidding/ProductBidding'
// import ActiveBidding from './Components/Farmer/ViewActiveBidding/ActiveBidding'
// import Bidding from './Components/Vendor/Bidding/Bidding'
// import { Category } from './Components/Vendor/Category/Category'
// import Productdetails from './Components/Vendor/ProductDetails/productdetails'
// import VendorHome from './Components/Vendor/VendorLanding/vendorhome'



 
 
// function App() {
 
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login/>}/>
//           <Route path="/register" element={<RegistrationForm/>}/>
//           <Route path="/farmer-details" element={<FarmerDetails/>}/>
          
//           <Route path="/farmer-landing" element={<FarmerLandingPage/>}/>
//           <Route path="/farmer-addproduct" element={<AddProductsForm/>}/>
//           <Route path="/product-bidding" element={<ProductBidding/>}/>
//           <Route path="/active-bidding" element={<ActiveBidding/>}/>
 
          
//           {/* <Route path="/vendor-land" element={<Vendor />} /> */}
//           <Route path="/home" element={<VendorHome />} />
//           <Route path="/category" element={<Category />} />
//           <Route path="/products/:category_id" element={<Productdetails />} />
//           <Route path="/bidding" element={<Bidding/>}/>
//         </Routes>
//       </Router>
//     </>
//   )
// }
 
// export default App;
 




import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import FarmerDetails from './Components/Authentication/FarmerForm/FarmerForm'
import Login from './Components/Authentication/Login/Login'
import RegistrationForm from './Components/Authentication/Registration/Registration'
import AddProductsForm from './Components/Farmer/AddProduct/AddProduct'
import FarmerLandingPage from './Components/Farmer/FarmerLanding/FarmerLandingPage'
import ProductBidding from './Components/Farmer/ProductBidding/ProductBidding'
import ActiveBidding from './Components/Farmer/ViewActiveBidding/ActiveBidding'
import Bidding from './Components/Vendor/Bidding/Bidding'
import { Category } from './Components/Vendor/Category/Category'
import Productdetails from './Components/Vendor/ProductDetails/productdetails'
import VendorHome from './Components/Vendor/VendorLanding/VendorHome'
import VendorViewBid from './Components/Vendor/ViewBidding/vendorviewbid'
import Navbar from './Components/layout/Navbar'


function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
          <Route path="/farmer-details" element={<FarmerDetails/>}/>
          
          <Route path="/farmer-landing" element={<FarmerLandingPage/>}/>
          <Route path="/farmer-addproduct" element={<AddProductsForm/>}/>
          <Route path="/product-bidding" element={<ProductBidding/>}/>
          
          <Route path="/active-bidding" element={<ActiveBidding/>}/>

          <Route path="/" element={<VendorHome />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products/:category_id" element={<Productdetails />} />
          <Route path="/bidding/:user_id" element={<Bidding/>}/>
          <Route path="/vendorview" element={<VendorViewBid/>}/>

         
        </Routes>
      </Router>
    </>
  )
}

export default App;

