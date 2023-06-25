import React from "react";
import ProductCard from "./components/ProductCard";

export default function App() {
  const products = [...Array(6).keys()]
  return (
    <>
      <Header />
      <Hero />
      <Main products={products} />
    </>
  );
}

function Header() {
  return (
    <header className="flex h-24 bg-sky-900 py-8 px-32 justify-between">
      <h1 className="text-xl font-bold text-white cursor-pointer">Logo</h1>
      <nav className="flex items-center">
        <ul className="flex space-x-6">
          <li className="text-sm font-bold text-white cursor-pointer hover:text-sky-300">
            <a href="#">Home</a>
          </li>
          <li className="text-sm font-bold text-white cursor-pointer hover:text-sky-300">
            <a href="#">Contact</a>
          </li>
          <li className="text-sm font-bold text-white cursor-pointer hover:text-sky-300">
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex h-96 bg-sky-900 py-8 px-32">
      <div className="flex w-full h-full flex-col space-y-7">
        <p className="text-5xl text-white">
          Persembahan Istimewa! Bersama kami
        </p>
        <p className="text-sm text-white text-ellipsis">
          Dapatkan diskon luar biasa hingga 20% untuk produk pilihan kami.
          Tingkatkan gaya hidupmu dengan koleksi terbaru dan hemat lebih banyak!
          Segera kunjungi toko kami sebelum minggu ini berakhir. Jangan lewatkan
          kesempatan emas ini untuk berbelanja cerdas!
        </p>
      </div>
      <div className="w-full h-full justify-center hidden lg:flex">
        <img className="h-96" src="src/assets/image-1.png" alt="img" />
      </div>
    </section>
  );
}

function Main({products}) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
      {
        products.map((key) => <ProductCard key = {key} />)
      }
    </main>
  );
}