import './closefriend.css'

export default function CloseFriend({ user }) {
    return (
        <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src={user.profilePicture} alt="User avatar" />
            <span className='SidebarFriendName'>{user.username}</span>
        </li>
    )
}
