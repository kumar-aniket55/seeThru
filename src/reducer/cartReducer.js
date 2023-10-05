const cartReducer = (state,action) => {
  switch(action.type){
    case "ADD_TO_CART":
      {
        const {id,amount,name,images,price}=action.payload;
        let temp = state.cart.find((crr)=>crr.id===id);
        let temp_cart = state.cart;
        console.log(temp_cart,temp);
        if(temp)
        {
         //find
        //  console.log(1);
          let inx = temp_cart.findIndex((crr)=>crr.id===id);
          temp_cart[inx].quantity+=amount;
        }
        else
        {
          // console.log(2);
          temp_cart.push({id:id,name:name,quantity:amount,price:price,images:images});
        }
        let shipping = 0;
        // console.log(state.total_amount+(amount*price));
        // console.log(state.total_amount+(amount*price)<100000);
        if(state.total_amount+(amount*price)<100000 && state.total_amount+(amount*price)!=0 )
        {
          // console.log("true");
          shipping=25000;
        }
        return {
          ...state,
          cart:temp_cart,
          total_amount:state.total_amount+(amount*price),
          total_item:state.total_item+(amount),
          shipping:shipping
        };
      };
  case "REMOVE_ITEM":{
    console.log(action.payload)
    let reduce_price;
    let reduce_quantity;
    let shipping=0;
      return {
        ...state,
        cart: state.cart.filter((crr)=>{
          if(crr.id==action.payload)
          {
            reduce_price=(crr.price*crr.quantity);
            reduce_quantity=(crr.quantity)
            if(state.total_amount-reduce_price<100000 && state.total_amount-reduce_price!=0)
            shipping=25000;
          }
          return crr.id!=action.payload;
        }),
        total_amount:state.total_amount-reduce_price,
        total_item:state.total_item-reduce_quantity,
        shipping:shipping
      }
  };
  case "UPDATE_QUANTITY":{
    const {id,quantity}=action.payload;
    // let temp = state.cart.find((crr)=>crr.id===id);
    let temp_cart = state.cart;
    let inx = temp_cart.findIndex((crr)=>crr.id===id);
    let reduce_price=temp_cart[inx].price;
    let reduce_quantity=1;
    if(temp_cart[inx].quantity>quantity)
    {
      reduce_price=(-1)*reduce_price;
      reduce_quantity=-1;
    }
    temp_cart[inx].quantity=quantity;
    let shipping=0;
    if(state.total_amount+reduce_price<100000 && state.total_amount+reduce_price!=0)shipping=25000;
    return {
      ...state,
      cart:temp_cart,
      total_amount:state.total_amount+reduce_price,
      total_item:state.total_item+reduce_quantity,
      shipping:shipping
    }
  };
  case "CLEAR_CART":{
    return {
      ...state,
      cart:[],
      total_amount:0,
      total_item:0,
      shipping:0
    }
  }
}
  
  return state;
}

export default cartReducer
