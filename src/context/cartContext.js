import { createContext, useContext, useReducer,useEffect } from "react";
import reducer from "../reducer/cartReducer"

const CartContext = createContext();
const getLocalData = ()=>{
    const data = localStorage.getItem("cartData");
    // console.log("get",data);
        if(data==[]){
        // console.log("empty")
        return [];
    }
    else if(data){
        // console.log("present");
        const temp = JSON.parse(data);
        // let total_amount=0;
        // let total_item=0;
        // temp.map((crr)=>{
        //     total_amount+=(crr.price*crr.quantity);
        //     total_item+=crr.quantity
        // })
        // state.total_amount=total_amount;
        // state.total_item=total_item;
        return temp;
    }}
   const  getTotalAmount=()=>{
    const data = localStorage.getItem("cartData");
    // console.log("get",data);
        if(data==[]){
        // console.log("empty")
        return 0;
    }
    else if(data) {
        // console.log("present");
        const temp = JSON.parse(data);
        let total_amount=0;
        // let total_item=0;
        temp.map((crr)=>{
            total_amount+=(crr.price*crr.quantity);
            // total_item+=crr.quantity
        })
        // state.total_amount=total_amount;
        // state.total_item=total_item;
        return total_amount;
    }
   }
   const getTotalItem=()=>{
    const data = localStorage.getItem("cartData");
    // console.log("get",data);
        if(data==[]){
        // console.log("empty")
        return 0;
    }
    else if(data) {
        // console.log("present");
        const temp = JSON.parse(data);
        // let total_amount=0;
        let total_item=0;
        temp.map((crr)=>{
            // total_amount+=(crr.price*crr.quantity);
            total_item+=crr.quantity
        })
        // state.total_amount=total_amount;
        // state.total_item=total_item;
        return total_item;
    }}
    const getShipping = ()=>{
        const data = localStorage.getItem("cartData");
    // console.log("get",data);
        if(data==[]){
        // console.log("empty")
        return 0;
    }
    else if(data) {
        // console.log("present");
        const temp = JSON.parse(data);
        let total_amount=0;
        // let total_item=0;
        temp.map((crr)=>{
            total_amount+=(crr.price*crr.quantity);
            // total_item+=crr.quantity
        })
        // state.total_amount=total_amount;
        // state.total_item=total_item;
        if(total_amount<100000){return 25000}
        else {return 0;}
    }
    }
   
const initialState = {
    cart:getLocalData(),
    total_amount:getTotalAmount(),
    total_item:getTotalItem(),
    shipping:getShipping()
}
const CartProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const addtocart = ({id,amount,name,images,price})=>{
        dispatch({type:"ADD_TO_CART",payload:{id,amount,name,images,price}})
    }
    useEffect(()=>{
        // console.log("add");
        localStorage.setItem("cartData",JSON.stringify(state.cart));
        const data = localStorage.getItem("cartData");
        // console.log("fun",data);
    },[state]);
    const setAmount=(quantity,id,price)=>{
        // console.log(quantity);
         if(quantity==0)
         removeItem(id);
         else
         {
            dispatch({type:"UPDATE_QUANTITY",payload:{id,quantity}})
         }
    }
    const removeItem = (id)=>{
        console.log(id);
        dispatch({type:"REMOVE_ITEM",payload:id});
    }
    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }
    return <CartContext.Provider value={{...state,addtocart,removeItem,setAmount,clearCart}}>
        {children}
    </CartContext.Provider>
}
const useCartContext = ()=>{
    return useContext(CartContext);
}
export {CartProvider,useCartContext}