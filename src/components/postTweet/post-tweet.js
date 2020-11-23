import React from 'react';
import './styles.css';

class PostTweet extends React.Component{
    

    handleChange = (e) => {
        this.props.fnModifica(e.target.value);
    }

    render(){
        return (
            <div>
                <div className="t-row t-post-tweet">
                    <div className="t-profile-img">
                        <img src={this.props.profileUrl}  alt="profile" />
                    </div>
                    <div className="tweet-feed">
                        <input placeholder="¿Qué está pasando?" value={this.props.textTwet} onChange={this.handleChange} />
                        <div className="t-post-options">
                            <button onClick={this.props.fnTweetea}>Twittear</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default PostTweet;