import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import LoginUser from './components/login-user'
import ShowProduct from './components/product-detail.component'
import CreateProduct from './components/add-product.component'
import opt from './components/vendor.component'
import cus_opt from './components/customer.component'
import Search from './components/search.component';
import product_search_page from './components/product-search.component';
import Dispatch from './components/dispatch.component';
import Dispatched from './components/dispatched.component';
import quantity_ask from './components/quantity-ask.component';
import myShowProduct from './components/myproduct.component'

function App() {
  return (
    <Router>
      
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Users</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create User</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login_page" className="nav-link">Login</Link>
              </li>
              {/* <li className="navbar-item">
                <Link to="/pro_search" className="nav-link">Login</Link>
              </li> */}
              {/* <li className="navbar-item">
                <Link to="/show_pro" className="nav-link">Products details</Link>
              </li>
              <li className="navbar-item">
                <Link to="/addproduct_to" className="nav-link">Add product</Link>
              </li>
              <li className="navbar-item">
                <Link to="/vendor_page" className="nav-link">Vendor</Link>
              </li> */}
            </ul>
          </div>
        </nav>

        <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/create" component={CreateUser}/>
        <Route path="/login_page" component={LoginUser}/>
        <Route path="/show_pro" component={ShowProduct}/>
        <Route path="/addproduct_to" component={CreateProduct}/>
        <Route path="/vendor_page" component={opt}/> 
        <Route path="/customer_page" component={cus_opt}/> 
        <Route path="/pro_search" component={Search}/> 
        <Route path="/search_page" component={product_search_page}/> 
        <Route path="/dispatch" component={Dispatch}/> 
        <Route path="/dispatched" component={Dispatched}/> 
        <Route path="/quantity_check" component={quantity_ask}/> 
        <Route path="/my_show_pro" component={myShowProduct}/>
        
        
      </div>
    </Router>
  );
}

export default App;
