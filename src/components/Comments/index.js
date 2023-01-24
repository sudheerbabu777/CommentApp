import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comment extends Component {
  state = {
    textInput: '',
    commentInput: '',
    commentList: [],
  }

  onDeleteButton = commentId => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(each => each.id !== commentId),
    })
  }

  onToggleButton = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each.isLike
      }),
    }))
  }

  addCommentBox = event => {
    event.preventDefault()
    const {textInput, commentInput} = this.state
    const initialClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4,
      name: textInput,
      comment: commentInput,
      isLike: false,
      date: new Date(),
      background: initialClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      textInput: '',
      commentInput: '',
    }))
  }

  textInputResult = event => {
    this.setState({textInput: event.target.value})
  }

  textareaInputResult = event => {
    this.setState({commentInput: event.target.value})
  }

  render() {
    const {textInput, commentInput, commentList} = this.state
    console.log(commentList)
    return (
      <div className="app-container">
        <div className="comment-box-container">
          <div className="bg-container">
            <div>
              <h1 className="heading">Comments</h1>
              <form className="from" onSubmit={this.addCommentBox}>
                <p className="comment-box-name">
                  Say something about 4.0 Technologies
                </p>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="text-box"
                  onChange={this.textInputResult}
                  value={textInput}
                />
                <textarea
                  className="textarea-box"
                  placeholder="Your Comment"
                  onChange={this.textareaInputResult}
                  value={commentInput}
                />
                <div>
                  <button className="button" type="submit">
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-image"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="bottom-container">
            <p className="comment-container">
              <span className="count-container">{commentList.length}</span>
              Comments
            </p>
            <ul className="comment-list">
              {commentList.map(each => (
                <CommentItem
                  commentDetails={each}
                  key={each.id}
                  onDeleteButton={this.onDeleteButton}
                  onToggleButton={this.onToggleButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment
