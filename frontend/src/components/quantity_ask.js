import React, { Component } from 'react';
class quantity_ask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            // email: '',
            // type_of_user: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangeType = this.onChangeType.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        // this.setState({ name: event.target.value });
        localStorage.setItem("buy_quantity", this.state.name);
        console.log(localStorage.getItem("buy_quantity"));
    }
    render() {
        return (<div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Quantity: </label>
                    <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeUsername} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Product" className="btn btn-primary" />
                </div>
            </form>
        </div>);
    }
}
