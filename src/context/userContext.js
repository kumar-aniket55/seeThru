import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/userReducer"


 const getusername = ()=>{
    let data = localStorage.getItem("username");
    if(data==[])return '';
    else if(data) return data;
 }
 const getemail = ()=>{
    let data = localStorage.getItem("email");
    if(data==[])return '';
    else if(data) return data;
 }
 const UserContext = createContext();
 const initialState = {
    username:getusername(),
    email:getemail()
 }
 const UserContextProvider = ({children})=>{
 
    const [state,dispatch] = useReducer(reducer,initialState);
    const setUser = (username,email)=>{
        // console.log(localStorage.getItem("username"));
        dispatch({type:"SET_USER",payload:{username,email}});
    }
    const resetUser = ()=>{
        console.log("resrey");
        dispatch({type:"RESET_USER"});
    }
    return (<UserContext.Provider value={{...state,setUser,resetUser}}>
        {children}
    </UserContext.Provider>)
 }
 const useUserContext = ()=>{
    return useContext(UserContext);
 }
 export {useUserContext,UserContextProvider};