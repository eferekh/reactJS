import React, { Component } from 'react';

class UsersForm extends Component {
    state = {
        
    };

    render() { 
        return (
            <form className="mt-2 mb-2">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control form-control-sm" value="" onChange="" name="firstname" id="firstName" />
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control form-control-sm" value="" onChange="" name="lastName" id="lastName" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control form-control-sm" value="" onChange="" name="email" id="email" />
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <div className="form-check mt-36">
                            <input type="checkbox" className="form-check-input" checked="" onChange="" name="isAdmin" id="isAdmin" />
                            <label className="form-check-label" htmlFor="isAdmin">Is Admin</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default UsersForm;