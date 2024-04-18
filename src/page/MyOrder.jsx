import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';

const MyOrder = () => {

    const [products , setProducts]= useState([])



    const { cart } = useSelector((state) => state.allCart);
    const { data , isLoading} = useFetch("/api/orders");

    console.log(data);

    if(isLoading){
      return <Loading/>
    }

  return (
    <div className=' mt-[8%] px-[5%]'>

        <p className=' text-center text-[30px] font-bold '>Order History</p>
      
      <div>
        
      <div className=" shadow-xl px-4 my-8 rounded-lg py-2 ">
                {products?.map((item) => {
                  console.log(item?.attributes);
                  return (
                    <div className=" py-1">
                      <div className=" flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={
                                  item.attributes.image.data[0].attributes.url
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div>
                            <div className="">
                              {item.attributes.title.slice(0, 35)}{" "}
                              {item.attributes.title.length > 20 ? "..." : ""} ({" "}
                              {item.attributes.quantity} )
                            </div>
                          </div>
                        </div>

                        <div className="">
                          ₹{item.attributes.price * item.attributes.quantity}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
      </div>
    </div>
  )
}

export default MyOrder
