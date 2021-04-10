import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import CustomersTable from "./Customers/CustomersTable";
import Header from "./common/Header";
import Footer from "./common/Footer";

class Customers extends Component {
    state = {
        customers: [],
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

    componentDidMount = () => {
        this.getCustomers();
    }

    render() {
        return (
            <>
                <Header active="customers" />

                <div className="container mt-2 mb-2">
                    <CustomersTable customers={this.state.customers} />
                </div>

                <Footer />
            </>
        );
    }
}

Customers.propTypes = {
    alert: PropTypes.func,
};

export default Customers;
