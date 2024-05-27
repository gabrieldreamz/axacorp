import React from 'react'

export default function List({listItem}: {listItem: string[]}) {
  return (
    <ul className='list-disc'>
        {listItem.map((list, id) => {
            return <li key={id} className='m-4 text-primary'>{list}</li>
        })}
    </ul>
  )
}