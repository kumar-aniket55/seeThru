import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./contextProvider";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  text:"",
  minPrice:0,
  maxPrice:60000,
  price:60000,
  copy_filter:[]
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  // update the filter values
  const updateFilterValue = (event) => {
    let name = event.target.innerText;
     dispatch({ type: "UPDATE_FILTERS_VALUE", payload: {name,products} });
  };
  const updateFilterCompany = (event)=>{
    let name = event.target.value;
     dispatch({type : "UPDATE_FILTER_COMPANY" , payload : {name,products}})
  }
  const updateFilterText = (event)=>{
    let value = event.target.value;
    dispatch({type:"UPDATE_TEXT_SEARCH",payload:value})
    dispatch({type:"UPDATE_FILTER_SEARCH",payload:products})
  }
  const clearFilter = ()=>{
    dispatch({type:"CLEAR_FILTER",payload:products})
  }
 const updatefilterprice = (event)=>{
      //  console.log(event.target.value)
      let price = event.target.value;
       dispatch({type:"UPDATE_PRICE",payload:event.target.value})
       dispatch({type:"UPDATE_FILTER_PRICE",payload:{price,products}})
 }
  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" , payload:products});
  }, [products, state.sorting_value, state.filters]);

  // to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        updateFilterCompany,
        updateFilterText,
        clearFilter,
        updatefilterprice
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};