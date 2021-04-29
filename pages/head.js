import Head from 'next/head';

const CustomApp = ({ Component, pageProps }) => (
    <>
    
        <Head>
            <title>Learn Next.js</title>
            <link href="../css/currencies-direct.scss" rel ="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
    </>
);

export default CustomApp;