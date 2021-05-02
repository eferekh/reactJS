import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CategoriesTable from "./Categories/CategoriesTable";
import CategoriesForm from "./Categories/CategoriesForm";
import DeleteModal from "./modals/DeleteModal";
import Header from "./common/Header";
import Footer from "./common/Footer";

class Categories extends Component {
    state = {
        categories: [],

        category: {
            id: -1,
            name: "",
        },

        showCategoriesForm: false,

        deleteModalId: "-1",
        deleteModalShow: false,
        deleteModalMessage: "",
        deleteModalType: "",
    };

    componentDidMount = () => {
        this.getCategories();
    };

    handleInputChange = (e) => {
        const category = { ...this.state.category };
        category[e.currentTarget.name] = e.currentTarget.value;

        this.setState({ category });
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
            const categories = data[1];
            this.setState({ categories });
        }
    };

    handleShowForm = (bool) => {
        let showCategoriesForm;

        if (bool) showCategoriesForm = true;
        else {
            this.resetForm();
            showCategoriesForm = !this.state.showCategoriesForm;
        }

        this.setState({ showCategoriesForm });
    };

    resetForm = () => {
        const category = {
            id: -1,
            name: "",
        };

        this.setState({ category });
    };

    handleSubmit = async () => {
        const formData = new FormData();
        formData.append("categoryId", this.state.category.id);
        formData.append("categoryName", this.state.category.name);

        let url = "http://localhost/reactphpv3.0-app-backend/index.php/home/";
        url +=
            this.state.category.id === -1 ? "saveNewCategory" : "editCategory";

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
            this.getCategories();
            this.handleShowForm();
        }
    };

    editCategory = async (categoryId) => {
        const formData = new FormData();
        formData.append("categoryId", categoryId);
        formData.append("categoryName", this.state.category.name);

        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/editCategory`,
            method: "POST",
            data: formData,
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === -1) {
            const errorMsg = data[0];
            this.props.alert(errorMsg);
        } else {
            this.getCategories();
            this.handleShowForm();
        }
    };

    onEdit = async (categoryId) => {
        const formData = new FormData();
        formData.append("categoryId", categoryId);

        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getCategory`,
            method: "POST",
            data: formData,
        });
        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const errorMsg = data[1];
            this.props.alert(errorMsg);
        } else {
            const categoryObj = data[1][0];

            const category = {
                id: categoryId,
                name: categoryObj.category_name,
            };

            this.setState({ category });
            this.handleShowForm(true);
        }
    };

    onDelete = (categoryType, categoryId) => {
        const deleteModalId = categoryId;
        const deleteModalShow = true;
        const deleteModalType = categoryType;
        const deleteModalMessage =
            "Are you sure you want to delete this category ?";

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

        this.getCategories();
    };

    render() {
        const {
            categories,
            category,
            showCategoriesForm,
            deleteModalId,
            deleteModalShow,
            deleteModalType,
            deleteModalMessage,
        } = this.state;

        return (
            <>
                <Header active="categories" />

                <div className="container mt-2 mb-2">
                    <CategoriesForm
                        category={category}
                        show={showCategoriesForm}
                        alert={this.props.alert}
                        onSubmit={this.handleSubmit}
                        onHandle={this.handleInputChange}
                        onToggle={this.handleShowForm}
                    />

                    <CategoriesTable
                        categories={categories}
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

Categories.propTypes = {
    alert: PropTypes.func,
};

export default Categories;
