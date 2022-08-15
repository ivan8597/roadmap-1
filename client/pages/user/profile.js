import {useRouter} from "next/router";
import { useUserContext } from "../../components/context/User";
import MainLayout from "../../components/layouts/Main";
import EditProfile from "../../components/profile/Edit";
import Link from "next/link";
import { useState } from "react";
import ProfileAvatar from "../../components/profile/Avatar";

const ProfilePage = () => {
  const{user,logout}=useUserContext()
  const [tab,setTab]=useState('profile')
  const router=useRouter()
  if(user.loading){
    return <MainLayout>Loading...</MainLayout>
  }
  if(!user.token){
    router.push("/signin")
    return <MainLayout>Loading...</MainLayout>
  }
  return (<MainLayout>
    
        <div className="row ">
         <div className="col-md-3">
           <div className="mb-3"><a onClick={()=>setTab("profile")} href="#">Edit Profile</a></div>
           <div className="mb-3"><a onClick={()=>setTab("avatar")} href="#">Edit Avatar</a></div>
           <div className="mb-3"> <Link href={`/users/${user.id}`}><a>My Page</a></Link></div>
           <div><button onClick={
             logout
           } className="btn btn-info">Logout</button></div>
           </div>
         <div className="col-md-9">
             {tab==='profile' && < EditProfile />}
             {tab==='avatar' && <ProfileAvatar/>}
         </div>
        </div>
        
        
        
         </MainLayout>
  )
}

export default ProfilePage;