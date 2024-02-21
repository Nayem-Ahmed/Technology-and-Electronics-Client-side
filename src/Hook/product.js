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

// add cart send data in database
export const addCart = async (email) => {
    const { addData } = await axiosPublice.post('/addcart', email)
    return addData
}

// Get Cart products by params
export const getAddCart = async (email) => {
    //  const { data } = await axiosSecure(`/addcart?email=${email}`)
    const { data } = await axiosPublice(`/addcart/${email}`)
    return data
  }