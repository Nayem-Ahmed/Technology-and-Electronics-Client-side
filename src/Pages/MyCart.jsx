import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from 'sweetalert2';
import useAuth from '../Hook/useAuth';
import { getAddCart } from '../Hook/product';

const MyCart = () => {
    const { user } = useAuth();
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const fetchCartData = async () => {
            if (user?.email) {
                const data = await getAddCart(user?.email);
                setCartData(data);
            }
        };

        fetchCartData();
    }, [user?.email]);

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                deleteCart(id);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
                const remaining = cartData.filter(cart => cart._id !== id);
                setCartData(remaining);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div>
            {cartData.length === 0 ? (
                <div className="text-center">No products added to the cart</div>
            ) : (
                <div className="cart-items grid gap-4 grid-cols-1 md:grid-cols-3 my-11">
                    {cartData.map(item => (
                        <div key={item._id} to={`/productdetails/${item._id}`} className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col mx-auto">
                            <img className="object-cover w-full h-64" src={item.productImage} alt={item.productName} />
                            <div className="px-3 py-3 flex-grow">
                                <div className="font-bold text-xl mb-2">{item.productName}</div>
                                <div className="font-bold text-xl mb-2">{item.productBrand}</div>
                                <p className="text-gray-700 text-base font-semibold">{item.productType}</p>
                                <p className="text-gray-700 text-base font-semibold">$ {item.productPrice}</p>
                            </div>
                            <div className="px-3 py-3">
                                <Rating style={{ maxWidth: 150 }} value={item.productRating} readOnly />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyCart;
