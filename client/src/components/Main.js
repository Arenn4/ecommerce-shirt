import React, { Component } from 'react';
import Shirtlist from './Shirtlist'
import AdminInputs from './AdminInputs';
import Filters from './Filters';
import Footer from './Footer';
import Navbar from './Navbar'

class Main extends Component{
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
        <div className="app-container">
            <div className="one"><Navbar search={this.state.search} updateSearch={this.updateSearch}/></div>
            <div className="two"><AdminInputs /></div>
            <div className="three"><Filters /></div>
            <div className="four"><Shirtlist search={this.state.search}/></div>
            <div className="five"><Footer /></div>
        </div>
        );
    }
};

export default (Main);