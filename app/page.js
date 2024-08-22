import Image from "next/image";
import Head from 'next/head'
import Header from '../app/components/Header'
import NavBar from '../app/components/NavBar'
import Banner from '../app/components/Banner'
import ProductGrid from '../app/components/ProductGrid'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      <main>
        <Banner />
        <ProductGrid />
      </main>
    </div>
  )
}