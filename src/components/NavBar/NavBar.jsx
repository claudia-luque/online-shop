import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/bookland-logo.png'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const NavBar = () => {
    const itemCount = 3
    const title = "Books"
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">BookLand</a> */}
            <img className="navbar-brand" src={logo} height="100"/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> {/* esto es para Mobile, el NavBar se colapsa */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {/* nav-link le pone padding a los li cuando se muestran horizantlmente */}
                    <li className="nav-item nav-link">Home</li>
                    <li className="nav-item nav-link"><ItemListContainer title={title}/></li>
                    <li className="nav-item nav-link">Accessories</li>
                    <li className="nav-item nav-link"><CartWidget itemCount={itemCount}/></li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default NavBar