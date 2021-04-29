import { useRouter } from 'next/router';
import styles from './css/login.module.scss';


const Login = () => {
    const router = useRouter();
    return(
    <div id="root">
       <div className="dispFlex">
           <input type="text" placeholder="Enter Email" 
           className ="inputField"
           ></input>
           <input type = "password" placeholder="Enter your password" 
           className ="inputField"
           ></input>
           <button onClick={() => router.push('/dashboard')} >Submit</button>
           
        
       </div>
    </div>
    )}

export default Login;


