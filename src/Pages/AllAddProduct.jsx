import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../Hook/product';
import Loader from '../Hook/Loader';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';


const AllAddProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) return <Loader />;

    return (
        <div className='p-6 my-8'>
            <h1 className='text-3xl font-semibold text-center'>All <span className='text-blue-500 border-b-4 border-blue-500 '>Product</span></h1>
            {/* Display products here */}
            <div className='grid gap-4 grid-cols-1 md:grid-cols-3 my-11'>

                {products.map(product => (
                    <Link key={product._id} to={`/productdetails/${product._id}`} className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col mx-auto">
                        <img className="object-cover w-full h-64" src={product.productImage} alt={product.productName} />
                        <div className="px-3 py-3 flex-grow">
                            <div className="font-bold text-xl mb-2">{product.productName}</div>
                            <div className="font-bold text-xl mb-2">{product.productBrand}</div>
                            <p className="text-gray-700 text-base font-semibold">{product.productType}</p>
                            <p className="text-gray-700 text-base font-semibold">$ {product.productPrice}</p>
                        </div>
                        <div className="px-3 py-3">
                            <Rating style={{ maxWidth: 150 }} value={product.productRating} readOnly />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllAddProduct;
