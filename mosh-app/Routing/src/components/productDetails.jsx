import React, { Component } from "react";

class ProductDetails extends Component {
    handleSave = () => {
        // Navigate to /products
        this.props.history.push("/products"); // if user press the back button, he will be able to see the page he was in. (Previous URL saved in history)
        this.props.history.replace("/products"); // if user press the back button, he will not see the page he was in (Previous URL not saved in history)
    };

    render() {
        return (
            <div>
                <h1>Product Details - {this.props.match.params.id}</h1>
                <button onClick={this.handleSave}>Save</button>
            </div>
        );
    }
}

export default ProductDetails;
