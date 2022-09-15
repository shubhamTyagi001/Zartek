import React, {useState, useEffect } from 'react'
import Posts from './Posts';
import Pagination from './Pagination';
function User() {
     const [posts, setPosts] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage] = useState(2);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            return response.json();
        }).then((data)=>{
            // console.log(data);
            setPosts(data);
          })
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
    <Posts posts={currentPosts} />
    <Pagination
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
    />
  </div>
  )
}

export default User