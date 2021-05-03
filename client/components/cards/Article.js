import Link from 'next/link'
const ArticleCard=({item,user,userLink})=>{
  const{title,body}=item
  const{username}=user
return(
    <article className="blog-post">
    <h2 className="blog-post-title">{title}</h2>
    <p className="blog-post-meta">January 1, 2014 by <Link href={userLink}><a>{username}</a></Link></p>
    <p>{body}</p>
  </article>


)
}
export default ArticleCard