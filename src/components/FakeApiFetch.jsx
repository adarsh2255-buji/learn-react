import React, { useEffect, useState } from 'react'

const FakeApiFetch = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchUser = () => {
        setLoading(true)
            setTimeout(() => {
            const fakeapi = ['adarsh', 'arun', 'aleena', 'arun']
            setUsers(fakeapi)
            setLoading(false)
        }, 2000);
    }

    useEffect(() => {
        fetchUser()
    }, [])
  return (
    <div>
        <h1>Users list</h1>
        <button onClick={fetchUser}>
            {loading? "fetching" : "refresh"}
        </button>
        {loading ? (
            <>
            <p>Loading...</p>
            </>
        ): (
            <>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
            </>
        )}
    </div>
  )
}

export default FakeApiFetch