import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
const API_URL = "http://localhost:3001"
const PostPage = () => {
    const router = useRouter()
    const { post_id } = router.query
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

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
    if (!post) {
        return "loading"
    }

    return (
        <div className="container">
         <div>
             <h2>{post.title}</h2>
             <p>{post.body}</p>
         </div>

         <div className="items">
                {comments.map((comment) => {
                    return (
                        <div key={comment.id} className="item">
                            <h2>{comment.name}</h2>
                            <p>{comment.body}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}
export default PostPage