import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
    };
    return (
        <div className='my-8'>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto py-5 p-10 shadow-md">
                <label className="block mb-4">
                    Product Image:
                    <input
                        type="file"
                        name="productImage"
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
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
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                        {...register('productName', { required: 'Product Name is required' })}
                    />
                    {errors.productName && <p className="text-red-500 mt-2">{errors.productName.message}</p>}
                </label>

                <label className="block mb-4">
                    Product Type:
                    <input
                        type="text"
                        name="productType"
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
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
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                        {...register('productPrice', { required: 'Product Price is required' })}
                    />
                    {errors.productPrice && <p className="text-red-500 mt-2">{errors.productPrice.message}</p>}
                </label>
                <div  className='grid grid-cols-2 gap-4'>

                <label className="block mb-4">
                    Product Rating:
                    <input
                        type="number"
                        name="productRating"
                        step="any" // Allows float and decimal numbers
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                        {...register('productRating', { required: 'Product Rating is required' })}
                    />
                    {errors.productRating && <p className="text-red-500 mt-2">{errors.productRating.message}</p>}
                </label>

                <label className="block mb-4">
                    Product Brand:
                    <input
                        type="text"
                        name="productBrand"
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
                        {...register('productBrand', { required: 'Product Brand is required' })}
                    />
                    {errors.productBrand && <p className="text-red-500 mt-2">{errors.productBrand.message}</p>}
                </label>
                </div>
                <label className="block mb-4">
                    Product Details:
                    <textarea
                        name="productDetails"
                        className="w-full mt-2 p-2 border border-gray-500 rounded-md"
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
