import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles.css'

class ClientShirts extends Component {
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
                    </div>
                    <div className="card-content z-depth-2">
                    <span className="card-title">{this.props.title}</span>
                      <p>Cost: ${this.props.cost}</p>
                      <p>Description: {this.props.description}</p>
                      <p>Color: {this.props.color}</p>
                      <button className="btn waves-effect waves-light #0d47a1 blue darken-4" type="submit" name="action">Add to Cart
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
        </div>
        );
    }
};

export default connect(state=>state, null )(ClientShirts);