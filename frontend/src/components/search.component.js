import React, {Component} from 'react';
import axios from 'axios';
// import product_search from './product-search.component'
import "bootstrap/dist/css/bootstrap.min.css"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Search extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            sort_type: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ name: event.target.value });
    }

    onChangeType(event) {
         var temp = document.getElementById("opt")
         if(temp.value === "price")
         {
            localStorage.setItem("sort_by","1")
         }
         if(temp.value === "quantity")
         {
            localStorage.setItem("sort_by","2")
         }
        //  console.log("got")
        // console.log(localStorage.getItem("sort_by"))
        // localStorage.setItem("sort_by",newUser.username)
        // this.setState({ type_of_user: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log("submit")
        const newProduct = {
            name: this.state.name,
            sort_type: localStorage.getItem("sort_by")
        }
        // console.log("atleast")
        axios.post('http://localhost:4000/product_search', newProduct)
             .then(function(res){
                // console.log("alteast")
                window.location = "/search_page" 
                // console.log("why")
             });
        this.setState({
            name: '',
        });
    }

    render() {
        return (
            <div>
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.name}
                               onChange={this.onChangeUsername}
                               />
                    </div>
                    <div className="form-group">
                        <label>Sort By: </label>
                        <select id="opt" name="form-control"
                               className="form-control" 
                            //    value={this.state.type_of_user}
                               onChange={this.onChangeType}
                               >
                                       <option value="select">sort</option>
                                       <option value="price">Price</option>
                                       <option value="quantity">Quantity</option>

                        </select>
                    </div>
                    <div className="form-group">
                        {/* <input type="submit"/> */}
                        {/* <Link type="submit" to="/search_page" className="btn btn-primary">Search</Link> */}
                        <input type="submit" value="Search" className="btn btn-primary"/>
                    </div>
                </form>
                </div>
            </div>
          )
    }
}