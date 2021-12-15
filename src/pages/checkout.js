import Image from "next/image";
import CurrencyFormat from 'react-number-format';
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../slices/basketSlice";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";


const Checkout = () => {
  const items = useSelector(selectItems);
  const {data:session} = useSession();
  const subTotal = useSelector(selectTotal);
  console.log(items);

  return (
    <div className="bg-gray-100">
      <main className="lg:flex w-screen-2xl mx-auto">
        {/* Left section */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            height={250}
            width={1020}
            objectFit="contain"
            alt="Advert"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b text-center mx-32 pb-4">
              {items.length === 0
                ? "Your Amazon basket is empy"
                : "Shopping basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                isPrime={item.isPrime}
              />
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          <div className="center">
            Buy Order
            </div>
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">
                 <CurrencyFormat value={subTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </span>
              </h2>

              <button
              role="link"
            //   onClick={createCheckoutSession}
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
