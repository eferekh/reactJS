import React, { Component } from "react";
import PropTypes from "prop-types";

class CategoriesForm extends Component {
    validateCategoryForm = (e) => {
        e.preventDefault();

        const categoryName = this.props.category.name;

        if (categoryName.trim() === "") {
            const msg = "Product Name Is Required.";
            this.props.alert(msg);
            return false;
        }

        this.props.onSubmit();
    };

    createFormClass = () => {
        return this.props.show ? "mb-2" : "mb-2 displayNone";
    };

    render() {
        const { onHandle, category, show, onToggle } = this.props;

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
                <form
                    onSubmit={this.validateCategoryForm}
                    className={this.createFormClass()}
                >
                    <input type="hidden" value={category.id} />

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="form-group">
                                <label htmlFor="categoryName">
                                    Category Name
                                </label>
                                <input
                                    value={category.name}
                                    onChange={onHandle}
                                    type="text"
                                    id="categoryName"
                                    name="name"
                                    className="form-control"
                                />
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

CategoriesForm.propTypes = {
    onSubmit: PropTypes.func,
    show: PropTypes.bool,
    alert: PropTypes.func,
};

export default CategoriesForm;
