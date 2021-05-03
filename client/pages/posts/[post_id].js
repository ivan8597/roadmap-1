import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import MainLayout from "../../components/layouts/Main"
import ArticleCard from "../../components/cards/Article"
import TostCard from "../../components/cards/Tost"
const API_URL = "http://localhost:3001"
const PostPage = () => {
    const router = useRouter()
    const { post_id } = router.query
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!post_id) {
            return
        }
        fetch(`${API_URL}/comments?postId=${post_id}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data.items);
            });
    }, [post_id]);



    useEffect(() => {
        if (!post_id) {
            return
        }
        fetch(`${API_URL}/posts/${post_id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data.item);
            });
    }, [post_id]);

    useEffect(() => {
        if (!post) {
            return
        }
        fetch(`${API_URL}/users/${post.userId}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data.item);
            });
    }, [post]);
    if (!post || !user) {
        return "loading"
    }


    return (
        <MainLayout>
            <div className="row">
                <div className="col-md-4">
                    <ArticleCard item={post} user={user} userLink={`/users/${user.id}`} />
                </div>

                <div className="col-md-8">
                    {comments.map((comment) => {
                        return (
                            <TostCard item={comment} key={comment.id} />
                        );
                    })}
                </div>

            </div>
        </MainLayout>
    )
}
export default PostPage