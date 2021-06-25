import { useState, useEffect } from "react"
import MainLayout from "../components/layouts/Main"
import Preview from "../components/movies/Preview"
import Line from "../components/movies/Line"
//

const API_URL = "http://localhost:3001"
const PAGE_LIMIT=8
const Page = () => {
    const [items, setItems] = useState([])
    const years = [2004, 2007, 2014, 2009]
    const [year,setYear]=useState(years[0])
    const [count,setCount]=useState(0)
    const [page,setPage]=useState(1)
    useEffect(()=>{setPage(1)} ,[year])

    useEffect(() => {
        const skip=(page-1)*PAGE_LIMIT
        fetch(`${API_URL}/movies?year=${year}&skip=${skip}&limit=${PAGE_LIMIT}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data.items);
                setCount(data.count)
            });
    }, [year,page]);

    return (
        <>
        <MainLayout>
            <div className="btn-group">
                {years.map((year)=>{
                   return <button type="button" onClick={(e)=>{
                    e.preventDefault()
                    setYear(year)
                   }} key={year} className="btn btn-primary">{year}</button>
                })}
            </div>
            <div className=''>year: {year}</div>
            <div className=''>count: {count}</div>
            <button type="button" onClick={(e)=>{
                    e.preventDefault()
                    setPage(page+1)
                   }}  className="btn btn-primary">Next ({page})</button>

            

                {items.map((item) => {
                    return (<Line movie={item}  key={item._id} url={`/movies/${item._id}`}/> )
                        // <div key={item._id} className="col-md-3 ">
                        //     <Preview img={item.poster} title={item.title} text={item.plot} />
                        // </div>
                  
                })}
         
        </MainLayout>
        </>
    );
};
export default Page;