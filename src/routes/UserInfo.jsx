import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import Tabs from '../components/Tabs';

import {Button, Typography } from '@material-tailwind/react'
import Repo from '../components/Repo';
import Events from '../components/Events';
import UsersContainer from '../components/UsersContainer';

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingInfo, setLoadingInfo] = useState(false);
  const [type, setType] = useState('repos');
  const [infos, setInfos] = useState([]);
  

  let baseURL ="https://api.github.com/users";

  useEffect(() => {
    async function fetchData() {  
      setLoading(true);    
      const respone = await fetch(`${baseURL}${pathname}`);
      const data = await respone.json();      
      setUser(() => data);   
      setLoading(false);    
    }

    async function getUrls() {
      setLoadingInfo(true);    
      const res = await fetch(baseURL + pathname + `/${type}`);
      const data = await res.json();
      setInfos(data);
      setLoadingInfo(false); 
    }

    
    fetchData();
    getUrls();
    //setUser(() => data)
  }, [pathname, type])

  return (
    <div className='py-5'> 
        {loading?  
        <Loading/> : (
        <Button 
            onClick={() => navigate('/')}
            className='px-5 py-1 font-medium mx-1 my-4 bg-teal-600 rounded text-gray-200'>
            BACK
          </Button>
        )}     
       
          {
            user &&  (
              loading ? 
              (<div className='flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10'><Loading/></div> ) : 
              (
                <div className='flex justify-center md:flex-row md:px-0 px-4 flex-col gap-10' >
                  <img 
                    src={user.avatar_url} alt={user?.login}
                    className='w-[350px] border-0 md:mx-0 mx-auto' 
                  />
                  <div className='text-lg px-3 leading-10'>
                    <Fragment>
                      <Typography variant="h1" className="mb-3">{user?.name}</Typography>

                      <Typography variant="h5" className="mb-3 mt-3"><span className='text-teal-400'>Login : </span> {user?.login}</Typography>
                      <Typography variant="h5" className="mb-3"><span className='text-teal-400'>Followers : </span> {user?.followers}</Typography>
                      <Typography variant="h5" className="mb-3"><span className='text-teal-400'>Followings : </span> {user?.following}</Typography>
                      <Typography variant="h5" className="mb-3"><span className='text-teal-400'>Public Repositories : </span> {user?.public_repos}</Typography>
                      <Typography variant="h5" className="mb-3"><span className='text-teal-400'>Join : </span> {new Date(user?.created_at).toLocaleDateString()}</Typography>
                    </Fragment>
                    
                    <a 
                      href={user?.html_url}
                      target="_blank"
                      className='text-gray-200 font-semibold rounded cursor-pointer px-4 py-1 bg-teal-600 my-3 
                      tracking-wide'>
                        Visit to Github
                      </a>
                  </div>
                </div>

                
              )
              
            )
          }    

          <div className='flex border-b pb-4 gap-6 mt-[5%] mb-6 justify-center md:text-xl'>            
            <Tabs type={type} setType={setType}/>            
          </div> 
          {
          loadingInfo ? <Loading/>:<>
            {
              type == 'repos' && (
                <div  className='grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto'>
                  {infos && <Repo repos={infos} />}                  
                </div>
              )
            }
            {
              type == 'received_events' && (                
                <div className='grid md:grid-cols-2 grid-cols-1 gap-7 w-10/12 mx-auto'>
                  {infos && <Events events={infos} />}  
                </div>
              )
            }
            {
              type == 'followers' && (
                <div>
                  <UsersContainer users={infos}/>
                </div>
              )
            } 
            {
              type == 'following' && (
                <div>
                  <UsersContainer users={infos}/>
                </div>
              )
            } </>
          }  
    </div>
    )
}

export default UserInfo