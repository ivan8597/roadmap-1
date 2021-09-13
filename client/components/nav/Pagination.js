const  Pagination = ({activePage,setActivePage,pages}) => {
  return (
      <>
    <button onClick={
        ()=>{
          if(activePage<2){
            return
          }
          setActivePage(activePage-1)
         
        }
      }>Left</button>
     {activePage}/{pages}
     <button onClick={
        ()=>{
          if(activePage>pages-1){
            return
          }
          setActivePage(activePage+1)
    
        }
      }>Rigth</button>
      </>
  )
}

export default Pagination;