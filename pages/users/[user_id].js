import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Link from 'next/link'
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
        <div className="container">
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>

            <div className="items">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="item">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <Link href={`/posts/${post.id}`}>
                                <a>Open</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>

    )

}
export default UserPage