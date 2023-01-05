import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center py-5 divide-x-2 divide-gray-500">
        <h3 className="text-3xl px-10">Top Deals</h3>
        <h3 className="text-3xl px-10">Product Videos</h3>
        <h3 className="text-3xl px-10">Trending</h3>
      </div>
      <section className="w-11/12 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="h-56 overflow-hidden relative bg-teal-500 rounded-2xl shadow-lg">
            <Image src={"/images/iphone-1.jpg"} fill={true} />
          </div>
          <div className="h-56 overflow-hidden relative bg-teal-500 rounded-2xl shadow-lg">
            <Image src={"/images/iphone-2.jpg"} fill={true} />
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto mb-10">
        <SectionHeader label={"Today's Best Deal"} />
        <div className="mt-5 flex justify-evenly flex-wrap">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className="min-h-screen py-10 bg-gray-200">
        <div className="w-11/12 mx-auto space-y-10">
          <div className="h-60 rounded-lg relative overflow-hidden">
            <Image src={"/images/banner-1.jpg"} fill={true} />
          </div>
          <div className="h-96 bg-teal-500 rounded-lg"></div>
        </div>
      </section>

      <Section label="Top Deals">
        <div className="flex gap-5">
          {Array(8)
            .fill(null)
            .map((_, idx) => (
              <div key={idx} className="h-40 w-40 bg-gray-400 rounded-lg"></div>
            ))}
        </div>
      </Section>

      <section className="bg-gray-200 py-10">
        <div className="w-11/12 mx-auto space-y-10">
          <div className="h-40 bg-gray-900 flex justify-center items-center">
            <span className="text-white text-4xl">Trending</span>
          </div>
          <div className="h-80 bg-white flex">
            <div className="p-7 w-60 h-full border-r-2 flex flex-col justify-between items-start">
              <h3 className="text-4xl font-semibold mb-5">Foods</h3>
              <div>
                <p className="text-xl font-semibold">Processed Food</p>
                <p className="text-xl font-semibold">Raw Food</p>
              </div>
              <button className="text-orange-500 font-semibold">
                Read More
              </button>
            </div>
            <div className="p-7 flex gap-7">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div key={idx} className="h-full w-60 bg-gray-400"></div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
