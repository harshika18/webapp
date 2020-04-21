import React, {Component} from 'react';
import axios from 'axios';

export default class Dispatched extends Component {
    
    constructor(props) {
        super(props);
        this.state = {product: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/dispatched')
             .then(response => {
                 this.setState({product: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>User</th>
                            <th>Remain</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.product.map((currentproduct, i) => {
                            return (
                                <tr>
                                    <td>{currentproduct.name}</td>
                                    <td>{currentproduct.quantity}</td>
                                    <td>{currentproduct.price}</td>
                                    <td>{currentproduct.username}</td>
                                    <td>{currentproduct.quantity_remain}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}