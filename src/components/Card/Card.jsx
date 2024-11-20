import { useLoaderData, useParams } from "react-router-dom"

function Card() {
    const data = useLoaderData();
    const {id} =useParams();
    console.log(id)

    
  return (
    <div>

      
    </div>
  )
}

export default Card
