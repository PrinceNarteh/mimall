import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="flex justify-center py-5 divide-x-2 divide-gray-500">
          <h3 className="text-3xl px-10">Top Deals</h3>
          <h3 className="text-3xl px-10">Product Videos</h3>
          <h3 className="text-3xl px-10">Trending</h3>
        </div>
      </main>
    </div>
  );
}
