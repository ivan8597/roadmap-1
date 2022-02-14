import Link from 'next/link'
import { STORAGE_URL } from '../../config'
const Avatar = ({ item, link }) => {
    const { name, username, email, _id, avatar } = item
    const src = avatar ? `${STORAGE_URL}/${avatar.path}` : `https://i.pravatar.cc/140?u=${_id}`
    return (
        <div className="text-center">
            <img src={src} className="bd-placeholder-img rounded-circle" />
            <h2>{username}</h2>
            <p> {name}, {email}</p>
            {!!link && <p> <Link href={link}><a className="btn btn-secondary" >Посмотреть посты »</a></Link></p>}
        </div>

    )

}
export default Avatar