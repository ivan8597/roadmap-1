import { useRouter } from "next/router";
import { useUserContext } from "../../components/context/User";
import MainLayout from "../../components/layouts/Main";
import EditProfile from "../../components/profile/edit";
import Link from "next/link";
import { useState } from "react";
import ProfileAvatar from "../../components/profile/Avatar";

const ProfilePage = () => {
  const { user, logout } = useUserContext()
  const [tab, setTab] = useState('profile')
  const router = useRouter()
  if (user.loading) {
    return <MainLayout>Loading...</MainLayout>
  }
  if (!user.token) {
    router.push("/signin")
    return <MainLayout>Loading...</MainLayout>
  }
  return (<MainLayout>

    <div className="row ">
      <div className="col-md-3">
        <div className="row ">
          <div className="col-md-12 col-6">
            <div className="mb-3-center mb-3"><button className="btn btn-info" onClick={() => setTab("profile")}>Edit Profile</button></div>
            <div className="mb-3-center mb-3"><button className="btn btn-info" onClick={() => setTab("avatar")} >Edit Avatar</button></div>
          </div>
          <div className="col-md-12 col-6">
            <div className="mb-3-center mb-3"> <Link href={`/users/${user.id}`}><button className="btn btn-info">My Page</button></Link></div>
            <div className="mb-3-center mb-3"><button onClick={
              logout
            } className="btn btn-info">Logout</button></div>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        {tab === 'profile' && < EditProfile />}
        {tab === 'avatar' && < ProfileAvatar />}
      </div>
    </div>



  </MainLayout>
  )
}

export default ProfilePage;