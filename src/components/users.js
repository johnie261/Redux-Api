import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {

const { userList } = useSelector((store) => store.users);

  return (
    <section>
        <div>
            <h2>userList</h2>
        </div>
        <article>
            {userList.map((user)=> (
                <div key={user.name.title}>
                    <h2>`${user.name.title} ${user.name.first} ${user.name.last}`</h2>
                </div>
            ))}
        </article>
    </section>
  )
}

export default Users