import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class ProductsForm extends Component {
    state = {
        categories: [],
    };

    componentDidMount = () => {
        this.getCategories();
    };

    getCategories = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getCategories`,
            method: "POST",
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const msg = data[1];
            this.props.alert(msg);
        } else {
            const categories = data[1];
            this.setState({ categories });
        }
    };

    validateProductForm = (e) => {
        e.preventDefault();
        
        const productName = this.props.product.name;
        const productPrice = this.props.product.price;
        const productCategoryId = Number(this.props.product.categoryId);

        if (productName.trim() === "") {
            const msg = "Product Name Is Required.";
            this.props.alert(msg);
            return false;
        }

        if (productPrice === "") {
            const msg = "Product Price Is Required.";
            this.props.alert(msg);
            return false;
        }

        if (isNaN(productPrice)) {
            const msg = "Product Price Should Be a Number.";
            this.props.alert(msg);
            return false;
        }

        if (productCategoryId === -1) {
            const msg = "Please Select a Category.";
            this.props.alert(msg);
            return false;
        }

        this.props.onSubmit();
    };

    createFormClass = () => {
        return this.props.show ? "mb-2" : "mb-2 displayNone";
    };

    render() {
        const { categories } = this.state;
        const { onHandle, product, show, onToggle } = this.props;

        return (
            <>
                <div className="topButtonContainer">
                    <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        onClick={() => onToggle(false)}
                    >
                        {show ? "Hide" : "Show"} Form
                    </button>
                </div>
                <form onSubmit={this.validateProductForm} className={this.createFormClass()}>
                    <input type="hidden" value={product.id} />

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="productName">Product Name</label>
                                <input
                                    value={product.name}
                                    onChange={onHandle}
                                    type="text"
                                    id="productName"
                                    name="name"
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="productPrice">Product Price</label>
                                <input
                                    value={product.price}
                                    onChange={onHandle}
                                    type="text"
                                    id="productPrice"
                                    name="price"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="form-group">
                                <label htmlFor="productCategory">
                                    Product Category
                                </label>
                                <select
                                    className="form-control"
                                    id="productCategory"
                                    name="categoryId"
                                    value={product.categoryId}
                                    onChange={onHandle}
                                >
                                    <option value="-1">-- Select --</option>
                                    {categories.map((category) => (
                                        <option
                                            value={category.id}
                                            key={category.id}
                                        >
                                            {category.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-block btn-outline-primary"
                    >
                        Submit
                    </button>
                </form>
            </>
        );
    }
}

ProductsForm.propTypes = {
    onSubmit: PropTypes.func,
    show: PropTypes.bool,
    alert: PropTypes.func,
};

export default ProductsForm;
