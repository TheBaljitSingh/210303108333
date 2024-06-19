import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';

export default function ProductDetails() {

    const { category, productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(category, productId);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct(); 
    }, [category, productId]); 

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {product.name}</p>
            <p>Category: {product.category}</p>
        </div>
    );
}
