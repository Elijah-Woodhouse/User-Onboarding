import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friend container'>
      <h2>{details.first_name}</h2>
      <h2>{details.last_name}</h2>
      <p>Email: {details.email}</p>
      <p>Name: {details.firstName}</p>
      <p>Role: {details.role}</p>

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Only two of these are true:
          <ul>
            {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default User;