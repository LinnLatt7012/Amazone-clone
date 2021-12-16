import Head from 'next/head'
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';
import * as jose from 'jose'

export default function Home({products}) {
  return (
    <div className= "bg-gray-100 h-screen">
      <Head>
        <title>Amazone.2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className="max-w-screen-2xl mx-auto ">
      <Banner />
      <ProductFeed products={products}/>
      </main>
    </div>
  )
} 
export async function getServerSideProps() {
  const data = await fetch(`https://fakestoreapi.com/products`)
  const products= await data.json()

  return {
    props: {
      products: products,
    },
  };
}
