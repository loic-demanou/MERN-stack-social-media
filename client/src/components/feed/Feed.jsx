import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed({ username }) {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    const fetchPost = async () => {
      const response = username ? await axios.get("/posts/profile/" + username) :
        await axios.get("posts/timeline/62609cc01a697c336f6a946a")
        setPosts(response.data)
          // .then((res) => {
          //   setPosts(res.data)
          // })
          // .catch((err) => console.log(err))
    }
    fetchPost();
    // eslint-disable-next-line
  }, [username])

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
