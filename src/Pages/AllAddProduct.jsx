import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../Hook/product';

const AllAddProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const data = await getAllProducts();
            setProducts(data);
            console.log(products);

        };
        fetchData();
    }, []);

    return (
        <div className='p-6 my-8'>
            <h1 className='text-3xl font-semibold text-center'>All <span className='text-blue-500 border-b-4 border-blue-500 '>Product</span></h1>
            {/* Display products here */}
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 my-11'>

                {products.map(product => (
                    <div key={product._id} className=" max-w-xs rounded overflow-hidden shadow-lg">
                        <img className=" " src={product.productImage} alt={product.productName} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.productName}</div>
                            <p className="text-gray-700 text-base">{product.productType}</p>
                            <p className="text-gray-700 text-base">$ {product.productPrice}</p>
                            <p className="text-gray-700 text-base">{product.productRating}</p>
                        </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{product.productBrand}</div>

                        </div>
                        <div className="px-6 py-4">
                            <span>{product.productDetails}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAddProduct;
