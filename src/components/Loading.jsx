import React from 'react'

const Loading = () => {
    return (
        <div className='h-96 flex justify-center items-center flex-col'>
            <span className='border-4 p-5 rounded-full border-b-transparent border-teal-400 animate-spin'>
                
            </span>
            <span className='text-xl my-2'>chargement en cours ...</span>
        </div>
    );
}

export default Loading