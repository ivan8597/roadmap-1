import Link from "next/link"
import { STORAGE_URL } from "../../config"
import { useUserContext } from "../context/User"
const HeaderSection = () => {
    const { user } = useUserContext()
    return (
        <>
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                      <Link href="/"><a className="blog-header-logo text-dark" >Blog</a></Link>  
                    </div>
                    <div className="col-4 text-center">
                        
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        {
                            user.token ?
                                (<Link href="/user/profile">
                                
                                    <a className="btn btn-sm btn-outline-secondary" >
                                        {user.avatar && <img className="header-avatar" src={`${STORAGE_URL}/${user.avatar.path}`}/>}
                                        {user.username || user.email}
        
                                    </a>
                                </Link>) :
                                <Link href="/signin"><a className="btn btn-sm btn-outline-secondary" >Sign in </a></Link>
                        }

                    </div>
                </div>
            </header>
            <div className="nav-scroller py-1 mb-2">
                {/* <nav className="nav d-flex justify-content-between">
                    <Link href="/"><a className="p-2 link-secondary" >Users</a></Link>
                    <Link href="/template"><a className="p-2 link-secondary" >Template</a></Link>

                </nav> */}
            </div>
        </>
    )
}
export default HeaderSection