import React, { useEffect, useRef, useState } from 'react'
import Loading from '../components/Loading';
import UsersContainer from '../components/UsersContainer';


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    let baseURL ="https://api.github.com/users";

    const [searchText, setSearchText] = useState('');
    const searchRef = useRef('');

    const handleChange = (e) => {
        setSearchText(() => e.target.value);
        if ((searchText.length == 1 && users.length == 1) || (searchRef.current.value == "") ){ allUsers();}
    }

    const findUser = async (e) => {
       if(e.keyCode === 13 && searchText !== "") {           


            if (searchText !== '') {
                setLoading(true);

                fetch(`${baseURL}/${searchText}`).then((res) => {
                    if (res.ok) return res.json()
                    
                    throw new Error('Something went wrong')
                }).then((data) => {
                    setUsers(() => [data]);
                }).catch((error) => {
                    //console.error(error)
                }).finally(() => setLoading(false))
                //const res = await fetch(`${baseURL}/${searchText}`);
                //const data = await res.json();
                //setUsers(() => [data])                 
            } else {
                allUsers();
            }

            
       } 
    }

    async function allUsers() {
        if (searchText === "") setLoading(true);
        const response = await fetch(baseURL);
        const data =  await response.json()
        setUsers(data);
        setLoading(false);
    }

    useEffect(() => {
        allUsers();
    }, []);

  return (
    <div>
        <div className="flex justify-center items-center h-11 my-5">
            <label htmlFor="Search" className='text-2xl text-white-500 font-semibold mr-2'>Search </label>
            <input 
                type="search"
                placeholder='type a github username ...'
                className='h-full md:w-7/12 w-2/3 text-gray-800 px-2 font-semibold outline-none rounded-full'
                onChange={handleChange}
                onKeyUp={findUser}
                ref={searchRef}
            />
            
        </div>
        { searchText   && (
            <h2 className='font-medium text-[#ebedee] text-xl mb-3 text-center'>
                Keyup Enter to show result for <span className='text-teal-500'>{searchText}</span>
            </h2>
        )}
       {loading ?  <Loading/> : <UsersContainer users={users} />}
    </div>
  )
}

export default Users