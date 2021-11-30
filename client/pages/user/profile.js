import {useRouter} from "next/router";
import { useUserContext } from "../../components/context/User";
import MainLayout from "../../components/layouts/Main";
import EditProfile from "../../components/profile/edit";
import Link from "next/link";

const ProfilePage = () => {
  const{user,logout}=useUserContext()
  
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
           <div className="mb-3">Edit Profile</div>
           <div className="mb-3"> <Link href={`/users/${user.id}`}><a>My Page</a></Link></div>
           <div><button onClick={
             logout
           } className="btn btn-info">Logout</button></div>
           </div>
         <div className="col-md-9">
             <EditProfile />
         </div>
        </div>
        
        
        
         </MainLayout>
  )
}

export default ProfilePage;