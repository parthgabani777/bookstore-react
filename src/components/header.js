import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar bg-dark">
                <div className="nav-title">
                    <h1 className="text-xl">
                        <Link to="homepage" className="btn">
                            BookStore
                        </Link>
                    </h1>
                </div>

                <div className="nav-search">
                    <input
                        type="text"
                        className="search-box text-s"
                        placeholder="Search..."
                    />
                    <button className="btn search-btn">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div className="humburger text-l">
                    <i className="fas fa-bars btn"></i>
                </div>

                <ul className="nav-item-group text-s">
                    <li className="nav-item">
                        <Link to="homepage" className="nav-link btn">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="product" className="nav-link btn">
                            Explore
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="login" className="nav-link btn">
                            Login
                        </Link>
                    </li>
                    <div className="nav-icons">
                        <Link
                            to="wishlist"
                            className="nav-item badge-icon text-m"
                        >
                            <i className="fas fa-heart nav-link btn"></i>
                            <p className="badge badge-top-right badge-text text-xs">
                                10
                            </p>
                        </Link>
                        <Link to="cart" className="nav-item badge-icon text-m">
                            <i className="fas fa-shopping-cart nav-link btn"></i>
                            <p className="badge badge-top-right badge-text text-xs">
                                10
                            </p>
                        </Link>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
