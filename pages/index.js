import {useState,useEffect} from "react"
const API_URL="http://localhost:3001"
const Page = () => {
   const [items,setItems]= useState([])
   
  useEffect(() => {
  fetch(`${API_URL}/users`)
    .then((res) => res.json())
    .then((data) => {
      setItems(data.items);
    });
  }, []);

    return (
      <div className="container users">
        {items.map((item) => {
          return (
            <div key={item.id} className="user">
              <h2>{item.name}</h2>
              <p>{item.email}</p> 
            </div>
          );
        })}
      </div>
    );
  };
  export default Page;