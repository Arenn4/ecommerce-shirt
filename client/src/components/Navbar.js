import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './styles.css'

class Navbar extends Component{
    constructor(){
        super()
        this.state ={
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
        
    return (
        <div>
            <nav>
                <div className="nav-wrapper #0d47a1 blue darken-4">
                <ul className="main-contain"><Link to="/admin" id="nav-title" className="brand-logo">The Bees Tee's</Link></ul>
                    <ul className=" right hide-on-med-and-down">
                    <li>
                        <form className='search-container'>
                            <div className="search-input input-field">
                                <input className='input-field'id="search" type="search" value={this.props.search} onChange={this.props.updateSearch}required/>
                                <label className="label-icon" ><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </li>
                        <li><a href="/admin"><i className="material-icons right">add_shopping_cart</i>View Your Cart</a></li>
                    </ul>
                    <ul>
                        {this.state.status
                        ?
                           
                            <button onClick={this.changeDisplay} className='hambutt'>
                                <div className='hamMenu'></div>
                                <div className='hamMenu'></div>
                                <div className='hamMenu'></div>
                            </button>
                        
                        :
                            <div className='sideMenu' >
                                <ul onMouseLeave={this.changeDisplay}>
                                <Link className='menuOptions'to="/admin"><span>Home</span></Link>
                                <Link className='menuOptions'to="/contact"><span>Contact Us</span></Link>
                                <form className='search-container'>
                                    <div className="search-input input-field">
                                        <input className='input-field'id="search" type="search" value={this.props.search} onChange={this.props.updateSearch}required/>
                                        <label className="label-icon" ><i className="material-icons">search</i></label>
                                        <i className="material-icons">close</i>
                                    </div>
                                </form>
                                </ul>
                            </div>
                             
                        }
                        </ul>
                </div>
            </nav>
        </div>
        );
    }
};

export default connect(state=>state, null) (Navbar);