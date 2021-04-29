import { useRouter } from 'next/router';
import styles from './css/login.module.scss';
import useSWR from 'swr';
import "./css/currencies-direct.scss";

const Dashboard = (theme) =>{
     const {
        query: { clientId },
      } = useRouter();
    const router = useRouter();
    return(

          
        <div>
        <div id="root">
        <div className="Nav">
            <button type="button"    onClick={() => router.push({ pathname: '/dashboard', query:{clientId:"currencies-direct"}})}>Currencies Direct</button>
        </div>
        <div className="Nav">
            <button type="button"    onClick={() => router.push({pathname: '/dashboard', query:{clientId:"TorFX"}})}>TorFX</button>
        </div>
        <div className="Nav">
            <button type="button"   onClick={() => router.push({pathname: '/dashboard', query:{clientId:"Ramsdens"}})}>Ramsdens</button>
        </div>
        <div className="Nav">
            <button type="button"   onClick={() => router.push({pathname: '/dashboard', query:{clientId:"Foremost"}})}>Foremost</button>
        </div>
        <div className="Nav">
            <button type="button"   onClick={() => router.push({pathname: '/dashboard', query:{clientId:"TMOz"}})}>TMOz</button>
        </div>
    </div>
     
    </div>
   
    )
}


Dashboard.getInitialProps = async function(context) {
    
    let clientId = context.query.clientId ? context.query.clientId:'currencies-direct';
    console.log("ClientId=====>",clientId);
    let theme = (clientId == 'currencies-direct')
      ? await import("./css/currencies-direct.scss")
      :(clientId == 'TorFX')? await import("./css/TorFX.scss"):await import("./css/Ramsdens.scss");
    console.log("Theme---->",theme);
    return { theme };
  };


// export const getServerSideProps = async (context) =>{
//     let clientId = context.query.clientId ? context.query.clientId:'currencies-direct';
    
// //     let theme = (clientId == 'currencies-direct')
// //     ? await import("./css/currencies-direct.scss")
// //     :(clientId == 'TorFX')? await import("./css/TorFX.scss"):await import("./css/Ramsdens.scss");
// // //    return(theme);

// //    if(clientId == 'currencies-direct'){
// //     theme = await import("./css/currencies-direct.scss");
// //    }else if(clientId == 'TorFX'){
// //     theme= await import("./css/TorFX.scss");
// //    }else{
// //        theme =await import("./css/Ramsdens.scss");
// //    }

//     // return {
//     //    props:{ revalidate:20,
//     //     theme:import("./css/currencies-direct.scss")}
//     // }
// }






export default Dashboard;