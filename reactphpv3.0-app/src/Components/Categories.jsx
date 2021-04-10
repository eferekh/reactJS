import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CategoriesTable from "./Categories/CategoriesTable";
import Header from "./common/Header";
import Footer from "./common/Footer";

class Categories extends Component {
    state = {
        categories: [],
    };

    getCategories = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/Home/getCategories`,
            method: "POST",
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === -1 || flag === 0) {
            const msg = "error";
            this.props.alert(msg);
        } else {
            const categoriesArr = data[1];
            this.setState({ categories: categoriesArr });
        }
    };

    componentDidMount = () => {
        this.getCategories();
    };

    render() {
        return (
            <>
                <Header active="categories" />

                <div className="container mt-2 mb-2">
                    <CategoriesTable categories={this.state.categories} />
                </div>

                <Footer />
            </>
        );
    }
}

Categories.propTypes = {
    alert: PropTypes.func,
};

export default Categories;
