import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import 'react-lazy-load-image-component/src/effects/blur.css';

const CardUser = ({user}) => {
  return (
        <Card className="lg:w-[20%] sm:w-[30%] xs:w-[45%]  w-[90%] h-65 ">
            <CardHeader floated={false} className="h-[70%]">
                <div className='group relative shadow-card h-full hover:shadow-cardhover card'>

                    <LazyLoadImage
                        src={user?.avatar_url}
                        alt={`Profile for ${user.login}`}
                        className="h-full w-full object-cover"
                        effect="blur"
                        placeholderSrc={`placeholder.jpeg`} />
                    <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] px-2 m-1 rounded-md'>
                        <div className='flex justify-between items-center'>
                            <p className='text-white text-md overflow-y-auto prompt'>
                                {user?.login}
                            </p>
                            <a 
                                href={user?.html_url}
                                target="_blank"
                                className=' rounded cursor-pointer'>
                                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" className='w-10 rounded-full p-1' />
                            </a>
                        </div>

                        {
                            user?.name? 
                            (
                                <div className='mt-5 flex justify-between items-center gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-7 h-7 rounded-full object-cover bg-teal-700 flex justify-center items-center text-white text-xs font-bold'>
                                            { user.name[0] }
                                        </div>
                                        <p className='text-white text-sm'>{user.name}</p>
                                    </div>                            
                                </div>
                            )
                            : <></>
                        }
                        
                    </div>   

                </div>
                                         
            </CardHeader>
            <CardBody className="text-center h-[30%]">
                <Typography variant="h5">
                    {user?.login}
                </Typography>
                <h1 className='text-xs text-teal-400'>{user?.name}</h1>
                <Link to={`/${user?.login}`} >
                    <span className='text-gray-200 bg-teal-600 my-3 font-semibold block py-1  tracking-wide rounded'>
                        View more
                    </span>                        
                </Link>
            </CardBody>
        </Card>
  )
}

export default CardUser