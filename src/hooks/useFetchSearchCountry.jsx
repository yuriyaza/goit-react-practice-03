import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchSearchCountry = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // console.log(searchParams);
    const region = searchParams.get('query');
    if (!region) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return { countries, isLoading, error, handleSubmit };
};
