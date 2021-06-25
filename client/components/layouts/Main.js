import HeaderSection from "../sections/Header"
import Head from "next/head"
const MainLayout=({children})=>{
return(

<>
<Head>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Memico - Cinema Bootstrap HTML5 Template</title>
  {/* Bootstrap */}
  <link href="/pattern/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
  {/* Animate.css */}
  <link href="/pattern/animate.css/animate.css" rel="stylesheet" type="text/css" />
  {/* Font Awesome iconic font */}
  <link href="/pattern/fontawesome/css/fontawesome-all.css" rel="stylesheet" type="text/css" />
  {/* Magnific Popup */}
  <link href="/pattern/magnific-popup/magnific-popup.css" rel="stylesheet" type="text/css" />
  {/* Slick carousel */}
  <link href="/pattern/slick/slick.css" rel="stylesheet" type="text/css" />
  {/* Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700" rel="stylesheet" type="text/css" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" type="text/css" />
  {/* Theme styles */}
  <link href="/pattern/css/dot-icons.css" rel="stylesheet" type="text/css" />
  <link href="/pattern/css/theme.css" rel="stylesheet" type="text/css" />
</Head>
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