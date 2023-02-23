import React from 'react';
import { format } from 'timeago.js';

const Repo = ({repos}) => {
    const languages = {
        "JavaScript":"🟡",
        "PHP":"🟣",
        "Dockerfile": "🟣",
        "HTML":"🟠",
        "Ruby": "🔴",
        "Go": "🟤"?
        "Dart": "⚫",
        "DartGo": "⚫",
        "C++": "🔵",
        "Scala": "🔵",
        "Objective-C":"⚫",
        "Python": "🔴"

    }
  return (
   <>
    {repos.map((r,i) => 
        (
            <div key={i} className="bg-gray-900 p-3 leading-3">
                <div className='flex justify-between items-center'>
                    <a 
                        href={r.html_url}
                        className="text-teal-500 break-words font-semibold hover:no-underline "
                        target="_blank"
                    >
                        {r.full_name}
                        
                    </a> 
                    <span>{format(r.created_at)}</span>
                </div>

                <div className='flex gap-x-5 mt-3'> 
                    <h1 className='text-sm font-semibold'>{ languages[r.language] +' '+ r.language}</h1>
                    <h1 className='text-sm font-semibold'>forks: {r.forks}</h1>
                    <h1 className='text-sm font-semibold'>start {r.stargazers_count}</h1>
                </div>
            </div>
        )
    )}
   </>
  )
}

export default Repo