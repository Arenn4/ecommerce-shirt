import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeShirts } from '../redux'
import EditShirt from './EditShirt'
import './styles.css'

class Shirts extends Component {
constructor(){
    super()
    this.state = {
        status: true
    }
}

changeDisplay = e =>{
    this.setState(prevState =>{
      return{
      status: !prevState.status
      }
    })
  }

  handleDelete = e =>{
    // e.preventDefault()
    this.props.removeShirts(this.props._id)
  }
  

    render(){
        // console.log(this.props)
    return (
        <div>
            <form className='card-container'>
              <div className="row">
                <div className="col s12 m6">
                  <div className="card">
                    <div className="card-image">
                      <img className='shirt-img'src={this.props.img} alt=""/>
                      {/* <span class="card-title">{this.props.title}</span> */}
                      <button onClick={this.handleDelete} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">close</i>
                      </button>
                      {this.state.status
                      ?
                        <a onClick={this.changeDisplay} className="btn-floating waves-effect left halfway-fab waves-light green"><i className="material-icons">add</i>
                        </a>
                      :
                        <EditShirt items={{...this.props}} swapStatus={this.changeDisplay}/>
                      }
                    </div>
                    <div className="card-content z-depth-2">
                    <span className="card-title">{this.props.title}</span>
                      <p>Cost: ${this.props.cost}</p>
                      <p>Description: {this.props.description}</p>
                      <p>Color: {this.props.color}</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </div>
        );
    }
};

export default connect(state=>state, { removeShirts })(Shirts);