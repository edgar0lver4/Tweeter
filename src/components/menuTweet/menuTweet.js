import React from 'react';
import { TrashSolid } from "@graywolfai/react-heroicons";
import './style.css';

class MenuTweet extends React.Component{
    deleteTweet(index){
        this.props.fnDeleteTweet(index);
    }
    render(){
        return(
            <div className='menu'>
                <button className='delete-menu' onClick={() => this.deleteTweet(this.props.indice)}><TrashSolid /> Borrar Tweet</button>
            </div>
        )
    }
}

export default MenuTweet;