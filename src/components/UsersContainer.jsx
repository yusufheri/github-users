import React from 'react';
import { Typography } from "@material-tailwind/react";
import CardUser from './CardUser';

const UsersContainer = ({users}) => {
  return (//grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3
  //flex gap-5 flex-wrap justify-center py-5
    <div className='flex gap-5 flex-wrap justify-center py-5'>
        {users.length === 0 && (
            <div>
                <Typography variant="h2">
                    Data not found !!
                </Typography>               
            </div>
        )}
        { users && 
            users.map(
                (user, index) => 
                user?.login && (
                    <CardUser user={user} key={index}/>
                )
            )
        }
    </div>
  )
}

export default UsersContainer