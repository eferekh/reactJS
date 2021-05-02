import React, { Component } from "react";

class UsersForm extends Component {
    state = {};

    createFormClass = () => {
        return this.props.show ? "mt-2 mb-2" : "mt-2 mb-2 displayNone";
    };

    render() {
        const { show, user, onChangeHandler, onChangeHandlerCheckbox, onToggle } = this.props;

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

                <form className={this.createFormClass()}>
                    <input
                        type="hidden"
                        name="userId"
                        id="userId"
                        value={user.userId}
                    />

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={user.firstName}
                                    onChange={onChangeHandler}
                                    name="firstName"
                                    id="firstName"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                value={user.lastName}
                                onChange={onChangeHandler}
                                name="lastName"
                                id="lastName"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={user.email}
                                    onChange={onChangeHandler}
                                    name="email"
                                    id="email"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className="form-check mt-36">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={user.isAdmin}
                                    onChange={onChangeHandlerCheckbox}
                                    name="isAdmin"
                                    id="isAdmin"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAdmin"
                                >
                                    Is Admin
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default UsersForm;
