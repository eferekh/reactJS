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

        product: {
            id: -1,
            name: "",
            price: 0,
            categoryId: -1,
        },

        showProductsForm: false,

        deleteModalId: "-1",
        deleteModalShow: false,
        deleteModalMessage: "",
        deleteModalType: "",
    };

    componentDidMount = () => {
        this.getProducts();
    };

    handleInputChange = (e) => {
        const product = { ...this.state.product };
        product[e.currentTarget.name] = e.currentTarget.value;

        this.setState({ product });
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

    handleShowForm = (bool) => {
        let showProductsForm;

        if (bool) {
            showProductsForm = true;
        } else {
            this.resetForm();
            showProductsForm = !this.state.showProductsForm;
        }

        this.setState({ showProductsForm });
    };

    resetForm = () => {
        const product = {
            id: -1,
            name: "",
            price: 0,
            categoryId: -1,
        };

        this.setState({ product });
    };

    handleSubmit = async () => {
        const formData = new FormData();
        formData.append("productId", this.state.product.id);
        formData.append("productName", this.state.product.name);
        formData.append("productPrice", this.state.product.price);
        formData.append("productCategoryId", this.state.product.categoryId);

        let url = "http://localhost/reactphpv3.0-app-backend/index.php/home/";
        url += this.state.product.id === -1 ? "saveNewProduct" : "editProduct";

        const httpReq = await axios({
            url: url,
            method: "POST",
            data: formData,
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const errorMsg = data[1];
            this.props.alert(errorMsg);
        } else {
            this.getProducts();
            this.handleShowForm();
        }
    };

    editProduct = async (productId) => {
        const formData = new FormData();
        formData.append("productId", productId);
        formData.append("productName", this.state.product.name);
        formData.append("productPrice", this.state.product.price);
        formData.append("productCategoryId", this.state.product.categoryId);

        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/editProduct`,
            method: "POST",
            data: formData,
        });
        const data = httpReq.data;
        const flag = data[0];

        if (flag === -1) {
            const errorMsg = data[0];
            this.props.alert(errorMsg);
        } else {
            this.getProducts();
            this.handleShowForm();
        }
    };

    onEdit = async (productId) => {
        const formData = new FormData();
        formData.append("productId", productId);

        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getProduct`,
            method: "POST",
            data: formData,
        });
        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const errorMsg = data[1];
            this.props.alert(errorMsg);
        } else {
            const productObj = data[1][0];

            const product = {
                id: productId,
                name: productObj.product_name,
                price: productObj.product_price,
                categoryId: productObj.product_category_id,
            };

            this.setState({ product });
            this.handleShowForm(true);
        }
    };

    onDelete = (productType, productId) => {
        const deleteModalId = productId;
        const deleteModalShow = true;
        const deleteModalType = productType;
        const deleteModalMessage =
            "Are you sure you want to delete this product ?";

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
            product,
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
                    <ProductsForm
                        product={product}
                        show={showProductsForm}
                        alert={this.props.alert}
                        onSubmit={this.handleSubmit}
                        onHandle={this.handleInputChange}
                        onToggle={this.handleShowForm}
                    />
                    <ProductsTable
                        products={products}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
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
