import Link from 'next/link'
const PostCard = ({item,link}) => {
    const {title,body} = item
    return (
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">{title}</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">{body.slice(4,49)}...</p>
                <Link href={link} ><a  className="stretched-link">Continue reading</a></Link>
            </div>
            <div className="col-auto d-none d-lg-block">
                <img src="https://picsum.photos/200/250"/>
            </div>
        </div>

    )
}
export default PostCard