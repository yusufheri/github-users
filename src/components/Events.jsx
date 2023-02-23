import React from 'react'
import { format } from 'timeago.js';

const Events = ({events}) => {
  return (
    <>
        {events.length == 0 && (
            <h1 className='text-lg text-center text-teal-500 '>No Events found</h1>
        )}
        {events.map((e,i) => 
            (
                <div key={i}>
                    <img src={e.actor?.avatar_url} className='w-16 rounded-full' alt="" />
                    <h1 className='break-words'>
                        {e.actor?.login} {e?.type}
                        <br/>
                        {e?.repo?.name}
                        <br/>
                        <span className='text-sm'>{format(e?.created_at)}</span>
                    </h1>
                </div>
            )
        )}
    </>
  )
}

export default Events