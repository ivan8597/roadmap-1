import MainLayout from '../components/layouts/Main'
import PostCard from '../components/cards/Post'
import ArticleCard from '../components/cards/Article'
import AboutCard from '../components/cards/About'
import Avatar from '../components/users/Avatar'
import { post, user,address,company,comment } from '../data/mock'
import AboutAddress from '../components/cards/AboutAddress'
import AboutCompany from '../components/cards/AboutCompany'
import TostCard from "../components/cards/Tost"

const Template = () => {
  return (
    <MainLayout>
      <div className="row mb-2">
        <div className="col-md-6">
          <PostCard item={post} link={`/posts/${post.id}`}/>
        </div>
        <div className="col-md-6">
          <PostCard item={post} link={`/posts/${post.id}`} />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Avatar item={user} link={`/users/${user.id}`} />
        </div>
        <div className="col-lg-4">
          <Avatar item={user} link={`/users/${user.id}`}/>
        </div>
        <div className="col-lg-4">
          <Avatar item={user} link={`/users/${user.id}`} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <ArticleCard item={post} user={user} userLink={`/users/${user.id}`} />
          <TostCard item={comment}/>
          <TostCard item={comment}/>
          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">Older</a>
            <a className="btn btn-outline-secondary disabled" href="#" tabIndex={-1} aria-disabled="true">Newer</a>
          </nav>
        </div>
        <div className="col-md-4">
         <AboutAddress address={address}/>
         <AboutCompany company={company}/>
        </div>
      </div>
    </MainLayout>









  )
}
export default Template