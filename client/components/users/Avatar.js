import Link from 'next/link'
const Avatar = ({item,link}) => {
    const {name,username, email,_id} = item
    return (
        <div className="text-center">
            <img src={`https://i.pravatar.cc/140?u=${_id}`} className="bd-placeholder-img rounded-circle"/>
            <h2>{username}</h2>
            <p> {name}, {email}</p>
           {!!link && <p> <Link  href={link}><a className="btn btn-secondary" >Посмотреть посты »</a></Link></p>}
        </div>

    )

}
export default Avatar