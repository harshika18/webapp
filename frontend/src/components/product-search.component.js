import React, {Component} from 'react';
import axios from 'axios';
// import quantity_ask from './quantity-ask.component';
// ShowProduct
export default class product_search_page extends Component {
    
    constructor(props) {
        super(props);
        this.state = {product: [],
            quantity: '',
             buy_pro: false
        }
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);        

    }
    componentDidMount() {
        axios.get('http://localhost:4000/sea_page')
             .then(response => {
                 this.setState({product: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

    onChangeQuantity(event) {
        // console.log("here")
        this.setState({ quantity: event.target.value });
        // localStorage.setItem("quantity_ask",this.state.quantity)
        // console.log(localStorage.getItem("quantity_ask"))
        // this.setState({ email: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        // console.log("front")
        this.setState({
            // name: '',
            // price: '',
            quantity: ''
        });
    }
    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Quantity: </label>
                             <input type="text" 
                           className="form-control" 
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity}
                            />
                        </div>
                </form>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>User</th>
                            <th>Remain</th>
                            {/* <th>Quantity</th> */}
                            <th>Buy</th>
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
                                    {/* <td><input type="button" value="BUY" className="btn btn-primary"/></td> */}
                                    <td><button className="btn btn-primary" 
                                    onClick = {() =>{
                                        localStorage.setItem("quantity_ask",this.state.quantity)
                                        // console.log(localStorage.getItem("quantity_ask"))
                                        const newProduct = {
                                            // quantity: this.state.quantity
                                            quantity: localStorage.getItem("quantity_ask")
                                        }
                                        axios.post('http://localhost:4000/quantity_post', newProduct)
                                            .then(function(res){
                                                console.log(res)
                                            })
                                        // axios.get('http://localhost:4000/buy_product' 
                                        // , {
                                        //     params: {
                                        //         id:currentproduct._id,
                                        //         quantity: localStorage.getItem("quantity_ask")

                                        //     }
                                        // }
                                        // )
                                        axios.get('http://localhost:4000/buy_product' , {
                                            params: {
                                                id:currentproduct._id
                                            }
                                        })
                                        .then(response => console.log(response))
                                        .catch(function(err) {
                                            console.log(err);
                                        });
                                        this.setState({
                                            // name: '',
                                            // price: '',
                                            quantity: ''
                                        });
                                        

                                        // console.log(this.state.buy_pro && <quantity_ask/> )
                                        // console.log(id)
                                    }}/></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>

                {/* <div> */}
                {/* <h1>start</h1>
                    { this.state.buy_pro && <quantity_ask/>}
                    <h1>khatam</h1> */}
                {/* </div> */}
                </div>
        )
    }
}

// class quantity_ask extends Component {

//     onChangeUsername(event) {
//         // this.setState({ name: event.target.value });
//         localStorage.setItem("buy_quantity",this.state.name)
//         console.log(localStorage.getItem("buy_quantity"))
//     }

//     render() {
//         return(
//             <div>
//             <form onSubmit={this.onSubmit}>
//                 <div className="form-group">
//                     <label>Quantity: </label>
//                     <input type="text" 
//                            className="form-control" 
//                            value={this.state.name}
//                            onChange={this.onChangeUsername}
//                            />
//                 </div>
//                 <div className="form-group">
//                     <input type="submit" value="Create Product" className="btn btn-primary"/>
//                 </div>
//             </form>
//         </div>
//         )
//     }
// }
