import React from 'react';
import './styles.css'
import {SearchSolid} from '@graywolfai/react-heroicons';
import Trend from '../trend/trend.js';
import Trends from  '../trends.js';
import SearchDropDown from '../search-drop-down/searchDropDown.js';

class SidebarCol extends React.Component {
    constructor(){
        super();
        this.state = {
            trending:Trends,
            finding:false,
            searched:''
        }
    }
    findingChange = (e)=>{
        console.log(e.target.value.length);
        if(e.target.value.length > 0){
            this.setState({finding:true,searched:e.target.value});
        }else{
            this.setState({finding:false});
        }
    }
    render(){
        return (
            <div className="t-sidebar-col">
                <div className="searchConsole">
                    <button className="btn-search"><SearchSolid /></button>
                    <input className="search" type='text' placeholder='Buscar en tweeter' onChange={this.findingChange}/>
                </div>    
                {this.state.finding ? <SearchDropDown search={this.state.searched}/> : null }
                <div>
                    <h3>Qué está pasando?</h3>
                {
                    this.state.trending.map((trends) => <Trend title={trends.title} image={trends.image} category={trends.category} noTweets={trends.noTweets}/>)
                }
                </div>
            </div>
        )
    }
}

export default SidebarCol;