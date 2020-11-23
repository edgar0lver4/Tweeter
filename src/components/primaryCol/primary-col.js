import React from 'react';
import PostTweet from '../postTweet/post-tweet';
import Feed from '../feed';
import './styles.css'
import {feed} from '../../source';

class PrimaryCol extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: feed,
            textTweet:''
        }
    }
    addTweet = ()=>{
        let newFeed = JSON.parse(JSON.stringify(this.state.tweets));
        const newTweet = {
            profile: "Andrei Olvera",
            username: "@AndreiOlvera",
            profileUrl: 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg',
            content:this.state.textTweet,
            interaction: {
                comments: 0,
                retweets: 0,
                likes: 0
            },
            verified: false,
            blocked: false,
            viweMenu:false,
            like:false,
            retweet:false
        }
        newFeed.push(newTweet);
        this.setState({tweets:newFeed, newT:null, textTweet: ''});
    }
    modifiText = (e)=>{
        console.log(e)
        this.setState({textTweet:e});
    }
    deleteTweet = (index) =>{
        this.state.tweets.splice(index,1);
        this.setState({tweets:this.state.tweets});
    }

    viewMenu = (index)=>{
        let newArray = JSON.parse(JSON.stringify(this.state.tweets));
        for(let i = 0; i < newArray.length; i++){
            parseInt(i) !== parseInt(index) ? newArray[i].viweMenu = false : newArray[i].viweMenu = true;
        }
        this.setState({tweets:newArray});
    }

    daLike = (index) =>{
        let newArray = JSON.parse(JSON.stringify(this.state.tweets));
        for(let i = 0; i < newArray.length; i++){
            if(parseInt(i) === parseInt(index) && !newArray[i].like){
                newArray[i].like = true;
                newArray[i].interaction.likes += 1;
            }else if(parseInt(i) === parseInt(index) && newArray[i].like){
                newArray[i].like = false;
                newArray[i].interaction.likes -= 1;
            }
        }
        this.setState({tweets:newArray});
    }

    daRetweet = (index)=>{
        let newArray = JSON.parse(JSON.stringify(this.state.tweets));
        for(let i = 0; i < newArray.length; i++){
            if(parseInt(i) === parseInt(index) && !newArray[i].retweet){
                newArray[i].retweet = true;
                newArray[i].interaction.retweets += 1;
            }else if(parseInt(i) === parseInt(index) && newArray[i].retweet){
                newArray[i].retweet = false;
                newArray[i].interaction.retweets -= 1;
            }
        }
        this.setState({tweets:newArray});
    }

    render(){
        return (
            <div className="t-col-container">
                <h3>Inicio</h3>
                <PostTweet profileUrl={this.props.profileUrl} fnTweetea={this.addTweet.bind(this)} fnModifica={this.modifiText.bind(this)} textTwet={this.state.textTweet}/>
                <Feed tweets={this.state.tweets} fnViewMenu={this.viewMenu.bind(this)} fnDeleteTweet={this.deleteTweet.bind(this)} fnDaLike={this.daLike.bind(this)} fnDaRetweet={this.daRetweet.bind(this)}/>
            </div>
        )
    }
}

export default PrimaryCol;