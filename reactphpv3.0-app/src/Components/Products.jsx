import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ProductsTable from "./Products/ProductsTable";

class Products extends Component {
    state = {
        products: [],
    };

    getProducts = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getProducts`,
            method: "POST"
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const msg = data[1];
            this.props.alert(msg);
        } else {
            const products = data[1];
            this.setState({ products });
        }
    };

    componentDidMount = () => {
        this.getProducts();
    }

    render() { 
        return (
            <>
                <Header active="products" />

                <div className="container mt-2 mb-2">
                    <ProductsTable products={this.state.products} />
                </div>

                <Footer />
            </>
        );
    }
}

Products.propTypes = {
    alert: PropTypes.func,
};
 
export default Products;