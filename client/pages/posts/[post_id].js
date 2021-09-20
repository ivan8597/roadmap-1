import { useRouter } from 'next/router'
import { useEffect } from "react"
import MainLayout from "../../components/layouts/Main"
import ArticleCard from "../../components/cards/Article"
import TostCard from "../../components/cards/Tost"
import { useMainContext } from '../../components/context/Main'
import Pagination from '../../components/nav/Pagination'


const PostPage = () => {
    const router = useRouter()
    const { post_id } = router.query
    const { post, loadPost, user, loadUser, comments, loadComments, activeCommentsPage,
        setActiveCommentsPage,
        commentsPages } = useMainContext()

    useEffect(() => {
        if (!post_id) {
            return
        }
        loadComments(post_id)
        loadPost(post_id)
    }, [post_id,activeCommentsPage]);

    useEffect(() => {
        if (!post) {
            return
        }
        loadUser(post.userId)

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
                <Pagination activePage={activeCommentsPage}
                    setActivePage={setActiveCommentsPage}
                    pages={commentsPages}
                />
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