const Preview = ({img,title,text}) => {
    return (
        <div className="card" >
            {!!img && <img src={img} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}
export default Preview