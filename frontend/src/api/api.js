import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getAllProduct = (category, n, page)=>{
    return axios.get(`${baseUrl}/categories/${category}/products`,{
        params: {n, page}
    });
};

export const getProductById = (category, productId)=>{
    return axios.get(`${baseUrl}/categories/${category}/products/${productId}`)
}