import React from 'react'
import moment from "moment";
import CurrencyFormat from 'react-number-format';

function Order({order}) {
    const {id,amount, images,timestamp,items} = order;
  return (
    <div className='relative border rounded-md'>
        <div className='flex item-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
           <div>
               <p className='font-bold text-xs'>Order PLACED </p>
               <p>{moment.unix(timestamp).format("DD MMM YYYY ")}</p>
           </div>
           <div>
               <p className='font-bold text-xs'>TOTAL </p>
               <p>
                <CurrencyFormat value={amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                - Next Day Delivery{" "}
               </p>
           </div>
           <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'> 
                {items.length} items
           </p>
           <p className='absolute top-2 right-2 w-40 lg:w-72 truncate 
           text-xs whitespace-nowrap'>
               ORDER# {id} </p>

        </div>
        <div className='p-5 sm:p-10'>
            <div className='flex space-x-6 overflow-x-auto'>
                {images.map(image=>(
                    <img src={image} className="h-20 object-contain sm:h-32"/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Order