import {  useEffect } from "react"
import MainLayout from "../components/layouts/Main"
import Avatar from '../components/users/Avatar'
import { useMainContext } from "../components/context/Main"
import Pagination from "../components/nav/Pagination";


const Page = () => {
  const {users,loadUsers,activeUserPage,setActiveUserPage,userPages}=useMainContext()
  useEffect(() => {
   loadUsers()
  }, [activeUserPage]);

  return (
   <MainLayout>
     <Pagination
     activePage={activeUserPage}
     setActivePage={setActiveUserPage}
     pages={userPages}
     />
    
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