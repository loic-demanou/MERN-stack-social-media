import { MoreVert } from '@mui/icons-material'
import './post.css'
// import { Users } from '../../dummyData';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
// import { format } from 'timeago.js';

export default function Post({ post }) {

  const [like, setLike] = useState(post.likes.length);
  const [user, setUser] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const {user:currentUser} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id))
  }, [currentUser._id, post.likes])
  const handleLike = () => {
    try {
      axios.put(`/posts/${post._id}/like`, {userId:currentUser._id})
    } catch (err) {
      
    }
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  const fetchUser = async () => {
    await axios.get(`/users?userId=${post.userId}`)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, [])

  return (
    <div className='post'>
      <div className="postWrapper"> 
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
            <img src={user.profilePicture ? PF + user.profilePicture : PF + 'person/noAvatar.png'}
              alt="Avatar" className='postProfileImg' style={{ cursor:"pointer" }} />
              </Link>
            <span className='postUsername'>
              {user.username}
            </span>
            {/* <span className='postDate'>{ format(post.createdAt)}</span> */}
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className='postImg' src={PF + post.img } alt="post content" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src={`${PF}like.png`} onClick={handleLike} alt="Like" />
            <img className='likeIcon' src={`${PF}heart.png`} onClick={handleLike} alt="Like" />
            <span className='postLikeCounter'>{like} personnes aiment ça</span>
          </div>
          <div className="postBottomRight">
            <span className='postCommentText'>{post.comment} commentaires</span>
          </div>
        </div>
      </div>
    </div>
  )
}
