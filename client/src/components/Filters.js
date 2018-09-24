import React, { Component } from 'react';
import "./styles.css"
import { connect } from 'react-redux';
import { getQueriedData } from '../redux'

class Filters extends Component{
constructor(){
    super()
    this.state = {
        status: true,
        queries: []
    }
}

    toggleOpen = e =>{
        this.setState(prevState =>{
        return{
        status: !prevState.status
        }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.getQueriedData(this.state.queries)
    }

    handleValue = (e) => {
        let { checked, value } = e.target;
        if(checked && !this.state.queries.includes(value)){
            this.setState(prevState => ({
                queries: [...prevState.queries, value]
            }))
        }else if(!checked && this.state.queries.includes(value)){
            this.setState(prevState => ({
                queries: prevState.queries.filter(query => query !== value)
            }))
        }
    }


    render(){

        const styles = {
            container: {
                height: 350,
                transform: this.state.status ? 'translateY(-450px)' : 'translateY(0px)',
                transition: '.5s ease-out',
                
            }
        }

    return (
        <div className="filter-container z-depth-4">
            <div className="checkbox-container">
                <form onSubmit={this.handleSubmit} action="#">
                <div onClick={this.toggleOpen} className="collapsible-header #0d47a1 blue darken-4"><i className="material-icons">arrow_downward</i>Filter Shirts</div>
                    <div className="check-contain z-depth-2" style={styles.container}>
                        <ul>
                            <p>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=red'/><span>Red</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=blue'/><span>Blue</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=green'/><span>Green</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=yellow'/><span>Yellow</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=purple'/><span>Purple</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=white'/><span>White</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=black'/><span>Black</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=grey'/><span>Grey</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=orange'/><span>Orange</span></label></li>
                                <li><label><input type="checkbox" onChange={this.handleValue} value='color=pink'/><span>Pink</span></label></li>
                                <button className="btn waves-effect waves-light #0d47a1 blue darken-4" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </p>
                        </ul>
                    </div>
                    
                </form>
            </div>    
        </div>
        );
    }
};

export default connect(state=>state, { getQueriedData }) (Filters);

