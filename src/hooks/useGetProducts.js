import { useEffect, useState } from "react";
import axios from "axios";

/**
 *API call to get data and manage loading state
 * @param string API url
 * @returns
 */

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, []);
  return { products, loading };
};

export default useGetProducts;
