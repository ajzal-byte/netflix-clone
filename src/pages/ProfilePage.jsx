import React from 'react'
import './css/ProfilePage.css'
import { Nav, Plans } from '../components'
import profile from '../assets/profile.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

const ProfilePage = () => {
  const user = useSelector(selectUser)
  return (
    <div className='profilePage'>
      <Nav />
      <div className="profilePage__body">
        <h1>Edit Profile</h1>
        <div className="profilePage__info">
          <img src={profile} alt="profile-icon" />
          <div className="profilePage__details">
            <h2>{user.email}</h2>
            <div className="profilePage__plans">
              <h3>Plans</h3>
              <Plans />
              <button onClick={() => auth.signOut()} className='profilePage_signOut'>Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage