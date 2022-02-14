import { useEffect } from "react";
import { STORAGE_URL } from "../../config";
import { useMainContext } from "../context/Main";
const FilesGrid = ({  handleClick = () => { }, isActive = () => { } }) => {
    const { files, loadFiles } = useMainContext()
    useEffect(() => {
        loadFiles()
    }, [])
    return (
        <div className='row'>
            {files.map((item) => {
                return (
                    <div key={item._id} className="col-md-3 ">
                        <img onClick={(e) => {
                            handleClick(item._id)
                        }} className={`file-item ${isActive(item._id) ? 'active' : ""}`} src={`${STORAGE_URL}/${item.path}`} />

                    </div>
                );
            })}
        </div>
    )
}

export default FilesGrid;