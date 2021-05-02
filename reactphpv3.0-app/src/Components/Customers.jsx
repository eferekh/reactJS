import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CustomersTable from "./Customers/CustomersTable";
import CustomersForm from "./Customers/CustomersForm";
import DeleteModal from "./modals/DeleteModal";
import Header from "./common/Header";
import Footer from "./common/Footer";

class Customers extends Component {
    state = {
        customers: [],

        customer: {
            customerId: "-1",
            customerName: "",
            customerEmail: "",
            customerMobileNumber: "",
        },

        showCustomersForm: false,

        deleteModalId: "-1",
        deleteModalShow: false,
        deleteModalType: "",
        deleteModalMessage: "",
    };

    getCustomers = async () => {
        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getCustomers`,
            method: "POST",
        });

        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const msg = data[1];
            this.props.alert(msg);
        } else {
            const customers = data[1];
            this.setState({ customers });
        }
    };

    handleInputChange = (e) => {
        const customer = { ...this.state.customer };
        customer[e.currentTarget.name] = e.currentTarget.value;

        this.setState({ customer });
    };

    showHideForm = (show) => {
        let showCustomersForm;
        show === true
            ? (showCustomersForm = true)
            : (showCustomersForm = !this.state.showCustomersForm);

        if (!showCustomersForm) this.resetCustomerForm();

        this.setState({ showCustomersForm });
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

        this.getCustomers();
    };

    resetCustomerForm = () => {
        const customer = {
            customerId: "-1",
            customerName: "",
            customerEmail: "",
            customerMobileNumber: "",
        };

        this.setState({ customer });
    };

    handleSubmit = async () => {
        const formData = new FormData();
        formData.append("customerId", this.state.customer.customerId);
        formData.append("customerName", this.state.customer.customerName);
        formData.append("customerEmail", this.state.customer.customerEmail);
        formData.append(
            "customerMobileNumber",
            this.state.customer.customerMobileNumber
        );

        let url = "http://localhost/reactphpv3.0-app-backend/index.php/home/";
        url +=
            this.state.customer.customerId === "-1"
                ? `saveNewCustomer`
                : `editCustomer`;

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
            this.getCustomers();
            this.showHideForm();
        }
    };

    onDelete = (customerType, customerId) => {
        const deleteModalId = customerId;
        const deleteModalShow = true;
        const deleteModalType = customerType;
        const deleteModalMessage =
            "Are you sure you want to delete this customer ?";

        this.setState({
            deleteModalId,
            deleteModalShow,
            deleteModalType,
            deleteModalMessage,
        });
    };

    onEdit = async (customerId) => {
        const formData = new FormData();
        formData.append("customerId", customerId);

        const httpReq = await axios({
            url: `http://localhost/reactphpv3.0-app-backend/index.php/home/getCustomer`,
            method: "POST",
            data: formData,
        });
        const data = httpReq.data;
        const flag = data[0];

        if (flag === 0 || flag === -1) {
            const errorMsg = data[1];
            this.props.alert(errorMsg);
        } else {
            const customerObj = data[1][0];

            const customer = {
                customerId: customerId,
                customerName: customerObj.customer_name,
                customerEmail: customerObj.customer_email,
                customerMobileNumber: customerObj.customer_mobile_number,
            };

            this.setState({ customer });
            this.handleShowForm(true);
        }
    };

    handleShowForm = (bool) => {
        let showCustomersForm;

        if (bool) showCustomersForm = true;
        else {
            this.resetCustomerForm();
            showCustomersForm = !this.state.showCustomersForm;
        }

        this.setState({ showCustomersForm });
    };

    componentDidMount = () => {
        this.getCustomers();
    };

    render() {
        const {
            customers,
            customer,
            showCustomersForm,
            deleteModalId,
            deleteModalShow,
            deleteModalType,
            deleteModalMessage,
        } = this.state;

        return (
            <>
                <Header active="customers" />

                <div className="container mt-2 mb-2">
                    <CustomersForm
                        customer={customer}
                        show={showCustomersForm}
                        alert={this.props.alert}
                        onInputChange={this.handleInputChange}
                        onShowHideForm={this.showHideForm}
                        onSubmit={this.handleSubmit}
                    />

                    <CustomersTable
                        customers={customers}
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

Customers.propTypes = {
    alert: PropTypes.func,
};

export default Customers;
