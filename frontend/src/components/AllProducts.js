import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../api/api.js';

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("mobile");
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchAllProduct();
    }, [category, page]); // Include category and page in dependency array

    const fetchAllProduct = async () => {
        try {
            // Use the correct API endpoint
            const response = await getAllProduct(category, 10, page);
            console.log(response);
            setProducts(response.data.products);
        } catch (error) {
            console.log("Error while fetching products", error);
        }
    }

    return (
        <div>
            <div className='h-2 text-2xl mt-4 flex justify-center items-center'>AllProducts</div>
            <div className=' grid md:grid-cols-3 mt-5 p-5'>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3 className='text-xl'>{product.name}</h3>
                        <p className='text-xl'>Category: {product.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
