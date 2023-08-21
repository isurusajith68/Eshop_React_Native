import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await axios.get("http://192.168.8.146:5000/api/products");
      setData(res.data.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    a;
    fetchData();
    setLoading(true);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
