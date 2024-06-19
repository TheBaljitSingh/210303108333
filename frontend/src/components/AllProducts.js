import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../api/api.js';

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("mobile");
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        fetchAllProduct();
    }, [category]); 

    const fetchAllProduct = async () => {
        try {
            const response = await getAllProduct(category, 10, 1);
            console.log(response.data.products);
            setProducts(response.data.products);
        } catch (error) {
            console.log("Error while fetching products", error);
        } finally {
            setLoading(false); // Set loading back to false after fetching (whether successful or not)
        }
    }

    
    return (
        <div>
            <div className='h-2 text-2xl mt-4 flex justify-center items-center'>AllProducts</div>
            {loading ? (
                <div className='text-center mt-5'>Loading...</div>
            ) : (
                <div className='grid md:grid-cols-3 mt-5 p-5 gap-10'>
                    
                    {products.map((product) => (
                        <div key={product.id} className='flex justify-center items-center flex-col'>
                            <h3 className='text-xl'>Product: {product.name}</h3>
                            <p className='text-xl'>Category: {product.category}</p>
                        </div>
                    ))}
                </div>
            )}

            
        </div>
    )
}
