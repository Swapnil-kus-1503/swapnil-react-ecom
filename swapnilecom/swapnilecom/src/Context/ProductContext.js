import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";
const AppContext = createContext();

const api = "https://api.pujakaitem.com/api/products";

const initState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;

      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
