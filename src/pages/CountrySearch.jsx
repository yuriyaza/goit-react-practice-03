import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchSearchCountry } from 'hooks/useFetchSearchCountry';

export const CountrySearch = () => {
  const { countries, isLoading, error, handleSubmit } = useFetchSearchCountry();

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        <CountryList countries={countries}/>
      </Container>
    </Section>
  );
};
