import Link from "next/link";
const CommentForm = () => {
    return (
        <div className="formpage">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder=""
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Example textarea
                </label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                />
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
           Add Comment
            </button>
           
        </div>

    )
}

export default CommentForm;