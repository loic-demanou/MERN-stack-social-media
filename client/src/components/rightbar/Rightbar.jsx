import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="birthday" />
          <span className='birthdayText'><b>John Doe</b> et <b>4 autres amis</b> fête leurs anniversaires aujourd'hui</span>
        </div>
        <img className='rightbarAd' src="/assets/ad.png" alt="ad" />
        <h4 className='rightbarTitle'>Amis en ligne</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>Informations de l'utilisateur</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ville : </span>
            <span className="rightbarInfoValue">Abidjan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Provenance : </span>
            <span className="rightbarInfoValue">Douala</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relation : </span>
            <span className="rightbarInfoValue">Célibataire</span>
          </div>
        </div>

        <h4 className='rightbarTitle'>Mes amis</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img src="assets/person/1.jpeg" alt="My friends" className='righbarFollowingImg' />
            <span className='rightbarFollowingName'>Mike Lechevet</span>
          </div>
          <div className='rightbarFollowing'>
            <img src="assets/person/2.jpeg" alt="My friends" className='righbarFollowingImg' />
            <span className='rightbarFollowingName'>Mike Lechevet</span>
          </div>
          <div className='rightbarFollowing'>
            <img src="assets/person/3.jpeg" alt="My friends" className='righbarFollowingImg' />
            <span className='rightbarFollowingName'>Mike Lechevet</span>
          </div>
          <div className='rightbarFollowing'>
            <img src="assets/person/4.jpeg" alt="My friends" className='righbarFollowingImg' />
            <span className='rightbarFollowingName'>Mike Lechevet</span>
          </div>
          <div className='rightbarFollowing'>
            <img src="assets/person/5.jpeg" alt="My friends" className='righbarFollowingImg' />
            <span className='rightbarFollowingName'>Mike Lechevet</span>
          </div>
          <div className='rightbarFollowing'>
            <img src="assets/person/6.jpeg" alt="My friends" className='righbarFollowingImg' />
            <span className='rightbarFollowingName'>Mike Lechevet</span>
          </div>
        </div>

      </>
    )
  }


  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
