import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import Sidebar from '../sidebar/Sidebar'
import Topbar from '../Topbar'
import './profile.css'

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className='profileRight'>
                    <div className="profileRightTop">
                        <div className='profileCover'>
                            <img className='profileCoverImg' src="assets/post/3.jpeg" alt="Cover" />
                            <img className='profileUserImg' src="assets/person/7.jpeg" alt="Profile" />
                        </div>
                        <div className='profileInfo'>
                            <h4 className='profileInfoName'>Loic Demanou</h4>
                            <span className='profileInfoDesc'>this is the profile desc</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}
