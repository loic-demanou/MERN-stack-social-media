import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed({ username }) {

  const {user} = useContext(AuthContext);
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchPost = async () => {
      const response = username ? await axios.get("/posts/profile/" + username) :
        await axios.get("posts/timeline/" + user._id)
        setPosts(response.data)
          // .then((res) => {
          //   setPosts(res.data)
          // })
          // .catch((err) => console.log(err))
    }
    fetchPost();
    // eslint-disable-next-line
  }, [username, user._id])

  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}

      </div>
    </div>
  )
}
