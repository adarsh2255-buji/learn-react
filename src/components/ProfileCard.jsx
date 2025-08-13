import React from 'react'

const ProfileCard = ({name, title, avatarURL}) => {
  return (
    <div>
        <img src={avatarURL} alt="" />
        <p>Name : {name}</p>
        <p>Job Title : {title}</p>
        <button>Follow</button>
    </div>
  )
}

export default ProfileCard