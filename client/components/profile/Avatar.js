import { useEffect } from "react";
import { useMainContext } from "../context/Main";
import { UserProvider, useUserContext } from "../context/User";
import FilesGrid from "../files/Grid";


const ProfileAvatar = () => {
    const { uploadAvatar, updateUser, user } = useUserContext()
    
    return (
        <><form>
            <div className="form-file">
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