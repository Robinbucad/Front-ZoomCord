
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function PrivateRoute({children}){
    const  token = sessionStorage.getItem('token')
    const location = useLocation()


    if(!token){
       
        return <Navigate to='/' state={{from:location}} replace></Navigate>
    }else{
        console.log('token')
        
    }
    return children
}

export default PrivateRoute