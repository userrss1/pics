import React from 'react'

const View = ({id}) => {
  return (
    <>
        {id.map(i => (
            <tr key={i.name}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
            </tr>
        ))}
    </>
  )
}

export default View