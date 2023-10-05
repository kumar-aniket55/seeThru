import { createContext, useContext,useEffect,useReducer} from "react";
import axios from "axios";
import reducer from "../reducer/productReducer"
const URL="https://restapi-p7ir.onrender.com/products";
const AppContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const getProduct = async (URL)=>{
        dispatch({type:"SET_LOADING"});
        try {
            const res = await axios.get(URL);
            const products = await res.data;
            // console.log(products);
            dispatch({type:"SET_API_DATA",payload:products});
        } catch (error) {
            dispatch({type:"API_ERROR"});
        }
        
    };
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
          const res = await axios.get(url);
          const singleProduct = await res.data;
          console.log(singleProduct);
          dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
          dispatch({ type: "SET_SINGLE_ERROR" });
        }
      };
     useEffect(()=>{
       getProduct(URL);
     },[])
    return (
        <AppContext.Provider value={{...state, getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )
}
//custom hook
const useProductContext = ()=>{
    return useContext(AppContext);
};
export {AppProvider, AppContext , useProductContext };