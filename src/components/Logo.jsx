import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='flex pb-2 justify-start items-center border-b border-gray-500'>
        <Link to="/">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" className='w-12 rounded-full' />            
        </Link>
        <h1 className='text-2xl px-2 first-letter:text-3xl'>Github Profile Users</h1>
    </div>
  )
}

export default Logo