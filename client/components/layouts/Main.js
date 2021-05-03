import HeaderSection from "../sections/Header"
const MainLayout=({children})=>{
return(

<>
  <div className="container">
   <HeaderSection/>
  </div>
  <main className="container">
      {children}
  </main>
  <footer className="blog-footer">
    <p>Сделано  <a href="https://github.com/ivan8597">Ivan8597</a></p>
    
  </footer>
</>

)
}
export default MainLayout