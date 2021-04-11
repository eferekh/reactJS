import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ProductsTable from "./Products/ProductsTable";
import ProductsForm from "./Products/ProductsForm";

class Products extends Component {
    state = {
        products: [],
        showProductsForm: false,
        deleteModalShow: false,
        deleteModalProductId: -1,
    };

    componentDidMount = () => {
        this.getProducts();
    };

    getProducts = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getProducts`,
            method: "POST",
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

    handleShowForm = () => {
        const showProductsForm = !this.state.showProductsForm;
        this.setState({ showProductsForm });
    };

    handleSubmit = async (formData, productId) => {
        let url = "http://localhost/reactphpv3.0-app-backend/index.php/home/";
        url += productId === -1 ? "saveNewProduct" : "editProduct";

        const httpReq = await axios({
            url: url,
            method: "POST",
            data: formData,
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const msg = data[1];
            this.props.alert(msg);
        } else {
            this.getProducts();
            this.handleShowForm();
        }
    };

    showDeleteModal = (productId) => {
        const deleteModalShow = !this.state.deleteModalShow;
        this.setState({ deleteModalShow });
    };

    render() {
        const {
            products,
            showProductsForm,
            deleteModalShow,
            deleteModalProductId,
        } = this.state;

        return (
            <>
                <Header active="products" />

                <div className="container mt-2 mb-2">
                    <div className="topButtonContainer">
                        <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={this.handleShowForm}
                        >
                            Show Form
                        </button>
                    </div>

                    <ProductsForm
                        onSubmit={this.handleSubmit}
                        show={showProductsForm}
                        alert={this.props.alert}
                    />
                    <ProductsTable
                        products={products}
                        onDelete={this.showDeleteModal}
                    />
                </div>

                <ProductDeleteModal
                    productId={deleteModalProductId}
                    show={deleteModalShow}
                    onHide={this.showDeleteModal}
                />

                <Footer />
            </>
        );
    }
}

Products.propTypes = {
    alert: PropTypes.func,
};

export default Products;
