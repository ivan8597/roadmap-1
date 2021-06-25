import {useRouter} from "next/router"
import MainLayout from "../../components/layouts/Main"
import MovieDetail from "../../components/movies/Detail"
import {useEffect,useState} from "react"
const API_URL = "http://localhost:3001"

const Movie =()=>{
  const [movie,setMovie]= useState()
   const router=useRouter() 
   const movie_id=router.query.movie_id
   
   useEffect(() => {
        if (!movie_id) {
            return
        }
        fetch(`${API_URL}/movies/${movie_id}`)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data.item);
            });
    }, [movie_id]);
 
  return(
    
        <MainLayout>
          <div className="row">
            <div className="col-md-9">
        
            {!!movie && <MovieDetail movie={movie} />}
            </div>
            <div className="col-md-3"></div>
          </div>
        
        </MainLayout>
  )
}
export default Movie