import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ProductsTable from "./Products/ProductsTable";
import ProductsForm from "./Products/ProductsForm";
import DeleteModal from "./modals/DeleteModal";

class Products extends Component {
    state = {
        products: [],
        showProductsForm: false,

        deleteModalId: "-1",
        deleteModalShow: false,
        deleteModalMessage: "",
        deleteModalType: "",
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

    onDelete = (type, id) => {
        const deleteModalId = id;
        const deleteModalShow = true;
        const deleteModalType = type;
        const deleteModalMessage = "Are you sure you want to delete this product ?";

        this.setState({
            deleteModalId,
            deleteModalShow,
            deleteModalType,
            deleteModalMessage,
        });
    };

    deleteModalOnHide = () => {
        const deleteModalId = "-1";
        const deleteModalShow = false;
        const deleteModalType = "";
        const deleteModalMessage = "";

        this.setState({
            deleteModalId,
            deleteModalShow,
            deleteModalType,
            deleteModalMessage,
        });

        this.getProducts();
    };

    render() {
        const {
            products,
            showProductsForm,
            deleteModalId,
            deleteModalShow,
            deleteModalType,
            deleteModalMessage,
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
                        onDelete={this.onDelete}
                    />
                </div>

                <DeleteModal
                    show={deleteModalShow}
                    id={deleteModalId}
                    message={deleteModalMessage}
                    type={deleteModalType}
                    onHide={this.deleteModalOnHide}
                    alert={this.props.alert}
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
