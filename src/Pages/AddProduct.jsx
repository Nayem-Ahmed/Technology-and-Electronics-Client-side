import React from 'react';
import { useForm } from 'react-hook-form';
import { AddProductsPost } from '../Hook/product';
import { imgUpload } from '../Hook/imbb';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        try {
            console.log(data);

            // Assuming imgUpload is a function that handles image upload
            const imageData = await imgUpload(data.productImage[0]);
            const img = imageData.data.display_url;
            console.log(img);

            // Add product
            const sendproductData = await AddProductsPost({ ...data, productImage: img });
            console.log(sendproductData);

            
            toast(' Add Products successfull')
            reset();
            navigate('/')

        } catch (error) {
            toast.error(error.message);

        }
    };
    return (
        <div className='my-8'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto py-5 p-10 shadow-md">
                <label className="block mb-4">
                    Product Image:
                    <input
                        type="file"
                        name="productImage"
                        className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productImage ? 'border-red-500' : ''}`}
                        {...register('productImage', { required: 'Product Image is required' })}
                    />
                    {errors.productImage && <p className="text-red-500 mt-2">{errors.productImage.message}</p>}
                </label>
                <div className='grid grid-cols-2 gap-4'>


                    <label className="block mb-4">
                        Product Name:
                        <input
                            type="text"
                            name="productName"
                            className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productName ? 'border-red-500' : ''}`}
                            {...register('productName', { required: 'Product Name is required' })}
                        />
                        {errors.productName && <p className="text-red-500 mt-2">{errors.productName.message}</p>}
                    </label>

                    <label className="block mb-4">
                        Product Type:
                        <input
                            type="text"
                            name="productType"
                            className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productType ? 'border-red-500' : ''}`}
                            {...register('productType', { required: 'Product Type is required' })}
                        />
                        {errors.productType && <p className="text-red-500 mt-2">{errors.productType.message}</p>}
                    </label>

                </div>
                <label className="block mb-4 ">
                    Product Price:
                    <input
                        type="number"
                        name="productPrice"
                        className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productPrice ? 'border-red-500' : ''}`}
                        {...register('productPrice', { required: 'Product Price is required' })}
                    />
                    {errors.productPrice && <p className="text-red-500 mt-2">{errors.productPrice.message}</p>}
                </label>
                <div className='grid grid-cols-2 gap-4'>

                    <label className="block mb-4">
                        Product Rating:
                        <input
                            type="number"
                            name="productRating"
                            step="any" // Allows float and decimal numbers
                            className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productRating ? 'border-red-500' : ''}`}
                            {...register('productRating', { required: 'Product Rating is required' })}
                        />
                        {errors.productRating && <p className="text-red-500 mt-2">{errors.productRating.message}</p>}
                    </label>

                    <label className="block mb-4">
                        Product Brand:
                        <input
                            type="text"
                            name="productBrand"
                            className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productBrand ? 'border-red-500' : ''}`}
                            {...register('productBrand', { required: 'Product Brand is required' })}
                        />
                        {errors.productBrand && <p className="text-red-500 mt-2">{errors.productBrand.message}</p>}
                    </label>
                </div>
                <label className="block mb-4">
                    Product Details:
                    <textarea
                        name="productDetails"
                        className={`shadow appearance-none border rounded w-full mt-2 p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.productDetails ? 'border-red-500' : ''}`}
                        {...register('productDetails', { required: 'Product Details is required' })}
                    />
                    {errors.productDetails && <p className="text-red-500 mt-2">{errors.productDetails.message}</p>}
                </label>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-8 py-2 w-full rounded-md hover:bg-blue-800 transition duration-300"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
