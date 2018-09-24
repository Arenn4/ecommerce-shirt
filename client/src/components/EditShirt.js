import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateShirts } from '../redux'
import './styles.css'

class EditShirt extends Component{
    constructor(){
        super()
    this.state = {
        title: "",
        cost: "",
        description: "",
        color: "",
        img: ""
    }
        
}
//data is an array labeled 0-12, must access the correct array number, then its associated ID
    updateItem = e =>{
        e.preventDefault()
        const changeItem = {}
        if(this.state.title.trim().length > 0){
            changeItem.title = this.state.title
        }
        if(this.state.cost.trim().length > 0){
            changeItem.cost = Number(this.state.cost)
        }
        if(this.state.description.trim().length > 0){
            changeItem.description = this.state.description
        }
        if(this.state.color.trim().length > 0){
            changeItem.color = this.state.color
        }
        if(this.state.img.trim().length > 0){
            changeItem.img = this.state.img
        }
        this.props.updateShirts(this.props.items._id, changeItem)
        this.setState(prevState => ({
            title: "",
            cost: "",
            description: "",
            color: "",
            img: ""
            
        }))
        this.props.swapStatus()
    }

    // title: this.state.title,
    // cost: Number(this.state.cost),
    // description: this.state.description,
    // color: this.state.color,
    // img: this.state.img


    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render(){
        
    return (
        <div>
            <div onDoubleClick={this.props.swapStatus} className="row">
                <form onSubmit={this.updateItem} id={this.props.items._id} className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="title" type="text" className="validate" name="title" value={this.state.title} onChange={this.handleChange}/>
                                <label >Title</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="cost" type="number" className="validate" name="cost" value={this.state.cost} onChange={this.handleChange}/>
                                <label >Cost</label>
                            </div>
                        </div>
                    
                        <div className="row">
                        <div className="input-field col s6">
                                <input id="color" type="text" className="validate" name="color" value={this.state.color} onChange={this.handleChange}/>
                                <label >Color</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="img" type="text" className="validate" name="img" value={this.state.img} onChange={this.handleChange}/>
                                <label >Enter Image URL</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <div className="row">
                                    <div className="input-field col s12">
                                    <textarea id="description" className="materialize-textarea" name='description' value={this.state.description} onChange={this.handleChange}></textarea>
                                    <label >Edit Description</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <button className="waves-effect #2e7d32 green darken-3 waves-light btn-small">Button</button>
                </form>
            </div>
        </div>
        );
    }
};

export default connect(state=>state, { updateShirts })(EditShirt);