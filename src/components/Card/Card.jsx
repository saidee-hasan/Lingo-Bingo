import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../CardDetails/CardDetails";
import { useEffect, useState } from "react";

function Card() {
    const data = useLoaderData();
    const { id } = useParams();
    
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        // Filter the data to find the product with the matching Lesson_no
        const singleData = data.filter((p) => p.Lesson_no === parseInt(id)); // Use strict equality for comparison
        setProductData(singleData.length > 0 ? singleData : null); // Set product data or null
    }, [data, id]); 
    
    return (
        <div className="p-4 container mx-auto">
            {productData ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {productData.map((p, idx) => (
                        <CardDetails key={idx} data={p} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">No product found.</p> // Message if no product is found
            )}
        </div>
    );
}

export default Card;