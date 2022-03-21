import { useEffect } from "react";
import { useMainContext } from "../context/Main";
import { UserProvider, useUserContext } from "../context/User";
import FilesGrid from "../files/Grid";


const ProfileAvatar = () => {
    const{loadFiles}=useMainContext()
    const { uploadAvatar, updateUser, user } = useUserContext()
    useEffect(()=>{
      loadFiles()
    },[user])
    
    return (
        <><form>
            <div className="form-file mb-3">
                <input onChange={(e) => {
                    uploadAvatar(e.target.files[0])
                }} type="file" className="form-file-input" id="customFile" />
            </div>

        </form>
            <FilesGrid isActive={
                (id) => {
                    if (user.avatarId === id) {
                        return true
                    } else {
                        return false
                    }
                }
            } handleClick={(id) => {
                updateUser({
                    avatarId: id
                })
            }}  />
        </>
    )
}

export default ProfileAvatar;