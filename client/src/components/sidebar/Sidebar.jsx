import { Bookmark, EventAvailable, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from '@mui/icons-material'
import './sidebar.css'
import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <EventAvailable className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Cousers</span>
          </li>
        </ul>
        <button className="sidebarButton">Voir plus</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}

        </ul>
      </div>
    </div>
  )
}
