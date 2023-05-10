import React from 'react'

function User({user}) {
  return (
    <>
        <div>{user.name}</div>
        <div>{user.age}</div>
        <div>{user.phone.primary}</div>
    </>
  )
}

export default User