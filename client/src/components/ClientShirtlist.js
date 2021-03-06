import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getShirts } from '../redux'
import ClientShirts from './ClientShirts'


class ClientShirtlist extends Component{

    componentDidMount(){
        this.props.getShirts()
    }

    render(){
        let filteredShirts = this.props.shirts.filter(
            (shirt) => {
                return shirt.title.toLowerCase().indexOf(this.props.search) !== -1;
            }
            
        )
    return (
        <div className='shirt-container'>
            { filteredShirts.map(shirt =>
            {
                return <ClientShirts 
                    key={ shirt._id }
                    {...shirt}
                    item={shirt}
                
                />})}
        </div>
        );
    }
};

export default connect(state=>state, { getShirts }) (ClientShirtlist);