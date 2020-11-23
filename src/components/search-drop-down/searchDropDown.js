import React from 'react';
import Profile from '../../profiles.js';
import SearchColViwe from '../search-col-view/searchColViwe.js';
import './style.css';

class SearchDropDown extends React.Component{
    constructor(){
        super();
        this.state = {
            perfiles: Profile
        };
    }

    render(){
        return(
        <div className='search-dropdown'>
            {
                this.state.perfiles.filter(profile => profile.profile.toLocaleLowerCase().includes(this.props.search.toLocaleLowerCase()) || profile.userName.toLocaleLowerCase().includes(this.props.search.toLocaleLowerCase()))
                .map((data) => <SearchColViwe imgprofile={data.profileImagen} userName={data.profile} user={data.userName} /> )
            }
        </div>
        )
    }
}

export default SearchDropDown;