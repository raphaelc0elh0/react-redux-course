import React from 'react'

const List = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja =>
    <div key={ninja.id} className="ninja-card">
      <p>Id: {ninja.id}</p>
      <p>Name: {ninja.name}</p>
      <p>Age: {ninja.age}</p>
      <p>Belt: {ninja.belt}</p>
      <button type="button" onClick={() => deleteNinja(ninja.id)}>Delete</button>
    </div>
  )
  return (
    <div>
      {ninjaList}
    </div>
  )
}

export default List;