import React from 'react'
import useLocalStorage from './iseLocalStorage'

const UsernameSaver = () => {
    const [username, setUsername] = useLocalStorage("username", "");

  return (
    <div>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <p>Username : {username}</p>
    </div>
  )
}

export default UsernameSaver