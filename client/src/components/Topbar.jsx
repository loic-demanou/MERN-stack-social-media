import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css';


export default function Topbar() {

    return(
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <Link to={'/'} style={{ textDecoration:'none' }}>
                    <span className='logo'>LoicHub</span>
                </Link>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon' />
                    <input type='search' className='searchInput' placeholder='Rechercher un texte, video ou un ami' />
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarLinks'>
                    <span className='topbarLink'>Accueil</span>
                    <span className='topbarLink'>File d'actualité</span>
                </div>
                <div className='topbarIcons'>
                    <div className='topbarIconItem'>
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className='topbarIconItem'>
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="pernimage" className="topbarImg" />
            </div>
        </div>
    )
}
