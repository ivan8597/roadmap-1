import { STORAGE_URL } from "../../config";
const FilesGrid = ({ files = [], handleClick = () => { }, isActive = () => { } }) => {
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