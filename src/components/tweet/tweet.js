import React from 'react';
import './styles.css';
import MenuTweet from '../menuTweet/menuTweet.js';
import {
    ChatSolid,
    HeartSolid,
    RefreshOutline,
    DotsCircleHorizontalOutline
} from "@graywolfai/react-heroicons";
class Tweet extends React.Component{
    constructor() {
        super(); //Es necesario colocar super para poder crear mi estado para este componente
        this.state = {
            iconArray: [ 
              < ChatSolid />,
              < RefreshOutline />, 
              < HeartSolid />,
              <DotsCircleHorizontalOutline />
            ]
        }
    }
    divide = (num)=>{
        return(num/1000 > 1 ? (num/1000).toString()+' mil' : num);
    }
    deleteTweet = (index)=>{
        this.props.fnDeleteTweet(index);
    }
    daLike = (index) => {
        this.props.fnDaLike(index);
    }
    daRetweet = (index)=>{
        this.props.fnDaRetweet(index);
    }
    render(){
        return (
            <div className="tweet-container">
                <div className="row">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" /> 
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                <div className="c3">{ this.props.viweMenu === false ? 
                                        <button onClick={() => this.props.fnViewMenu(this.props.index) } className='btn-view'><DotsCircleHorizontalOutline /></button> : 
                                        <MenuTweet indice={this.props.index} fnDeleteTweet={this.deleteTweet.bind(this)} /> 
                                    }</div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row space">
                    <span>
                        <button className="btn-property">
                            < ChatSolid />
                            <p>{this.divide(this.props.comments)}</p>
                        </button>
                    </span>
                    <span>
                        <button className={this.props.retweeted ? "btn-property btn-clicked" : "btn-property"} onClick={()=>this.daRetweet(this.props.index)}>
                            < RefreshOutline className={this.props.retweeted ? "btn-property btn-clicked btn-icon" : "btn-property btn-icon"}/>
                            <p>{this.divide(this.props.retweets)}</p>
                        </button>
                    </span>
                    <span>
                        <button className={ this.props.liked ? "btn-property btn-clicked" : "btn-property" } onClick={()=>this.daLike(this.props.index)}>
                            < HeartSolid  className={ this.props.liked ? "btn-property btn-clicked btn-icon" : "btn-property btn-icon"}/>
                            <p>{this.divide(this.props.likes)}</p>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Tweet;

// https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg
//@TwitterSafety
//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim sodales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum. Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo sem.