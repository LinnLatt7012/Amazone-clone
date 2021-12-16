
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex justify-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you for shopping with us. Well send a confirmation item has
            shipped, if you would like to check the status order please press
            the link below.
          </p>
          <button
            onClick={() => router.push("/")}
            className="button mt-8"
          >
            Go to home
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
