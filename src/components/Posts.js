import React from 'react'

function Posts({posts}) {
  return (
    <ul className='list-group mb-4'>
    {posts.map(post => (
      <li key={post.id} className='list-group-item'>
        {post.name}
      </li>
    ))}
  </ul>
  )
}

export default Posts