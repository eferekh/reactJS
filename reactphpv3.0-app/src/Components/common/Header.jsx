import { Link } from "react-router-dom";

const Header = (props) => {
    const { active } = props;

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        The APP
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className={ active === "users" ? "nav-item active" : "nav-item" }>
                                <Link className="nav-link" to="/users">
                                    Users
                                </Link>
                            </li>
                            <li className={ active === "customers" ? "nav-item active" : "nav-item" }>
                                <Link className="nav-link" to="/customers">
                                    Customers
                                </Link>
                            </li>
                            <li className={ active ==="categories" ? "nav-item active" : "nav-item" }>
                                <Link className="nav-link" to="/categories">
                                    Categories
                                </Link>
                            </li>
                            <li className={ active === "products" ? "nav-item active" : "nav-item"}>
                                <Link className="nav-link" to="/products">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
