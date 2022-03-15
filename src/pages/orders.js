
import { CheckCircleIcon } from "@heroicons/react/solid";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import moment from "moment";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { db } from "../../firebase";
import Order from "../components/Order";

function order({orders}) {
    const {data:session} = useSession();

  return (
    <div className=" h-screen">
      <main className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400 ">
            Your Orders
        </h1>
        {session?
            <h2>{orders.length} Orders</h2>
        :<h2> Please sign in to see your order</h2>}
        <div className="mt-5 space-y-4">
            {orders?.map(order=>(
                <Order order={order} key={order.id}/>
            ))}
        </div>
      </main>
    </div>
  );
}

export default order;

export async function getServerSideProps(context){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    //Get the userrs logged in credentials
    const session = await getSession(context);
    if(!session){
        return{
            props:{},
        };
    }

    const snapshotOrders =await getDocs(query(collection(db,"users",session.user.email,"orders"),orderBy('timestamp','desc')))

    const stripeOrders =[];
    snapshotOrders.forEach(async(doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id)
        stripeOrders.push(
            {
                id: doc.id,
                amount: doc.data().amount,
                images: doc.data().images,
                timestamp: moment(doc.data().timestamp.toDate()).unix(),
            }
        )
      });

    // const orders =stripeOrders.forEach(async(order)=>({
    //         id: order.id,
    //         amount: order.data().amount,
    //         amountShipping: order.data().amount_shipping,
    //         images: order.data().images,
    //         timestamp: moment(order.data().timestamp.toDate()).unix(),
    //         items:(
    //             await stripe.checkout.sessions.listLineItems(order.id,{
    //                 limit:100,
    //             })
    //         ).data,
    //     }))
    // onSnapshot(query(collection(db,"users",session.user.email,"orders"),orderBy('timestamp','desc')),
    // snapshot=>console.log("res",snapshot.docs));
    const orders = await Promise.all(stripeOrders.map(async(order)=>({
                ...order,
                items: (
                    await stripe.checkout.sessions.listLineItems(
                        order.id,{
                            limit:100,
                        }
                        )
                    ).data})
                ));
    // console.log(orders);          
    return{
        props:{orders},
    };

    
}