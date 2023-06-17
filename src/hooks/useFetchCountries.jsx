import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service'

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally { 
        setIsLoading(false);
      }
    }
    fetchData();
   }, [])

  return {countries, isLoading, error}
}
