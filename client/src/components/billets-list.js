import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Billet = props => (
    <tr>
        <td>{props.billet.billet_titre}</td>
        <td>{props.billet.billet_content}</td>
        <td>{props.billet.date}</td>
        <td>
            <Link to={"/edit/"+props.billet._id}>Edit</Link>
        </td>
    </tr>
)

export default class BilletsList extends Component {

    constructor(props) {
        super(props);
        this.state = {billets: []};
    }

    componentDidMount() {
        axios.get('billets', { validateStatus: false })
            .then(response => {
                this.setState({ billets: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    billetList() {
        return this.state.billet && this.state.billets.map( function(currentBillet, i){
            return <Billet billet={currentBillet} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Mes Billets</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Contenu</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.billetList() }
                    </tbody>
                </table>
            </div>
        )
    }

}