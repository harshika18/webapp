import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

// import UsersList from './users-list.component'
// import CreateProduct from './add-product.component'
// import ShowProduct from './product-detail.component'

import UsersList from './users-list.component'
import CreateProduct from './add-product.component'
// import Search from './search.component';
import ShowProduct from './product-detail.component'
import myShowProduct from './myproduct.component'
import Dispatch from './dispatch.component'
import Dispatched from './dispatched.component'

export default class opt extends Component {
    // console.log("dcbs")
    render() {
        return (
            <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    {/* <Link to="/vendor_page" className="navbar-brand">Vendor</Link> */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/addproduct_to" className="nav-link">Add product</Link>
                            </li>
                     <li className="navbar-item">
                         <Link to="/show_pro" className="nav-link">show product</Link>
                     </li>
                     <li className="navbar-item">
                         <Link to="/my_show_pro" className="nav-link">My product</Link>
                     </li>
                     {/* <li className="navbar-item">
                         <Link to="/pro_search" className="nav-link">search</Link>
                     </li> */}
                     <li className="navbar-item">
                         <Link to="/dispatch" className="nav-link">In stock</Link>
                     </li>
                     <li className="navbar-item">
                         <Link to="/dispatched" className="nav-link">Dispatched</Link>
                     </li>
                         </ul>
                     </div>
                 </nav>
                 {/* <h1>Customer</h1> */}
                 <br/>
        <Route path="/" exact component={UsersList}/>
        <Route path="/addproduct_to" component={CreateProduct}/>
        <Route path="/show_pro" component={ShowProduct}/>
        <Route path="/my_show_pro" component={myShowProduct}/>
        {/* <Route path="/pro_search" component={Search}/>  */}
        <Route path="/dispatch" component={Dispatch}/> 
        <Route path="/dispatched" component={Dispatched}/> 
        {/* <Route path="/vendor_page" component={opt}/>  */}
       </div>
          </Router>
        );
    }
}