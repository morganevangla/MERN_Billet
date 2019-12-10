import React, {Component} from 'react'
import {register} from './UserFunction'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            login: '',
            email: '',
            password: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const newUser ={
            login: this.state.login,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res =>{
            if(res){
                this.props.history.push(`/login`)
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Veuillez vous connecter</h1>
                            <div className="form-group">
                                <label htmlFor="login">Login </label>
                                <input type="text" className="form-control" name="login" placeholder="Votre Login" 
                                value={this.state.login}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email </label>
                                <input type="email" className="form-control" name="email" placeholder="votremail@monmail.fr" 
                                value={this.state.email}
                                onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe </label>
                                <input type="password" className="form-control" name="password" placeholder="Votre mot de passe" 
                                value={this.state.password}
                                onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                S'enregistrer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register