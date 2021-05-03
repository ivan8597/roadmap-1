const TostCard=({item})=>{
    const {name,email,body}=item
return(
<div className="toast show mb-3"  >
  <div className="toast-header">
    <strong className="me-auto">{name}</strong>
    <small className="text-muted">{email}</small>
  </div>
  <div className="toast-body">
    {body}
  </div>
</div>


)
}
export default TostCard