import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Instagram React</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* header */}
      <Header />
      {/* feet */}
      {/* modal */}
    </div>
  );
}
