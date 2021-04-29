import {useRouter,withRouter} from 'next/router';
import Head from 'next/head';

const CustomApp = ({ Component, pageProps }) => {
    const {
        query: { clientId },
      } = useRouter();
     
     
    {if(clientId == 'currencies-direct'){
    return(
    <>
     <nav><h1>Main Nav:{clientId}</h1></nav>
     {/* <Head>
     <link href="/pages/css/currencies-direct.scss" rel ="stylesheet"></link>
     </Head> */}
     <Component {...pageProps} />
     </>
    )
    }else if(clientId == 'TorFX'){
        return(
        <>
         <nav><h1>Main Nav:{clientId}</h1></nav>
         {/* <Head>
        <link href="./css/TorFX.scss" rel ="stylesheet"></link>
        </Head> */}
         <Component {...pageProps} />
         </>
        )
        }else
        if(clientId == 'Ramsdens'){
            return(
            <>
             <nav><h1>Main Nav:{clientId}</h1></nav>
             {/* <Head>
            <link href="./css/Ramsdens.scss" rel ="stylesheet"></link>
            </Head> */}
             <Component {...pageProps} />
             </>
            )
            }else
            if(clientId == 'Foremost'){
                return(
                <>
                 <nav><h1>Main Nav:Foremost</h1></nav>
                 <Component {...pageProps} />
                 </>
                )
                }else{
        return(
            <>
             <nav><h1>Main Nav</h1></nav>
             
             <Component {...pageProps} />
             </>
        )
    }
  }
    };

export default CustomApp;


