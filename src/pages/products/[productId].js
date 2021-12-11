
import { useState } from 'react'
import { StarIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import CurrencyFormat from 'react-number-format';

const MAX_RATING = 5;
const MIN_RATING = 1;
function productid({ product: {id, title, price, description, category, image}}) {

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      category,
      price,
      image,
      rating
    };

    // dispatch(addToBasket(product));
  };
  // const { id, title, price, description, category, image} = props?.product
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 border border-grey-100 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" loading='lazy' />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 ">{description}</p>
      <div className="mb">
      <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <Image
            src="http://assets.stickpng.com/images/5f7f75fa3dd424000436e50e.png"
             width={48}
             height={20}
            // className="w-12"
            alt="Prime"
            loading="lazy"
          />
          <div className="text-xs text-gray-500">FREE Next-day delivery</div>
        </div>
      )}

      <button className="mt-auto button" onClick={addItemToBasket}>
        Add to basket
      </button>
    </div>
  )
}
export async function getStaticProps({ params }) {
    const data = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
    const product= await data.json()
    return {
      props: {
        product: product
      }
    }
  }
export  async function getStaticPaths() {
    return {
      paths:[
          {params: {
            productId: "1"
          }},
          {params: {
            productId: "2"
          }}
        ],
      fallback: 'blocking'
    }
  }
export default productid
