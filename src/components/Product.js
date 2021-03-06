import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from 'react-number-format';
import Link from "next/link";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(
    //generate random number
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

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
    console.log(product);

    dispatch(addToBasket(product));
  };

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 border border-grey-100 bg-white z-30 p-10" key={id}>
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain"  loading="lazy"/>
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <Link href={'/products/'+id} key={id} >See more...</Link>
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
  );
}
export default Product;
