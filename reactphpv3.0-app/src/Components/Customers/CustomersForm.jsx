import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomersForm extends Component {
    validateCustomerForm = (e) => {
        e.preventDefault();

        const customerName = this.props.customer.customerName;
        const customerEmail = this.props.customer.customerEmail;
        const customerMobileNumber = this.props.customer.customerMobileNumber;

        if (customerName.trim() === "") {
            this.props.alert("Customer Name Is Required.");
            return false;
        }

        if (customerEmail.trim() === "") {
            this.props.alert("Customer Email Is Required.");
            return false;
        }

        if (customerMobileNumber.trim() === "") {
            this.props.alert("Customer Mobile Number Is Required.");
            return false;
        }

        this.props.onSubmit();
    };

    getFormClass = () => {
        return this.props.show ? "mb-2" : "mb-2 displayNone";
    };

    render() {
        const { customer, onShowHideForm, onInputChange } = this.props;

        return (
            <div>
                <div className="topButtonContainer">
                    <button type="button" className="btn btn-sm btn-secondary" onClick={onShowHideForm}>
                        Show Form
                    </button>
                </div>

                <form onSubmit={this.validateCustomerForm} className={this.getFormClass()}>
                    <input
                        type="hidden"
                        name="customerId"
                        id="customerId"
                        value={customer.customerId}
                    />

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="form-group">
                                <label htmlFor="customerName">
                                    Customer Name
                                </label>
                                <input
                                    type="text"
                                    name="customerName"
                                    id="customerName"
                                    className="form-control"
                                    value={customer.customerName}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="form-group">
                                <label htmlFor="customerEmail">
                                    Customer Email
                                </label>
                                <input
                                    type="text"
                                    name="customerEmail"
                                    id="customerEmail"
                                    className="form-control"
                                    value={customer.customerEmail}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="form-group">
                                <label htmlFor="customerMobileNumber">
                                    Customer Mobile #
                                </label>
                                <input
                                    type="text"
                                    name="customerMobileNumber"
                                    id="customerMobileNumber"
                                    className="form-control"
                                    value={customer.customerMobileNumber}
                                    onChange={onInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                                type="submit"
                                className="btn btn-block btn-outline-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

CustomersForm.propTypes = {
    onSubmit: PropTypes.func,
    show: PropTypes.bool,
    alert: PropTypes.func,
    customer: PropTypes.object,
    onInputChange: PropTypes.func,
    onShowHideForm: PropTypes.func,
};

export default CustomersForm;
