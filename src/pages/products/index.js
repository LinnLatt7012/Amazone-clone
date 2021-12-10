import Head from 'next/head'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductFeed from '../../components/ProductFeed'

// 
// const products =[{
//   id: 1,
//   title:"shirt",
//   price: 12345,
//   description: "Good quality",
//   category: "cloth",
//   image: "https://links.papareact.com/dyz",
// },
// {
//   id: 2,
//   title:"shirt",
//   price: 12345,
//   description: "Good quality",
//   category: "cloth",
//   image: "https://links.papareact.com/dyz",
// },
// {
//   id: 3,
//   title:"shirt",
//   price: 12345,
//   description: "Good quality",
//   category: "cloth",
//   image: "https://links.papareact.com/dyz",
// },
// {
//   id: 4,
//   title:"shirt",
//   price: 12345,
//   description: "Good quality",
//   category: "cloth",
//   image: "https://links.papareact.com/dyz",
// },
// {
//   id: 5,
//   title:"shirt",
//   price: 12345,
//   description: "Good quality",
//   category: "cloth",
//   image: "https://links.papareact.com/dyz",
// }
// ] 
// 

export default function Home({products}) {
  return (
    <div className= "bg-gray-100 h-screen">
      <Head>
        <title>Amazone.2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className="max-2-screen-2xl mx-auto ">
      <Banner />
      <ProductFeed products={products}/>
      </main>
    </div>
  )
} 
export async function getServerSideProps(context) {
  // const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products: products,
    },
  };
}
