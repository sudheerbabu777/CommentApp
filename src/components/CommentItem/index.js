// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteButton, onToggleButton} = props
  const {id, name, comment, date, background, isLike} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const postTime = formatDistanceToNow(date)
  const imageUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const imageStyle = isLike ? 'like-button active' : 'like-button'

  const likeButton = () => {
    onToggleButton(id)
  }

  const deleteButton = () => {
    onDeleteButton(id)
  }

  return (
    <li className="container-list">
      <div className="comment-item">
        <div className={`container ${background}`}>
          <p className="initial-container">{initial}</p>
        </div>
        <div className="comment-name-box">
          <div className="date-box">
            <p className="comment-name">{name}</p>
            <p className="date">{postTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <button className={imageStyle} type="button" onClick={likeButton}>
          <img src={imageUrl} alt="like" className="like-image" />
          Like
        </button>
        <button
          className="delete-button"
          type="button"
          onClick={deleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
