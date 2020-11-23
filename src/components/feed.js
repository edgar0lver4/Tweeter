import React from "react";
import Tweet from "./tweet/tweet";

class Feed extends React.Component {
    
    viewMenu(index){
        this.props.fnViewMenu(index);
    }

    deleteTweet(index){
        this.props.fnDeleteTweet(index);
    }
    daLike(index){
        this.props.fnDaLike(index);
    }
    daRetweet(index){
        this.props.fnDaRetweet(index);
    }
    render() {
        /*console.log(this.props.tweets);*/
        return (
            <div>
                {
                    this.props.tweets.map( (tweet, index) => {
                        return (
                            <Tweet
                                key={index.toString()}
                                index={index.toString()}
                                profile={tweet.profile}
                                profileUrl={tweet.profileUrl}
                                username={tweet.username}
                                content={tweet.content}
                                comments={tweet.interaction.comments}
                                retweets={tweet.interaction.retweets}
                                likes={tweet.interaction.likes}
                                liked={tweet.like}
                                retweeted={tweet.retweet}
                                viweMenu ={tweet.viweMenu}
                                fnViewMenu={this.viewMenu.bind(this)}
                                fnDeleteTweet={this.deleteTweet.bind(this)}
                                fnDaLike={this.daLike.bind(this)}
                                fnDaRetweet={this.daRetweet.bind(this)}
                            />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default Feed;