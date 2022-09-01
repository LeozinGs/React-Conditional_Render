import React, { useState } from 'react'

const UserDetails = () => {

    // Array de usuarios
    const [userDetails] = useState ([
        {id: 1, name: "Leonardo", age: 24, job: "Programmer"},
        {id: 2, name: "Mizu", age: 29, job: "Programmer"},
        {id: 3, name: "Breno", age: 14, job: "Don't have a job"},
        {id: 4, name: "Mikael", age: 24, job: "Telemarketing Attendant"},
        {id: 5, name: "Samuca", age: 14, job: "Don't have a job"},
        {id: 6, name: "Rurushu", age: 27, job: "Telemarketing Attendant"}
    ])

  return (
    <div>
        <h1>Detalhes dos usuários</h1>
        <ul>
          {/* Renderização de lista */}
          {userDetails.map((user) => (
            <li key={user.id}>
              Name: {user.name}  Age: {user.age}  Job: {user.job}

              {/* Renderização condicional para saber se pode tirar habilitação */}
               {user.age >= 18 ? (
                <h5>Pode Tirar Habilitação</h5>
              ) : (
                <h5>Não pode tirar habilitação</h5>
              )}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default UserDetails