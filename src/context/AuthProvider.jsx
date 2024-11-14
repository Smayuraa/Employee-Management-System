import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"
  

export const AuthContext=createContext() 

const AuthProvider=({children})=>{

   const [userData, setUserData] = useState(null);

    useEffect(() => {
        //localStorage.clear()
        let { employees } = getLocalStorage();
        
        if(employees == null){
            setLocalStorage();
        }

        employees = getLocalStorage().employees;
        setUserData(employees)
    }, []);
    
      

    return(
        <>
     <AuthContext.Provider value={[userData,setUserData]}>
        {children} 
     </AuthContext.Provider>
     
        </>
    )
    
}
export default AuthProvider