import axiosPublice from "./axiosPublic"

// Add products (post) databse
export const AddProductsPost = async (productdata) => {
    const { addData } = await axiosPublice.post('/products', productdata)
    return addData
}
// Fetch all products from db
export const getAllProducts = async () => {
    const { data } = await axiosPublice('/products')
    return data
}