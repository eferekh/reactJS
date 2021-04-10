import React, { Component } from "react";

class UserForm extends Component {
    // ## ## ## ## ## //
    getButtonText = () => {
        return this.props.userFormShowHideStatus === "none"
            ? "Add User"
            : "Close Form";
    };

    // ## ## ## ## ## //
    userFormSubmitted = (e) => {
        e.preventDefault();

        if (this.props.userData.userFormName === "") {
            this.props.alert("Name Is Required.");
            return;
        }

        if (this.props.userData.userFormEmail === "") {
            this.props.alert("Email Is Required.");
            return;
        }

        if (
            this.props.userData.userFormRole === -1 ||
            this.props.userData.userFormRole === "-1"
        ) {
            this.props.alert("Role Is Required");
            return;
        }

        this.props.submitUserForm();
    };

    render() {
        let userFormStyle = {
            display: this.props.userFormShowHideStatus,
        };

        const { userData } = this.props;

        return (
            <div className="userFormContainer">
                <div className="userFormShowHideBtnContainer">
                    <button
                        className="btn btn-sm btn-secondary"
                        onClick={this.props.changeUserFormShowHideStatus}
                    >
                        {this.getButtonText()}
                    </button>
                </div>

                <form
                    id="userForm"
                    style={userFormStyle}
                    onSubmit={this.userFormSubmitted}
                >
                    <input
                        type="hidden"
                        id="userFormUserid"
                        value={userData.userFormUserid}
                    />

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="userFormName">Name</label>
                                <input
                                    type="text"
                                    id="userFormName"
                                    className="form-control"
                                    value={userData.userFormName}
                                    onChange={(e) =>
                                        this.props.setUserFormName(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="userFormEmail">Email</label>
                                <input
                                    type="text"
                                    id="userFormEmail"
                                    className="form-control"
                                    value={userData.userFormEmail}
                                    onChange={(e) =>
                                        this.props.setUserFormEmail(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="userFormCity">City</label>
                                <input
                                    type="text"
                                    id="userFormCity"
                                    className="form-control"
                                    value={userData.userFormCity}
                                    onChange={(e) =>
                                        this.props.setUserFormCity(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="userFormPhonenumber">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="userFormPhonenumber"
                                    className="form-control"
                                    value={userData.userFormPhonenumber}
                                    onChange={(e) =>
                                        this.props.setUserFormPhonenumber(
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="form-group">
                                <label htmlFor="userFormRole">Role</label>
                                <select
                                    id="userFormRole"
                                    className="form-control"
                                    value={userData.userFormRole}
                                    onChange={(e) =>
                                        this.props.setUserFormRole(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="-1">-- Select --</option>
                                    <option value="1">Administrator</option>
                                    <option value="2">Agent</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg btn-block"
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

export default UserForm;
