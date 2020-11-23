import React from 'react';
import './style.css';

class SearchColViwe extends React.Component{

    render(){
        return(
            <div className='container'>
                <div><img alt="foto perfil" src={this.props.imgprofile} className="profile-imagen"></img></div>
                <div className="text-container">
                    <div>{this.props.userName}</div>
                    <div>@ {this.props.user}</div>
                </div>
            </div>
        )
    }
}

export default SearchColViwe;