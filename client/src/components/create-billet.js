import React,  { Component } from 'react';
import axios from 'axios';

export default class CreateBillet extends Component {

    constructor(props) {
        super(props);

        this.onChangeBilletTitre = this.onChangeBilletTitre.bind(this);
        this.onChangeBilletContent = this.onChangeBilletContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id_user: this._id_user,
            billet_titre: '',
            billet_content: ''

        }
    }

    onChangeBilletTitre(e) {
        this.setState({
            billet_titre: e.target.value
        });
    }

    onChangeBilletContent(e) {
        this.setState({
            billet_content: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Billet Titre: ${this.state.billet_titre}`);
        console.log(`Billet Content: ${this.state.billet_content}`);

        
        const Billet = {
            billet_titre: this.state.billet_titre,
            billet_content: this.state.billet_content,
            id_user: this._id_user,
        };

        axios.post('billets/add', Billet, { validateStatus: false })
            .then(res => console.log(res.data));
           
   
        this.setState({
            billet_titre: '',
            billet_content: ''

        })
    }


    
    render() {


        return (
<div style={{marginTop: 10}}>
                <h3>Créer un Billet</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Titre: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.billet_titre}
                                onChange={this.onChangeBilletTitre}
                                />
                    </div>
                    <div className="form-group">
                        <label>Contenu: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.billet_content}
                                onChange={this.onChangeBilletContent}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Créer un billet" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}