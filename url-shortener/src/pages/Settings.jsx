import React from 'react'
import SidebarMain from '../components/sidebar/SidebarMain'
import ProfilePage from '../components/profileupdate/Setting'

const Settings = () => {
  return (
    <div className='flex'>
        <SidebarMain/>
        <div>
        <ProfilePage/>
        </div>
        
    </div>
  )
}

export default Settings