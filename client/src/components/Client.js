import React, { Component } from 'react';
import ClientShirtlist from './ClientShirtlist'
import Filters from './Filters';
import Footer from './Footer';
import Navbar from './Navbar';


class Client extends Component{
    constructor(){
        super()
        this.state = {
            search: "",
            
        };
    }

    updateSearch = (e) =>{
        this.setState({search: e.target.value.substr(0, 20)})
    }
    render(){
    return (
        <div className="client-container">
            <div className="one"><Navbar search={this.state.search} updateSearch={this.updateSearch}/></div>
            <div className="three"><Filters /></div>
            <div className="four"><ClientShirtlist search={this.state.search}/></div>
            <div className="five"><Footer /></div>
        </div>
        );
    }
};

export default Client;