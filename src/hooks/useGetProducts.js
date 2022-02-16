import { useEffect, useState } from "react";
import axios from "axios";


const useGetProducts = (API) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
    setLoading(false);
  }, [])
  return { products, loading };
}

export default useGetProducts;
