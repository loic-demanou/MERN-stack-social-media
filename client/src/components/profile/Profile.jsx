import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../Topbar'
import './profile.css'

export default function Profile() {

    const username = useParams().username
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            await axios.get(`/users?username=${username}`)
                .then((res) => {
                    setUser(res.data)
                })
                .catch((err) => console.log(err))
        }
        fetchUser();
    }, [username])



    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className='profileRight'>
                    <div className="profileRightTop">
                        <div className='profileCover'>
                            <img className='profileCoverImg' src={user.coverPicture || PF + 'person/noCover.png' } alt="Cover" />
                            <img className='profileUserImg' src={user.profilePicture || PF + 'person/noAvatar.png'} alt="Profile" />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className='profileInfoDesc'>{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
