import { useRouter } from 'next/router'
import { useMainContext } from '../../components/context/Main'
import { useEffect } from "react"
import MainLayout from "../../components/layouts/Main"
import PostCard from "../../components/cards/Post"
import Avatar from "../../components/users/Avatar"
import AboutAddress from '../../components/cards/AboutAddress'
import AboutCompany from '../../components/cards/AboutCompany'
import Pagination from '../../components/nav/Pagination'

const UserPage = () => {
    const router = useRouter()
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

            <Pagination
                activePage={activePostPage}
                setActivePage={setActivePostPage}
                pages={postPages}
            />
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