import React, { Component } from "react";
import CommentList from './CommentList'
import AddComment from './AddComment'


class CommentArea extends Component {

    state ={
        comments: [] //comments will go here
    }

    componentDidMount = async ()=>{
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,{
                headers:{
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2JhOWNlYWY0ODAwMTVjOTE4NjYiLCJpYXQiOjE2MjMyNjYxMTQsImV4cCI6MTYyNDQ3NTcxNH0.Uua4onk-6A4F965KdAz2q5ZkPaEKLTZFhGZQZ1fSx9c"
                }
            })
            console.log(response)
            let commentsArr = await response.json()
            this.setState({comments:commentsArr})
        } catch (error) {
            console.log(error)
        }
    }

  render() {
     return (
         <div>
             <AddComment asin={this.props.asin}/>
             <CommentList commentsToShow = {this.state.comments}/>
         </div>
     )
  }
}

export default CommentArea;
