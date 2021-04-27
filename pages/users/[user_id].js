import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Link from 'next/link'
import MainLayout from "../../components/layouts/Main"
import PostCard from "../../components/cards/Post"
import Avatar from "../../components/users/Avatar"
import AboutAddress from '../../components/cards/AboutAddress'
import AboutCompany from '../../components/cards/AboutCompany'
const API_URL = "http://localhost:3001"
const UserPage = () => {
    const router = useRouter()
    const { user_id } = router.query
    const [user, setUser] = useState(null)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (!user_id) {
            return
        }
        fetch(`${API_URL}/posts?userId=${user_id}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.items);
            });
    }, [user_id]);



    useEffect(() => {
        if (!user_id) {
            return
        }
        fetch(`${API_URL}/users/${user_id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data.item);
            });
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
                        
                                <PostCard item={post} link={`/posts/${post.id}`} />
                        </div>
                    );
                })}
            </div>
        </MainLayout>

    )

}
export default UserPage