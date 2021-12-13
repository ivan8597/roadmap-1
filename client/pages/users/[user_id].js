import { useRouter } from 'next/router'
import { useMainContext } from '../../components/context/Main'
import { useEffect, useState } from "react"
import MainLayout from "../../components/layouts/Main"
import PostCard from "../../components/cards/Post"
import Avatar from "../../components/users/Avatar"
import AboutAddress from '../../components/cards/AboutAddress'
import AboutCompany from '../../components/cards/AboutCompany'
import Pagination from '../../components/nav/Pagination'
import PostPopup from '../../components/post/Popup'
import { useUserContext } from '../../components/context/User'

const UserPage = () => {
    const router = useRouter()
    const{user:authUser}=useUserContext()
    const [showpopup, setShowpopup]=useState(false)
    const { user_id } = router.query
    const { user, loadUser, posts, loadPosts, activePostPage,
        setActivePostPage,
        postPages } = useMainContext()
    const crumbs = [{
        title: "Home",
        link: "/"
    },
    {
        title: user ? user.username : ""
    }
    ]
    const isOwner=user_id===authUser.id



    useEffect(() => {
        if (!user_id) {
            return
        }
        loadPosts(user_id)
        loadUser(user_id)
    }, [user_id, activePostPage]);

    if (!user) {
        return "loading"
    }
    return (
        <MainLayout crumbs={crumbs}>

            <div className="row">
                <div className="col-md-4">
                    <Avatar item={user} />
                </div>
                <div className="col-md-4">
                    {!!user.company && <AboutCompany company={user.company} />}

                </div>
                <div className="col-md-4">
                    {!!user.address && <AboutAddress address={user.address} />}

                </div>
            </div>
            {
                isOwner && <button onClick={()=>{
                    setShowpopup(true)
                }} className='btn btn-primary'>Create post</button>
   
            }
             

            <Pagination
                activePage={activePostPage}
                setActivePage={setActivePostPage}
                pages={postPages}
            />
            <div className="row">
                {posts.map((post,i) => {
                    return (
                        <div key={post.id} className="col-md-6 ">

                            <PostCard item={post} link={`/posts/${post._id}`} 
                            id={posts.length-i}
                            upDateHandler={()=>{
                                setShowpopup(true)
                            }}
                            isOwner={isOwner}/>
                        </div>
                    );
                })}
            </div>
            {
             showpopup && <PostPopup close={()=>{setShowpopup(false)}}/>
            }
        </MainLayout>

    )

}
export default UserPage