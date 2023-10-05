function sorting(arr,type){
  // console.log(arr,type);
  if(type==="lowest")
  return arr.sort((a,b)=>(a.price>b.price)?1:-1);
  if(type==="highest")
  return arr.sort((a,b)=>(a.price>b.price)?-1:1);
  if(type==='a-z')
  return arr.sort((a,b)=>{return a.name.localeCompare(b.name)});
  if(type==='z-a')
  return arr.sort((a,b)=>{return b.name.localeCompare(a.name)})
}
const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      // console.log(sorting(...state.filter_products,state.sorting_value));
      let temp = [...sorting(action.payload,state.sorting_value)];
       return{
         ...state,
         filter_products: temp,
         all_products: temp,
         copy_filter: temp
     }  
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
      case "GET_SORT_VALUE":
        return {
          ...state,
          sorting_value:action.payload,
        };
      case "SORTING_PRODUCTS":
         if(state.sorting_value==="lowest")
         {
          return{
            ...state,
            filter_products:[...state.filter_products.sort((a,b)=>(a.price>b.price)?1:-1)],
            copy_filter:[...state.filter_products.sort((a,b)=>(a.price>b.price)?1:-1)]
        }  }
        if(state.sorting_value==="highest")
        {
          // console.log(state.sorting_value);
          return{
            ...state,
            filter_products:[...state.filter_products.sort((a,b)=>(a.price>b.price)?-1:1)],
            copy_filter:[...state.filter_products.sort((a,b)=>(a.price>b.price)?-1:1)]
        }}
        if(state.sorting_value==="a-z")
        {
          // console.log(state.sorting_value);
          return{
            ...state,
            filter_products:[...state.filter_products.sort((a,b)=>{return a.name.localeCompare(b.name)})],
            copy_filter:[...state.filter_products.sort((a,b)=>{return a.name.localeCompare(b.name)})]
        }}
        if(state.sorting_value==="z-a")
        {
          console.log(state.sorting_value);
          return{
            ...state,
            filter_products:[...state.filter_products.sort((a,b)=>{return b.name.localeCompare(a.name)})],
            copy_filter:[...state.filter_products.sort((a,b)=>{return b.name.localeCompare(a.name)})]
        }
        }   
        case "UPDATE_FILTERS_VALUE":
          
        {// {console.log(action.payload)
          let temp = action.payload.name.toLowerCase();
          if(temp==='all')
          return {
             ...state,
             filter_products:[...sorting(action.payload.products,state.sorting_value)],
             copy_filter:[...sorting(action.payload.products,state.sorting_value)]
        }
      return {
        ...state,
        filter_products:[...sorting(action.payload.products.filter((crr)=>{return crr.category===temp}),state.sorting_value)],
        copy_filter:[...sorting(action.payload.products.filter((crr)=>{return crr.category===temp}),state.sorting_value)]
      }};
      case "UPDATE_FILTER_COMPANY":
        {
          let temp = action.payload.name;
          if(temp==='All')
          return {
            ...state,
            filter_products:[...sorting(action.payload.products,state.sorting_value)],
            copy_filter:[...sorting(action.payload.products,state.sorting_value)]
       }
       console.log(temp);
       return {
        ...state,
        filter_products:[...sorting(action.payload.products.filter((crr)=>{return crr.company===temp}),state.sorting_value)],
        copy_filter:[...sorting(action.payload.products.filter((crr)=>{return crr.company===temp}),state.sorting_value)]
       }
        };    
      case "UPDATE_TEXT_SEARCH":
        return {
          ...state,
          text:action.payload
        }
        case "UPDATE_FILTER_SEARCH":
          return {
            ...state,
            filter_products:[...sorting(action.payload.filter((crr)=>{return crr.name.toLowerCase().includes(state.text)}),state.sorting_value)],
            copy_filter:[...sorting(action.payload.filter((crr)=>{return crr.name.toLowerCase().includes(state.text)}),state.sorting_value)]
          }
        case "CLEAR_FILTER":
          return {
            ...state,
            filter_products:[...sorting(action.payload,state.sorting_value)],
            copy_filter:[...sorting(action.payload,state.sorting_value)],
            text:"",
            price:60000
          }
          case "UPDATE_PRICE":
            return {
              ...state,
              price:action.payload
            }
            case "UPDATE_FILTER_PRICE":
              let {price}=action.payload;
              let products = state.copy_filter;
              return {
                ...state,
                filter_products:[...sorting(products.filter((crr)=>{return crr.price<=price}),state.sorting_value)]
              }
    default:
      return state;
  }
};

export default filterReducer;