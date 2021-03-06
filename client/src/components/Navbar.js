import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render(){
        const loginRegLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Connexion
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        S'inscrire
                    </Link>
                </li>
            </ul>
        )

        const userLink =(
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Mon compte
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/createbillet" className="nav-link">
                        créer un billet
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/billetlist" className="nav-link">
                        Billets
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/"onClick={this.logOut.bind(this)} className="nav-link">
                        Déconnexion
                    </Link>
                </li>
            </ul>
        )

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbar1" 
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Accueil
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)