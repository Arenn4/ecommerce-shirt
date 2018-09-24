import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShirt } from '../redux';
import './styles.css';


class AdminInputs extends Component{
    constructor(){
        super()
    this.state = {
        title: "",
        cost: "",
        description: "",
        color: "",
        image: ""
    }
        
}

    addItem = (e) =>{
        e.preventDefault()
        const newShirt = {
            title: this.state.title,
            cost: Number(this.state.cost),
            description: this.state.description,
            color: this.state.color,
            img: this.state.image
        }
        this.props.addShirt(newShirt)
        this.setState(prevState =>({
            title: "",
            cost: "",
            description: "",
            color: "",
            image: ""
        }))
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }



    render(){
    return (
        <div className="admin-inputs z-depth-2">
            <div className="inputs-title flow-text">Add New Items:</div>
            
            <form onSubmit={this.addItem} className="new-item">
                <div className="admin-input-contain row">
                    <div className="input-field col s3">
                        <input  id="title" type="text" className="validate" name="title" value={this.state.title} onChange={this.handleChange} required/>
                        <label >Title</label>
                    </div>
                    <div className="input-field col s3">
                        <input id="color" type="text" className="validate" name="color" value={this.state.color} onChange={this.handleChange} required/>
                        <label >Color</label>
                    </div>
                    <div className="input-field col s3">
                        <input id="image" type="text" className="validate" name="image" value={this.state.image} onChange={this.handleChange} required/>
                        <label >Image</label>
                    </div>
                    <div className="input-field col s3">
                        <input id="cost" type="text" className="validate" name="cost" value={this.state.cost} onChange={this.handleChange} required/>
                        <label >Cost</label>
                    </div>
                    <div className="input-field col s3">
                        <input id="description" type="text" className="validate" name="description" value={this.state.description} onChange={this.handleChange} required/>
                        <label >Description</label>
                    </div>
                </div>
                <button className="admin-btn waves-effect  #2e7d32 green darken-3 waves-light btn-large">button</button>
            </form>
        </div>
        );
    }
};

export default connect(state=>state, { addShirt }) (AdminInputs);