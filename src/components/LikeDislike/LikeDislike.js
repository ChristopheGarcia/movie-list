import React, { Component } from 'react';

import './LikeDislike.css';


 class LikeDislike extends Component {

    constructor(props){
        super(props);
        this.handleClickLike = this.handleClickLike.bind(this)
        this.handleClickDislike = this.handleClickDislike.bind(this)
        this.state = {
            liked : false,
            disliked : false,
            selected : false,
            counterLikes : props.likes,
            counterDislikes: props.dislikes,
            total : props.likes + props.dislikes,
        };
    }
 
/********************Action when we click on Like button***************************/

    handleClickLike = (e) => {
        console.log(e.target.value, this.state.counterLikes)
        this.setState({
            selected : !this.state.selected
        })
        if(this.state.selected) {
            this.setState({
                liked : true,
                disliked : false,
                counterLikes : this.state.counterLikes - 1,
                total : this.state.counterLikes + this.state.counterDislikes - 1
            })    
        }
        else {
            this.setState({
            liked : false,
            disliked : false,
            counterLikes : this.state.counterLikes +1,
            total : this.state.counterLikes + this.state.counterDislikes +1
            });
        }
    }

/********************Action when we click on Dislike button***************************/

    handleClickDislike = (e) => {
        console.log(e.target.value, this.state.counterLikes)
        this.setState({
            selected : !this.state.selected
        })
        if(this.state.selected) {
            this.setState({
                liked : false,
                disliked : true,
                counterDislikes : this.state.counterDislikes - 1,
                total : this.state.counterLikes + this.state.counterDislikes - 1
            })    
        }
        else {
            this.setState({
            liked : false,
            disliked : false,
            counterDislikes : this.state.counterDislikes + 1,
            total : this.state.counterLikes + this.state.counterDislikes + 1
            });
        }
    }
    
/************************************************************************************/
	     
 	render() {

		return (

			<div className="likeDislikeContainer">

				<form>

					<div className="likeDislike">
                        
                        <span>{this.state.counterLikes}</span>
                        <button
                        type="button"
                        id={this.props.id}
                        onClick={this.handleClickLike}
                        value="likes"
                        >Like</button>
                        
					</div>

                    <progress max={this.state.total} value={this.state.counterLikes}/>

					<div className="likeDislike">

                        <span>{this.state.counterDislikes}</span>
                        <button
                        type="button"
                        id={this.props.id}
                        onClick={this.handleClickDislike}
                        value="dislike"
                        >Dislike</button>

					</div>

				</form>
              
			</div>
 		);
	}
}
 export default LikeDislike;