import { useState, useEffect } from "react"
import MainLayout from "../components/layouts/Main"
import Avatar from '../components/users/Avatar'
//

const API_URL = "http://localhost:3001"
const Page = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
      });
  }, []);

  return (
   <MainLayout>
      <div className='row'>
      {items.map((item) => {
        return (
          <div key={item.id} className="col-md-3 ">
            <Avatar item={item} link={`/users/${item.id}`}/>
  
          </div>
        );
      })}
      </div>
    </MainLayout>
  );
};
export default Page;