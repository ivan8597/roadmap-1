import {  useEffect } from "react"
import MainLayout from "../components/layouts/Main"
import Avatar from '../components/users/Avatar'
import { useMainContext } from "../components/context/Main"


const Page = () => {
  const {users,loadUsers}=useMainContext()
  

  useEffect(() => {
   loadUsers()
  }, []);

  return (
   <MainLayout>
    
      <div className='row'>
      {users.map((item) => {
        return (
          <div key={item.id} className="col-md-3 ">
            <Avatar item={item} link={`/users/${item._id}`}/>
  
          </div>
        );
      })}
      </div>
    </MainLayout>
  );
};
export default Page;