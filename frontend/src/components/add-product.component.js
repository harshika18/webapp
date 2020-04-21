import React, {Component} from 'react';
import axios from 'axios';

export default class CreateProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
            quantity: '',
            quantity_remain: ''
            // username: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ name: event.target.value });
    }

    onChangePrice(event) {
        this.setState({ price: event.target.value });
    }

    onChangeQuantity(event) {
        this.setState({ quantity: event.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        // console.log("front")
        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            quantity_remain: this.state.quantity,
            username: localStorage.getItem("user_profile"),
            is_dispatch: '0'

        }

        axios.post('http://localhost:4000/addproduct', newProduct)
             .then(res => console.log(res.data));
        // console.log("shdhg")
        this.setState({
            name: '',
            price: '',
            quantity: ''
        });
    }

    render() {
        return (
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
                        <label>Price: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.price}
                               onChange={this.onChangePrice}
                               />  
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.quantity}
                               onChange={this.onChangeQuantity}
                               >
                        </input>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}