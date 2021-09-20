const  Pagination = ({activePage,setActivePage,pages}) => {
  return (
      <div className="btn-group">
    <button className="btn btn-outline-primary" onClick={
        ()=>{
          if(activePage<2){
            return
          }
          setActivePage(activePage-1)
         
        }
      }>Left</button>
     <span className="btn btn-outline-primary disabled">{activePage}/{pages}</span>
     <button className="btn btn-outline-primary" onClick={
        ()=>{
          if(activePage>pages-1){
            return
          }
          setActivePage(activePage+1)
    
        }
      }>Rigth</button>
      </div>
  )
}

export default Pagination;