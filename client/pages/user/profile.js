import MainLayout from "../../components/layouts/Main";
import EditProfile from "../../components/profile/edit";

const ProfilePage = () => {
  return (
    <MainLayout>
        <div className="row ">
         <div className="col-md-3">Edit Profile</div>
         <div className="col-md-9">
             <EditProfile/>
         </div>
        </div>
        
        
        
         </MainLayout>
  )
}

export default ProfilePage;