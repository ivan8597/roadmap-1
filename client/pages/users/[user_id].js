import { useRouter } from 'next/router'
import { useMainContext } from '../../components/context/Main'
import { useEffect } from "react"
import MainLayout from "../../components/layouts/Main"
import PostCard from "../../components/cards/Post"
import Avatar from "../../components/users/Avatar"
import AboutAddress from '../../components/cards/AboutAddress'
import AboutCompany from '../../components/cards/AboutCompany'

const API_URL = "http://localhost:3001"
const UserPage = () => {
    const router = useRouter()
    const { user_id } = router.query
    const {user,loadUser,posts,loadPosts}=useMainContext()
    useEffect(() => {
        if (!user_id) {
            return
        }
       loadPosts(user_id)
       loadUser(user_id)
    }, [user_id]);

    if (!user) {
        return "loading"
    }
    return (
        <MainLayout>
            <div className="row">
                <div className="col-md-4">
                <Avatar item={user}/>
                </div>
                <div className="col-md-4">
                    <AboutCompany company={user.company}/>
                </div>
                <div className="col-md-4">
                    <AboutAddress address={user.address}/>
                </div>
            </div>

            <div className="row">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="col-md-6 ">
                        
                                <PostCard item={post} link={`/posts/${post._id}`} />
                        </div>
                    );
                })}
            </div>
        </MainLayout>

    )

}
export default UserPage