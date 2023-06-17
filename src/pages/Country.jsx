import { Section, Container, CountryInfo, Loader } from 'components';
import { useFetchCountry } from 'hooks/useFetchCountry';
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';
import { useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const Country = () => {
  const { country, isLoading, error } = useFetchCountry();
  // console.log(country);
  const location = useLocation();
  // console.log(location);
  const goBackUrl = location.state.from ?? routes.HOME;
  const { flag, capital, countryName, id, languages, population } = country;
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackUrl}>Go back</GoBackBtn>
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
